import { DestinationCard } from "@/components/cards/destination-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { destinations } from "@/lib/data";

export function DestinationsShowcase() {
  return (
    <section className="py-24">
      <div className="container-luxury">
        <SectionHeading eyebrow="Destinations" title="Tanzania’s icons, seamlessly connected" description="From crater highlands and endless plains to Africa’s highest summit and Indian Ocean beaches." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => <DestinationCard key={destination.slug} destination={destination} />)}
        </div>
      </div>
    </section>
  );
}
