export const siteConfig = {
  name: "Great Roar Safaris",
  location: "Arusha, Tanzania",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://greatroarsafaris.com",
  description:
    "Luxury Tanzania safari specialists for Serengeti migrations, Ngorongoro Crater tours, Kilimanjaro treks, Zanzibar escapes, and cultural adventures.",
  email: "reservations@greatroarsafaris.com",
  phone: "+255 700 000 000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "255700000000",
  socials: {
    instagram: "https://instagram.com/greatroarsafaris",
    facebook: "https://facebook.com/greatroarsafaris",
    x: "https://x.com/greatroarsafari"
  }
};
