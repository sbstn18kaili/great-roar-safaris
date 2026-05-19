import { PageHero } from "@/components/sections/page-hero";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = createMetadata({ title: "About Us", path: "/about" });

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Great Roar" title="Tanzania safari craft from Arusha insiders." description="We design private, conservation-minded luxury journeys across Tanzania’s parks, mountains, islands, and cultures." image="https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=2000&q=80" />
      <section className="container-luxury grid gap-10 py-24 lg:grid-cols-2"><div><h2 className="font-heading text-4xl font-bold text-forest">Our promise</h2><p className="mt-5 leading-8 text-charcoal/70">Great Roar Safaris pairs precise logistics with soulful travel design. Every route is shaped around wildlife movements, lodge quality, guest comfort, and respectful community engagement.</p><p className="mt-5 leading-8 text-charcoal/70">Our guides are natural storytellers, safety-minded professionals, and proud ambassadors for Tanzania’s wild heritage.</p></div><div className="relative min-h-[420px] overflow-hidden rounded-[2rem]"><Image src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=80" alt="Great Roar Safaris guests on a luxury safari" fill className="object-cover" /></div></section>
      <CtaBanner />
    </>
  );
}
