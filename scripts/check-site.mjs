#!/usr/bin/env node
/**
 * Pre-publish checks for zhao-langxi static HTML.
 * Usage: node scripts/check-site.mjs
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SITE_BASE = "https://zhao-langxi.github.io/zhao-langxi";
const htmlFiles = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (["scripts", "fragments", ".git", ".github", "node_modules"].includes(name)) continue;
      walk(p);
    } else if (name.endsWith(".html")) htmlFiles.push(p);
  }
}

walk(root);

const errors = [];
const warnings = [];

function resolveHref(fromFile, href) {
  const pathPart = href.split("#")[0].split("?")[0];
  if (!pathPart) return null;
  return resolve(dirname(fromFile), pathPart);
}

for (const file of htmlFiles) {
  const rel = file.slice(root.length + 1);
  const html = readFileSync(file, "utf8");

  if (!/<meta[^>]+name=["']description["']/i.test(html)) {
    errors.push(`${rel}: missing meta description`);
  }

  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  if (canonical && !canonical[1].startsWith(SITE_BASE)) {
    warnings.push(`${rel}: canonical not under ${SITE_BASE}`);
  }

  if (rel === "index.html" && /http-equiv=["']refresh["']/i.test(html) && /instagram\.com/i.test(html)) {
    errors.push(`${rel}: homepage must not redirect to Instagram`);
  }

  if (/index\.html#thesis|index\.html#origin/.test(html)) {
    errors.push(`${rel}: broken nav anchor (use index.html#essays or #themes)`);
  }

  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)];
  for (const tag of imgs) {
    if (!/\balt=["'][^"']+["']/.test(tag[0])) {
      errors.push(`${rel}: img missing alt: ${tag[0].slice(0, 60)}...`);
    }
  }

  const hrefs = [...html.matchAll(/href=["']([^"']+)["']/gi)].map((m) => m[1]);
  for (const href of hrefs) {
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) continue;
    const target = resolveHref(file, href);
    if (!target || !existsSync(target)) {
      errors.push(`${rel}: broken local link → ${href}`);
    }
  }
}

console.log(`Checked ${htmlFiles.length} HTML file(s) under ${root}\n`);

if (warnings.length) {
  console.log("Warnings:");
  warnings.forEach((w) => console.log("  •", w));
  console.log("");
}

if (errors.length) {
  console.log("Errors:");
  errors.forEach((e) => console.log("  •", e));
  process.exit(1);
}

console.log("All checks passed.");
