# GHL Architect Blog — blog.dennisakinbobola.com

Astro 5 + MDX + Tailwind tech blog for Dennis Akinbobola (GoHighLevel Solutions Architect),
built for monetization: affiliate, lead-gen, digital products, ads.

## Run it

```bash
npm install
npm run dev     # local dev
npm run build   # static build -> dist/
```

## Launch checklist

- [x] Domain set: `blog.dennisakinbobola.com` (astro.config.mjs, robots.txt, analytics slot)
- [x] GHL affiliate link live (`src/site.ts` → `ghlAffiliate`)
- [ ] `src/site.ts`: set `snapshotCheckoutUrl` (Gumroad/Lemon Squeezy link)
- [ ] `src/site.ts`: set `newsletterEmbedUrl` (or paste GHL form embed in `NewsletterForm.astro`)
- [ ] `src/layouts/Base.astro`: set `analyticsSrc` (Plausible/Umami)
- [ ] Deploy per [DEPLOY.md](DEPLOY.md), submit sitemap to Search Console
- [ ] Test: newsletter signup, affiliate click, checkout button

## Content

12 posts in `src/content/blog/`, product page at `/products/dentist-snapshot/`,
5-email sequence in [EMAIL-SEQUENCE.md](EMAIL-SEQUENCE.md).
