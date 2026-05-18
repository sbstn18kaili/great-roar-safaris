import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SafariPackage } from "@/types";

export function SafariCard({ safari }: { safari: SafariPackage }) {
  return (
    <article id={safari.slug} className="group overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-charcoal/10 transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <Image src={safari.image} alt={`${safari.title} luxury safari scene`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-forest">{safari.price}</div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4 text-sm text-charcoal/65">
          <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-gold" />{safari.duration}</span>
          <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-gold text-gold" />{safari.rating}</span>
        </div>
        <h3 className="mt-4 font-heading text-2xl font-bold">{safari.title}</h3>
        <p className="mt-3 text-sm leading-6 text-charcoal/70">{safari.summary}</p>
        <ul className="mt-4 space-y-2 text-sm text-charcoal/70">
          {safari.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}
        </ul>
        <Button asChild className="mt-6 w-full"><Link href={`/booking?package=${safari.slug}`}>Plan this safari</Link></Button>
      </div>
    </article>
  );
}
