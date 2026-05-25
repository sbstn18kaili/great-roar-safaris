"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DestinationCard } from "@/components/cards/destination-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { Button } from "@/components/ui/button";
import { destinations } from "@/lib/data";

export function DestinationsShowcase({ showExploreButton = false }: { showExploreButton?: boolean }) {
  const [start, setStart] = useState(0);
  const windowSize = 3;

  const visibleDestinations = useMemo(() => {
    return Array.from({ length: windowSize }, (_, index) => destinations[(start + index) % destinations.length]);
  }, [start]);

  return (
    <section className="py-24">
      <div className="container-luxury">
        <SectionHeading eyebrow="Destinations" title="Tanzania’s icons, seamlessly connected" description="From crater highlands and endless plains to Africa’s highest summit and Indian Ocean beaches." />
        <div className="mb-6 flex justify-end gap-3">
          <button aria-label="Previous destinations" className="rounded-full border border-charcoal/20 bg-white p-3 transition hover:bg-sand" onClick={() => setStart((value) => (value - 1 + destinations.length) % destinations.length)}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button aria-label="Next destinations" className="rounded-full border border-charcoal/20 bg-white p-3 transition hover:bg-sand" onClick={() => setStart((value) => (value + 1) % destinations.length)}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleDestinations.map((destination) => <DestinationCard key={destination.slug} destination={destination} />)}
        </div>
        {showExploreButton ? (
          <div className="mt-10 text-center">
            <Button asChild size="lg" variant="forest">
              <Link href="/destinations">Explore Other Destinations</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
