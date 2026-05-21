import { SafariCard } from "@/components/cards/safari-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { safariPackages } from "@/lib/data";

export function FeaturedSafaris() {
  return (
    <section id="safaris" className="bg-[#d9d2bb] py-20">
      <div className="container-luxury">
        <SectionHeading eyebrow="Popular tours" title="Our Popular Tanzania Safari Tours" description="Carefully curated itineraries from short wilderness escapes to premium all-inclusive bush-and-beach journeys." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {safariPackages.map((safari) => <SafariCard key={safari.slug} safari={safari} />)}
        </div>
      </div>
    </section>
  );
}
