import { FeaturedSafaris } from "@/components/sections/featured-safaris";
import { CtaBanner } from "@/components/sections/cta-banner";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Safari Packages", path: "/safaris" });

export default function SafarisPage() {
  return <><section className="bg-safari-gradient pb-12 pt-36 text-center text-white"><div className="container-luxury"><p className="font-bold uppercase tracking-[.3em] text-gold">Curated packages</p><h1 className="mt-4 font-heading text-5xl font-bold md:text-7xl">Luxury Tanzania Safaris</h1></div></section><FeaturedSafaris /><CtaBanner /></>;
}
