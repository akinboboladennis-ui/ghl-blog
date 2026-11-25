// ── Single source of truth for site-wide links ─────────────────────────────
// Fill in the TODOs once, everything (layouts, posts, products) picks them up.

export const site = {
  name: 'Dennis Akinbobola — GHL Architect',
  tagline: 'I turn messy CRMs into systems that sell.',
  officialSite: 'https://dennisakinbobola.com',
  whatsapp: 'https://wa.me/2348076455530',
  // GHL affiliate link (paid link — keep disclosures next to every use)
  ghlAffiliate: 'https://www.gohighlevel.com/8342b9?fp_ref=dennis-50',
  // TODO: paste your Gumroad / Lemon Squeezy checkout URL for the $99 snapshot
  snapshotCheckoutUrl: 'https://dennisakinbobola.com',
  // TODO: paste your newsletter provider's hosted form URL (ConvertKit/Beehiiv/GHL).
  // If set, the newsletter form embeds it in an iframe; otherwise shows the
  // GHL-form placeholder + mailto fallback.
  newsletterEmbedUrl: '',
  contactEmail: 'hello@dennisakinbobola.com',
} as const;
