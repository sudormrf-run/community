// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://sudoremove.github.io',
  base: '/community',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [mdx()]
});
