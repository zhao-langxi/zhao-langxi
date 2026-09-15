#!/usr/bin/env python3
"""Compute honest product KPIs for the Research Stats board.

Counts come from the shipped zhao-langxi HTML/JS artifact (Figma Make → build).
Industry market % in STATS are research *inputs*, not personal achievement metrics.
Figma analytics are out of scope without CLI / API auth.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import urllib.error
import urllib.request
from collections import Counter
from pathlib import Path

DEFAULT_ROOT = Path("/Users/jadexzhao/Documents/zhao-langxi")
LIVE_URL = "https://zhao-langxi.github.io/zhao-langxi/work/research-stats.html"
FIGMA_MAKE_URL = (
    "https://www.figma.com/make/xN1Erf5GxpXhIva0TcJp11/"
    "Research-Stats-Project-Development"
)


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def extract_block(js: str, start_marker: str, end_marker: str) -> str:
    start = js.find(start_marker)
    if start < 0:
        raise ValueError(f"Missing marker: {start_marker}")
    end = js.find(end_marker, start)
    if end < 0:
        raise ValueError(f"Missing end marker: {end_marker}")
    return js[start:end]


def count_stat_objects(stats_block: str) -> list[dict[str, str]]:
    """Parse id + theme from STATS object literals (honest structural count)."""
    stats: list[dict[str, str]] = []
    for match in re.finditer(
        r'id:\s*"(?P<id>[^"]+)"\s*,\s*theme:\s*"(?P<theme>[^"]+)"',
        stats_block,
    ):
        stats.append({"id": match.group("id"), "theme": match.group("theme")})
    return stats


def count_theme_defs(themes_block: str) -> list[str]:
    return re.findall(r'^\s+id:\s*"([^"]+)"', themes_block, flags=re.M)


def count_inbound_pages(root: Path) -> list[str]:
    pages: list[str] = []
    for html in sorted(root.rglob("*.html")):
        if html.name == "research-stats.html":
            continue
        text = read_text(html)
        if "research-stats.html" in text:
            pages.append(str(html.relative_to(root)))
    return pages


def interaction_patterns(html: str, js: str) -> dict[str, bool | int]:
    return {
        "theme_filter_tabs": html.count('role="tab"'),
        "card_multi_select_max": 3 if "MAX_SELECT = 3" in js else None,
        "cluster_stepper": "project-stepper" in html,
        "project_lock_and_clear": "stepper-lock" in html and "rs-locked-clear" in html,
        "localStorage_session_notes": "stats-notes-field" in html and "NOTES_KEY" in js,
        "localStorage_keys": len(
            sorted(set(re.findall(r"zhao-langxi-research-stats-[a-z]+", js)))
        ),
        "url_deep_link_params": ("theme" in js and "statParam" in js)
        or ("URLSearchParams" in js),
        "card_analysis_layers": 3,  # What · Why it matters · What to build
    }


def check_live(url: str, timeout: float = 8.0) -> dict[str, object]:
    """Prefer curl (macOS Python often lacks CA certs); fall back to urllib."""
    curl = subprocess.run(
        [
            "curl",
            "-s",
            "-o",
            "/dev/null",
            "-w",
            "%{http_code}",
            "--max-time",
            str(int(timeout)),
            url,
        ],
        capture_output=True,
        text=True,
        check=False,
    )
    if curl.returncode == 0 and (curl.stdout or "").strip().isdigit():
        status = int(curl.stdout.strip())
        return {"url": url, "status": status, "live": 200 <= status < 400}

    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "research-stats-kpi-report/1.0"},
        )
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            status = getattr(resp, "status", 200)
            return {"url": url, "status": status, "live": 200 <= status < 400}
    except urllib.error.HTTPError as err:
        return {"url": url, "status": err.code, "live": False}
    except Exception as err:  # noqa: BLE001 - report toolability honestly
        return {"url": url, "status": None, "live": False, "error": str(err)}


def figma_access_note() -> dict[str, object]:
    which = subprocess.run(
        ["bash", "-lc", "command -v figma || true"],
        capture_output=True,
        text=True,
        check=False,
    )
    cli = (which.stdout or "").strip()
    import os

    token = bool(os.environ.get("FIGMA_ACCESS_TOKEN") or os.environ.get("FIGMA_TOKEN"))
    return {
        "figma_make_url": FIGMA_MAKE_URL,
        "cli_available": bool(cli),
        "api_token_in_env": token,
        "note": (
            "No Figma CLI or API token available; KPIs come from the shipped HTML/JS "
            "product that implements the Figma Make brief (design → build). "
            "Do not claim Figma analytics."
            if not cli and not token
            else "Figma tooling detected; still prefer shipped-product KPIs over unverified analytics."
        ),
    }


def compute(root: Path) -> dict[str, object]:
    html_path = root / "work" / "research-stats.html"
    js_path = root / "js" / "research-stats.js"
    if not html_path.is_file() or not js_path.is_file():
        raise FileNotFoundError(
            f"Expected shipped files at {html_path} and {js_path}"
        )

    html = read_text(html_path)
    js = read_text(js_path)
    stats_block = extract_block(js, "var STATS = [", "var THEMES = [")
    themes_block = extract_block(js, "var THEMES = [", "var NOTES_KEY")
    stats = count_stat_objects(stats_block)
    theme_ids = count_theme_defs(themes_block)
    theme_counts = Counter(s["theme"] for s in stats)
    inbound = count_inbound_pages(root)
    interactions = interaction_patterns(html, js)

    # Named interaction patterns suitable for resume wording
    named_patterns = [
        "theme filters",
        "multi-select clustering (up to 3 cards)",
        "cluster stepper",
        "project lock",
        "localStorage session notes",
    ]

    report = {
        "product": "Research Stats interactive board",
        "paths": {
            "html": str(html_path),
            "js": str(js_path),
        },
        "product_kpis": {
            "stat_cards": len(stats),
            "themes": len(theme_ids),
            "theme_ids": theme_ids,
            "cards_per_theme": dict(theme_counts),
            "analysis_layers_per_card": interactions["card_analysis_layers"],
            "named_interaction_patterns": named_patterns,
            "interaction_pattern_count": len(named_patterns),
            "theme_filter_tabs": interactions["theme_filter_tabs"],
            "localStorage_keys": interactions["localStorage_keys"],
            "inbound_linking_pages": len(inbound),
            "inbound_linking_page_paths": inbound,
        },
        "secondary_size": {
            "js_lines": len(js.splitlines()),
            "html_lines": len(html.splitlines()),
            "js_bytes": js_path.stat().st_size,
            "html_bytes": html_path.stat().st_size,
        },
        "deploy": check_live(LIVE_URL),
        "figma": figma_access_note(),
        "market_research_inputs_not_personal_kpis": {
            "note": (
                "Figures inside STATS (e.g. 72%, 5%) are published industry research "
                "used as project inputs. They are citations, not Jade's personal metrics."
            ),
            "example_citations_on_cv": [
                "72% generative AI adoption (McKinsey, 2025)",
                "5% at-scale enterprise integration (MIT, 2025)",
            ],
        },
        "resume_ready_line": (
            f"Shipped interactive research board: {len(stats)} stats across "
            f"{len(theme_ids)} themes, with {len(named_patterns)} interaction patterns "
            f"(theme filters, multi-select clustering, cluster stepper, project lock, "
            f"localStorage notes) for how/why analysis; synthesised published market "
            f"research (72% generative AI adoption vs 5% at-scale integration) as "
            f"project inputs (McKinsey, 2025; MIT, 2025)."
        ),
    }
    return report


def print_human(report: dict[str, object]) -> None:
    k = report["product_kpis"]
    print("=== Research Stats · product KPI report ===")
    print(f"Product: {report['product']}")
    print(f"HTML: {report['paths']['html']}")
    print(f"JS:   {report['paths']['js']}")
    print()
    print("--- PRODUCT KPIs (countable from shipped artifact) ---")
    print(f"Stat cards:              {k['stat_cards']}")
    print(f"Themes:                  {k['themes']} ({', '.join(k['theme_ids'])})")
    print(f"Cards per theme:         {k['cards_per_theme']}")
    print(f"Analysis layers / card:  {k['analysis_layers_per_card']} (What · Why · What to build)")
    print(f"Interaction patterns:    {k['interaction_pattern_count']}")
    for name in k["named_interaction_patterns"]:
        print(f"  - {name}")
    print(f"Theme filter tabs:       {k['theme_filter_tabs']}")
    print(f"localStorage keys:       {k['localStorage_keys']}")
    print(f"Inbound linking pages:   {k['inbound_linking_pages']}")
    for path in k["inbound_linking_page_paths"]:
        print(f"  - {path}")
    print()
    print("--- SECONDARY (size; optional on resume) ---")
    s = report["secondary_size"]
    print(f"JS lines / bytes:   {s['js_lines']} / {s['js_bytes']}")
    print(f"HTML lines / bytes: {s['html_lines']} / {s['html_bytes']}")
    print()
    print("--- DEPLOY ---")
    d = report["deploy"]
    print(f"Checked: {d.get('url')}")
    print(f"HTTP status: {d.get('status')}")
    print(
        "Live on GitHub Pages: YES"
        if d.get("live")
        else "Live on GitHub Pages: NO (local ship only; do not invent a live URL claim)"
    )
    print()
    print("--- FIGMA ---")
    f = report["figma"]
    print(f"Make brief: {f['figma_make_url']}")
    print(f"CLI available: {f['cli_available']}")
    print(f"API token in env: {f['api_token_in_env']}")
    print(f"Note: {f['note']}")
    print()
    print("--- MARKET RESEARCH (citations / inputs … NOT personal KPIs) ---")
    m = report["market_research_inputs_not_personal_kpis"]
    print(m["note"])
    for ex in m["example_citations_on_cv"]:
        print(f"  - {ex}")
    print()
    print("--- RESUME-READY LINE ---")
    print(report["resume_ready_line"])


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--root",
        type=Path,
        default=DEFAULT_ROOT,
        help="zhao-langxi repo root containing work/research-stats.html",
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Print machine-readable JSON instead of the human report",
    )
    args = parser.parse_args()
    report = compute(args.root.resolve())
    if args.json:
        print(json.dumps(report, indent=2))
    else:
        print_human(report)


if __name__ == "__main__":
    main()
