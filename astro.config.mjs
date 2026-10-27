import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://zhao-langxi.github.io",
  base: "/zhao-langxi/",
  trailingSlash: "never",
  build: {
    format: "file",
  },
});
