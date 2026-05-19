import { PageHero } from "@/components/sections/page-hero";
import Link from "next/link";
import { FeaturedSafaris } from "@/components/sections/featured-safaris";
import { CtaBanner } from "@/components/sections/cta-banner";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Safari Packages", path: "/safaris" });

export default function SafarisPage() {
  return (
    <>
      <PageHero eyebrow="Curated packages" title="Luxury Tanzania Safaris" description="Explore sample safari itineraries with route flow, stay style, inclusions, and booking-ready options." image="https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=2000&q=80" />
      <FeaturedSafaris />
      <section className="pb-24"><div className="container-luxury rounded-3xl bg-sand p-8"><h2 className="font-heading text-4xl font-bold text-forest">Need a custom route?</h2><p className="mt-4 text-charcoal/70">Every itinerary can be extended with optional activities and tailored lodge upgrades.</p><Link href="/booking" className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 font-semibold text-white">Request a custom safari plan</Link></div></section>
      <CtaBanner />
    </>
  );
}
