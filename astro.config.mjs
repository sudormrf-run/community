// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sudoremove.github.io',
  base: '/community',
  output: 'static',
  build: {
    format: 'directory'
  }
});
