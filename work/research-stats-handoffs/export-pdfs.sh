#!/usr/bin/env bash
# Regenerate Research Stats handoff PDFs via Google Chrome headless.
# Edit handoff.html / one-pager.html (or HANDOFF.md), then re-run this script.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
MIRROR="${MIRROR:-$HOME/Documents/zhao-langxi/work/research-stats-handoffs}"

if [[ ! -x "$CHROME" ]]; then
  echo "Chrome not found at: $CHROME" >&2
  echo "Set CHROME=/path/to/Google\\ Chrome and retry." >&2
  exit 1
fi

print_pdf() {
  local html="$1"
  local out="$2"
  local abs_html
  abs_html="$(cd "$(dirname "$html")" && pwd)/$(basename "$html")"
  local abs_out
  abs_out="$(cd "$(dirname "$out")" && pwd)/$(basename "$out")"
  "$CHROME" \
    --headless \
    --disable-gpu \
    --no-pdf-header-footer \
    --print-to-pdf="$abs_out" \
    "file://$abs_html" \
    2>/dev/null
  echo "Wrote $abs_out ($(wc -c < "$abs_out" | tr -d ' ') bytes)"
}

print_pdf "$ROOT/handoff.html" "$ROOT/Research-Stats-Handoff.pdf"
print_pdf "$ROOT/one-pager.html" "$ROOT/Research-Stats-One-Pager.pdf"

# Keep a working copy next to the board (local mirror; not committed unless asked).
if [[ -n "$MIRROR" ]]; then
  mkdir -p "$MIRROR"
  rsync -a \
    --exclude '.DS_Store' \
    "$ROOT/" "$MIRROR/"
  echo "Mirrored to $MIRROR"
fi

echo "Done."
