import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Contact Us", path: "/contact" });
export default function ContactPage() { const mapUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ?? "https://www.google.com/maps?q=Ngorongoro%20Conservation%20Area&output=embed"; return <section className="pb-24 pt-40"><div className="container-luxury grid gap-10 lg:grid-cols-2"><div><p className="font-bold uppercase tracking-[.3em] text-gold">Contact us</p><h1 className="mt-4 font-heading text-5xl font-bold text-forest md:text-6xl">Let’s plan Tanzania.</h1><div className="mt-8 space-y-4 text-charcoal/75"><p className="flex gap-3"><MapPin className="text-gold" />{siteConfig.location}</p><p className="flex gap-3"><Phone className="text-gold" />{siteConfig.phone}</p><p className="flex gap-3"><Mail className="text-gold" />{siteConfig.email}</p></div><iframe title="Great Roar Safaris map" src={mapUrl} className="mt-8 h-72 w-full rounded-[2rem] border-0" loading="lazy" /></div><ContactForm /></div></section>; }
