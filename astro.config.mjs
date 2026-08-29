// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Change this to your real domain once you have one.
  // It is used for canonical URLs and the sitemap.
  site: 'https://paarthmehra.pages.dev',
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
