import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://roddyvargas.github.io/Portafolio-Seo/',
  base: '/Portafolio-seo/',
  integrations: [tailwind()]
});