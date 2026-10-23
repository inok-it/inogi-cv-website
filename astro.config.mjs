// astro.config.mjs
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/inter-400.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/inter-700.woff2"],
          },
          {
            weight: 900,
            style: "normal",
            src: ["./src/assets/fonts/inter-900.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/jetbrains-mono-400.woff2"],
          },
        ],
      },
    },
  ],
  site: "https://inogi.pl",
  integrations: [sitemap()],
});