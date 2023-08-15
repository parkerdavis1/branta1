import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [
    tailwind(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  experimental: {
    assets: true,
    viewTransitions: true
  },
  server: { port: 1234 }
});
