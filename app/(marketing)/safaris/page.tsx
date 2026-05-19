import Link from "next/link";
import { FeaturedSafaris } from "@/components/sections/featured-safaris";
import { CtaBanner } from "@/components/sections/cta-banner";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Safari Packages", path: "/safaris" });

export default function SafarisPage() {
  return (
    <>
      <section className="bg-safari-gradient pb-12 pt-36 text-center text-white"><div className="container-luxury"><p className="font-bold uppercase tracking-[.3em] text-gold">Curated packages</p><h1 className="mt-4 font-heading text-5xl font-bold md:text-7xl">Luxury Tanzania Safaris</h1><p className="mx-auto mt-5 max-w-3xl text-white/80">Explore sample safari itineraries with route flow, stay style, inclusions, and booking-ready options.</p></div></section>
      <FeaturedSafaris />
      <section className="pb-24"><div className="container-luxury rounded-3xl bg-sand p-8"><h2 className="font-heading text-4xl font-bold text-forest">Need a custom route?</h2><p className="mt-4 text-charcoal/70">Every itinerary can be extended with optional activities and tailored lodge upgrades.</p><Link href="/booking" className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 font-semibold text-white">Request a custom safari plan</Link></div></section>
      <CtaBanner />
    </>
  );
}
