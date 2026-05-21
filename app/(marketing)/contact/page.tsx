import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Contact Us", path: "/contact" });
export default function ContactPage() {
  const mapUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? "https://www.google.com/maps?q=Arusha%20Tanzania&output=embed";
  return (
    <>
      <PageHero eyebrow="Contact us" title="Let’s plan Tanzania." description="Speak with our safari designers for tailored itineraries and quick support." image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80" />
      <section className="pb-24 pt-16"><div className="container-luxury grid gap-10 lg:grid-cols-2"><div className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-sm"><div className="space-y-4 text-charcoal/75"><p className="flex gap-3"><MapPin className="text-gold" />{siteConfig.location}</p><p className="flex gap-3"><Phone className="text-gold" />{siteConfig.phone}</p><p className="flex gap-3"><Mail className="text-gold" />{siteConfig.email}</p></div><iframe title="Great Roar Safaris map" src={mapUrl} className="mt-8 h-72 w-full rounded-[2rem] border-0" loading="lazy" /></div><ContactForm /></div></section>
    </>
  );
}
