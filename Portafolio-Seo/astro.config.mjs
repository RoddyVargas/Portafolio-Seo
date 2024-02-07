import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site:'https://roddyvargas.github.io/Portafolio-Seo/',
  base: '/Portafolio-Seo',
  integrations: [tailwind()]
});