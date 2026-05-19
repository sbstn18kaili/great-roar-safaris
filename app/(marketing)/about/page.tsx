import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = createMetadata({ title: "About Us", path: "/about" });

export default function AboutPage() {
  return (
    <>
      <section className="bg-safari-gradient pb-20 pt-40 text-white"><div className="container-luxury max-w-4xl"><p className="font-bold uppercase tracking-[.3em] text-gold">About Great Roar</p><h1 className="mt-4 font-heading text-5xl font-bold md:text-7xl">Tanzania safari craft from Ngorongoro insiders.</h1><p className="mt-6 text-xl leading-9 text-white/75">We are a locally rooted safari company designing private, conservation-minded luxury journeys across Tanzania’s parks, mountains, islands, and cultures.</p></div></section>
      <section className="container-luxury grid gap-10 py-24 lg:grid-cols-2"><div><h2 className="font-heading text-4xl font-bold text-forest">Our promise</h2><p className="mt-5 leading-8 text-charcoal/70">Great Roar Safaris pairs precise logistics with soulful travel design. Every route is shaped around wildlife movements, lodge quality, guest comfort, and respectful community engagement.</p><p className="mt-5 leading-8 text-charcoal/70">Our guides are natural storytellers, safety-minded professionals, and proud ambassadors for Tanzania’s wild heritage.</p></div><div className="relative min-h-[420px] overflow-hidden rounded-[2rem]"><Image src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=80" alt="Great Roar Safaris guests on a luxury safari" fill className="object-cover" /></div></section>
      <CtaBanner />
    </>
  );
}
