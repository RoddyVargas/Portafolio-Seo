import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://roddyvargas.github.io/Portafolio-Seo/',
  base: '/Portafolio-seo/',
  integrations: [tailwind()],
  adapter: netlify({
    edgeMiddleware:true
  }),
});