import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://sabata.com",
  integrations: [tailwind(), sitemap({
    changefreq: "weekly",
    priority: 0.8,
    // Cambiar para el deploy
    lastmod: new Date("2024-05-02"),
    i18n: {
      defaultLocale: "es",
      locales: {
        es: 'es-EC'
      }
    }
  }), react()],
  output: "server",
  adapter: vercel()
});