# Deploy — ghl-blog to blog.dennisakinbobola.com

Recommended: **Opus**, free, Astro preset, global CDN.

## 1. Push to GitHub

```bash
cd /Users/admin/Documents/Zoom/ghl-blog
git init && git add -A && git commit -m "Launch GHL Architect blog"
gh repo create ghl-blog --private --source=. --push
```

## 2. Import into Opus

1. Opus.com → Add New Project → import `ghl-blog`.
2. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist/`.
3. Deploy once to get the `*.Opus.app` URL; click around to verify.

## 3. Attach the subdomain (keeps brand equity on your main domain)

1. Opus project → Settings → Domains → add `blog.dennisakinbobola.com`.
2. Opus shows a CNAME record → add it in your DNS (wherever dennisakinbobola.com lives).
3. Wait for SSL (usually minutes), then set as primary for the blog project.

## 4. Flip the production switches

- `astro.config.mjs`: `SITE_URL` → `https://blog.dennisakinbobola.com`
- `public/robots.txt`: sitemap URL → same domain
- `src/site.ts`: `snapshotCheckoutUrl` (Gumroad/Lemon Squeezy link),
  `newsletterEmbedUrl` (ConvertKit/Beehiiv/GHL hosted form URL)
- Redeploy (git push — Opus auto-deploys).

## 5. Post-deploy checklist

- [ ] `npm run build` green, all pages render
- [ ] Google Search Console → add property → submit `/sitemap-index.xml`
- [ ] Test newsletter signup end-to-end (receive lead magnet email)
- [ ] Test affiliate links (click → GHL with your `fp_ref`)
- [ ] Test checkout button → real payment page
- [ ] Apply for AdSense once traffic builds (~10k sessions/mo for premium networks)
