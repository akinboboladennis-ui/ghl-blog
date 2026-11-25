# GHL Architect Blog — blog.dennisakinbobola.com

Astro 5 + MDX + Tailwind tech blog for Dennis Akinbobola (GoHighLevel Solutions Architect),
built for monetization: affiliate, lead-gen, digital products, ads.

## Run it

```bash
npm install
npm run dev     # local dev
npm run build   # static build -> dist/
```

## How the forms work (no accounts needed)

- **Newsletter** (`NewsletterForm.astro`, on home + `/newsletter` + product page):
  posts via FormSubmit AJAX to **info@dennisakinbobola.com**.
- **Snapshot orders** (`/products/dentist-snapshot/`): same route, subject
  "New Dentist Snapshot order ($99)". Buy button → WhatsApp until a real
  checkout link is set in `src/site.ts`.
- **Hire-me quote form** (`/hire-me/`): same route, subject "New hire-me inquiry".
- **Both sides notified:** you get an email per fill; the visitor gets an
  instant autoresponse email.
- **Activation (one-time):** after deploy, submit each form once yourself —
  FormSubmit emails you a confirmation link. Click it. Done forever.

## To switch to paid checkouts / real ESP later

- `src/site.ts` → `snapshotCheckoutUrl`: paste Gumroad/Lemon Squeezy URL.
- Newsletter: paste ConvertKit/Beehiiv/GHL embed into `NewsletterForm.astro`.

## Analytics

Vercel Web Analytics via script snippet (`src/components/Analytics.astro`) —
zero config, live automatically on Opus deploys. Enable it in the Opus
project dashboard (Analytics tab) if prompted.

## Launch checklist

- [x] Domain set: `blog.dennisakinbobola.com`
- [x] GHL affiliate link live (`src/site.ts`)
- [x] Contact email: info@dennisakinbobola.com
- [x] Forms route to inbox + autorespond
- [ ] `npm install && npm run build` green
- [ ] Activate FormSubmit (submit each form once, click confirmation)
- [ ] Deploy per [DEPLOY.md](DEPLOY.md), submit sitemap to Search Console

## Content

12 posts in `src/content/blog/`, product page at `/products/dentist-snapshot/`,
5-email sequence in [EMAIL-SEQUENCE.md](EMAIL-SEQUENCE.md).
