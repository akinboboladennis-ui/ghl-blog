// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production domain: blog subdomain keeps brand equity on dennisakinbobola.com
// and avoids GHL trademark issues (no "gohighlevel" in the domain).
const SITE_URL = 'https://blog.dennisakinbobola.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
