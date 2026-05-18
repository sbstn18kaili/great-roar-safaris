import Image from "next/image";
import type { Destination } from "@/types";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="group relative min-h-[420px] overflow-hidden rounded-[2rem] text-white shadow-2xl">
      <Image src={destination.image} alt={`${destination.name} in Tanzania`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-sm font-semibold uppercase tracking-[.25em] text-gold">Best: {destination.bestSeason}</p>
        <h3 className="mt-2 font-heading text-3xl font-bold">{destination.name}</h3>
        <p className="mt-3 text-sm leading-6 text-white/78">{destination.description}</p>
      </div>
    </article>
  );
}
