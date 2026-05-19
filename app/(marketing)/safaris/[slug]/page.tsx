import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { safariPackages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

const itineraries: Record<string, string[]> = {
  "serengeti-migration-safari": ["Day 1: Arrive Arusha and pre-safari briefing.", "Day 2: Fly to Serengeti; sunset game drive.", "Day 3-5: Full migration tracking with picnic lunches.", "Day 6: Optional balloon safari and bush dinner.", "Day 7: Final game drive and lodge relaxation.", "Day 8: Return flight and departure."],
  "ngorongoro-crater-tour": ["Day 1: Arusha to Karatu and highland lodge check-in.", "Day 2: Early crater descent with full-day safari.", "Day 3: Cultural stop and transfer to Arusha."],
  "tarangire-safari": ["Day 1: Arusha to Tarangire with afternoon drive.", "Day 2: Full-day elephant corridor exploration.", "Day 3: Baobab landscapes and optional night drive.", "Day 4: Morning game drive and return."],
  "zanzibar-escape": ["Day 1: Flight to Zanzibar and beach resort check-in.", "Day 2: Stone Town and spice farm tour.", "Day 3: Free beach day or reef excursion.", "Day 4: Dhow sunset cruise.", "Day 5: Departure transfer."],
  "kilimanjaro-trek": ["Day 1: Gear check and mountain briefing.", "Day 2-7: Guided ascent with acclimatization rotations.", "Day 8: Summit push and controlled descent.", "Day 9: Celebration and transfer."],
  "luxury-honeymoon-safari": ["Day 1: Arusha luxury stay.", "Day 2-5: Private northern circuit safari.", "Day 6: Balloon safari and romantic bush dinner.", "Day 7-9: Zanzibar beachfront relaxation.", "Day 10: Departure."],
};

export function generateStaticParams() { return safariPackages.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const safari = safariPackages.find((s) => s.slug === slug); return createMetadata({ title: safari?.title ?? "Safari", path: `/safaris/${slug}` }); }

export default async function SafariDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safari = safariPackages.find((s) => s.slug === slug);
  if (!safari) notFound();
  const itinerary = itineraries[slug] ?? [];

  return <section className="pb-24 pt-36"><div className="container-luxury max-w-5xl"><h1 className="font-heading text-5xl font-bold text-forest">{safari.title}</h1><p className="mt-3 text-charcoal/70">{safari.duration} · {safari.price} · {safari.destination}</p><div className="relative mt-8 h-[460px] overflow-hidden rounded-3xl"><Image src={safari.image} alt={safari.title} fill className="object-cover" /></div><div className="mt-8 grid gap-6 lg:grid-cols-2"><article className="rounded-3xl bg-white p-6 shadow"><h2 className="font-heading text-2xl font-bold text-forest">Safari Overview</h2><p className="mt-3 text-charcoal/70">{safari.summary}</p></article><article className="rounded-3xl bg-white p-6 shadow"><h2 className="font-heading text-2xl font-bold text-forest">Key Highlights</h2><ul className="mt-3 list-disc pl-6 text-charcoal/70">{safari.highlights.map((h) => <li key={h}>{h}</li>)}</ul></article></div><article className="mt-8 rounded-3xl bg-sand p-6"><h2 className="font-heading text-3xl font-bold text-forest">Sample Itinerary</h2><ol className="mt-4 list-decimal space-y-2 pl-6 text-charcoal/75">{itinerary.map((line) => <li key={line}>{line}</li>)}</ol></article><div className="mt-8"><Link href={`/booking?package=${safari.slug}`} className="inline-flex rounded-full bg-forest px-7 py-3 font-semibold text-white">Book this safari</Link></div></div></section>;
}
