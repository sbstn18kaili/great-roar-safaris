import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/types";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link href={`/destinations/${destination.slug}`} className="group block rounded-3xl border border-forest/20 bg-white p-3 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden rounded-2xl">
        <Image src={destination.image} alt={`${destination.name} in Tanzania`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-3">
        <h3 className="font-heading text-2xl font-bold text-forest">{destination.name}</h3>
        <p className="text-sm text-charcoal/70">{destination.description}</p>
      </div>
    </Link>
  );
}
