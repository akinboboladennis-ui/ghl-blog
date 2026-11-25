// ── Single source of truth for site-wide links ─────────────────────────────

export const site = {
  name: 'Dennis Akinbobola — GHL Architect',
  tagline: 'I turn messy CRMs into systems that sell.',
  officialSite: 'https://dennisakinbobola.com',
  whatsapp: 'https://wa.me/2348076455530',
  // GHL affiliate link (paid link — keep disclosures next to every use)
  ghlAffiliate: 'https://www.gohighlevel.com/8342b9?fp_ref=dennis-50',
  // Snapshot orders route to WhatsApp until a Gumroad/Lemon Squeezy link exists.
  // To switch: set this to the checkout URL — the buy button picks it up.
  snapshotCheckoutUrl: 'https://wa.me/2348076455530?text=Hi%20Dennis!%20I%20want%20the%20Dentist%20Snapshot%20(%2499).',
  // Newsletter + contact forms post via FormSubmit (zero-config, no account):
  // first submission triggers a confirmation email to this address — click it
  // once to activate, then every form fill notifies you AND the visitor
  // (via the autoresponse configured in NewsletterForm.astro).
  contactEmail: 'info@dennisakinbobola.com',
} as const;
