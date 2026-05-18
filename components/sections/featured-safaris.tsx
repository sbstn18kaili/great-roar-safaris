import { SafariCard } from "@/components/cards/safari-card";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { safariPackages } from "@/lib/data";

export function FeaturedSafaris() {
  return (
    <section id="safaris" className="py-24">
      <div className="container-luxury">
        <SectionHeading eyebrow="Signature journeys" title="Featured Safari Packages" description="High-touch journeys crafted for wildlife drama, comfort, privacy, and authentic Tanzanian connection." />
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {safariPackages.map((safari, index) => <Reveal key={safari.slug} delay={index * .05}><SafariCard safari={safari} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}
