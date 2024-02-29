import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: "https://brantaweb.com/",
  integrations: [
    tailwind(), icon()
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  server: { port: 4321 }
});
