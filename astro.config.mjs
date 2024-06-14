import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  experimental: {
    clientPrerender: true,
  },
  // Prefetching of Pages Added
  prefetch: true,
  site: "https://sabata.com",
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "monthly",
      priority: 0.8,
      // Cambiar para el deploy
      lastmod: new Date("2024-06-11"),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-MX",
        },
        routing: {
          prefixDefaultLocale: true,
          redirectToDefaultLocale: false,
        },
      },
    }),
    react(),
    compressor({ gzip: true, brotli: false }),
  ],
  output: "server",
  adapter: vercel(),
});
