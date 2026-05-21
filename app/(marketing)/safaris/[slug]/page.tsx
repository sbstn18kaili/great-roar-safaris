import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, CircleX, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import { safariPackages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

type ItineraryDay = { day: string; title: string; plan: string; overnight: string };
type SafariDetail = {
  intro: string;
  bestTime: string;
  pace: string;
  style: string;
  includes: string[];
  excludes: string[];
  notes: string[];
  itinerary: ItineraryDay[];
};

const safariDetails: Record<string, SafariDetail> = {
  "4-day-luxury-wilderness-tanzania-safari": {
    intro: "A short premium route designed for travelers wanting maximum wildlife impact in limited time.",
    bestTime: "Year-round; strongest wildlife concentration July–October.",
    pace: "Moderate pace with focused game drives.",
    style: "Private luxury safari in a dedicated 4x4.",
    includes: ["Private 4x4 and professional guide", "Park fees", "Luxury lodges and meals", "Airport transfers", "Drinking water during drives"],
    excludes: ["International flights", "Visa and insurance", "Tips and personal expenses", "Premium drinks"],
    notes: ["Ideal first safari itinerary.", "Can be extended with Zanzibar or Kilimanjaro day hike."],
    itinerary: [
      { day: "Day 1", title: "Arrival in Arusha", plan: "Meet-and-greet at airport, transfer to luxury lodge, trip briefing, and rest before safari departure.", overnight: "Arusha luxury lodge" },
      { day: "Day 2", title: "Tarangire National Park", plan: "Drive to Tarangire for full-day game drive among baobabs and elephant corridors with picnic lunch.", overnight: "Tarangire-area lodge" },
      { day: "Day 3", title: "Ngorongoro Conservation Area", plan: "Scenic drive to Ngorongoro highlands, optional cultural stop, sunset crater-rim viewpoints.", overnight: "Ngorongoro/Karatu lodge" },
      { day: "Day 4", title: "Crater Safari and Return", plan: "Early crater descent for prime wildlife viewing, lunch on crater floor, afternoon return to Arusha.", overnight: "Day room/airport drop-off" }
    ]
  }
};

function defaultDetail(title: string): SafariDetail {
  return {
    intro: `${title} is a curated private safari route balancing wildlife access, comfort, and efficient logistics.`,
    bestTime: "Depends on route focus; dry season generally offers strongest visibility.",
    pace: "Balanced pace with strategic game-drive windows.",
    style: "Private guided safari with flexible daily rhythm.",
    includes: ["Private safari vehicle", "Professional guide", "Accommodation and meals", "Park fees"],
    excludes: ["International flights", "Visa and travel insurance", "Tips and personal purchases"],
    notes: ["Can be customized with activities and beach extensions.", "Upgrade options available for lodges and transport."],
    itinerary: [
      { day: "Day 1", title: "Arrival and Briefing", plan: "Arrival support, transfer, and detailed safari orientation.", overnight: "Arusha" },
      { day: "Day 2", title: "First Game Drive", plan: "Transfer to park and afternoon game drive in high-probability wildlife zones.", overnight: "Safari lodge/camp" },
      { day: "Day 3", title: "Full Safari Day", plan: "Sunrise and afternoon drives, flexible stops for photography and interpretation.", overnight: "Safari lodge/camp" },
      { day: "Final Day", title: "Return Transfer", plan: "Final short drive and transfer to airport or city hotel.", overnight: "Departure" }
    ]
  };
}

export function generateStaticParams() {
  return safariPackages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safari = safariPackages.find((s) => s.slug === slug);
  return createMetadata({ title: safari?.title ?? "Safari", path: `/safaris/${slug}` });
}

export default async function SafariDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safari = safariPackages.find((s) => s.slug === slug);
  if (!safari) notFound();

  const detail = safariDetails[slug] ?? defaultDetail(safari.title);

  return (
    <section className="pb-24 pt-36">
      <div className="container-luxury max-w-6xl">
        <p className="font-semibold uppercase tracking-[.25em] text-gold">Detailed Itinerary</p>
        <h1 className="mt-3 font-heading text-5xl font-bold text-forest">{safari.title}</h1>
        <p className="mt-3 text-charcoal/70">{safari.duration} · {safari.price} · {safari.destination}</p>

        <div className="relative mt-8 h-[480px] overflow-hidden rounded-3xl">
          <Image src={safari.image} alt={safari.title} fill className="object-cover" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <article className="rounded-3xl bg-white p-6 shadow">
            <h2 className="font-heading text-2xl font-bold text-forest">Safari Overview</h2>
            <p className="mt-3 text-charcoal/70">{detail.intro}</p>
            <p className="mt-4 text-charcoal/70">{safari.summary}</p>
            <ul className="mt-4 list-disc pl-6 text-charcoal/70">{safari.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          </article>
          <article className="rounded-3xl bg-sand p-6">
            <p className="flex items-center gap-2 text-sm text-charcoal/70"><MapPinned className="h-4 w-4 text-gold" />Best timing: {detail.bestTime}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-charcoal/70"><Sparkles className="h-4 w-4 text-gold" />Style: {detail.style}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-charcoal/70"><ShieldCheck className="h-4 w-4 text-gold" />Pace: {detail.pace}</p>
          </article>
        </div>

        <article className="mt-8 rounded-3xl bg-white p-6 shadow">
          <h2 className="font-heading text-3xl font-bold text-forest">Day-by-Day Itinerary</h2>
          <div className="mt-6 space-y-4">
            {detail.itinerary.map((entry) => (
              <div key={entry.day} className="rounded-2xl border border-charcoal/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[.15em] text-gold">{entry.day}</p>
                <h3 className="mt-1 font-heading text-2xl font-bold text-forest">{entry.title}</h3>
                <p className="mt-2 text-charcoal/70">{entry.plan}</p>
                <p className="mt-2 text-sm text-charcoal/60">Overnight: {entry.overnight}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-6 shadow">
            <h2 className="font-heading text-2xl font-bold text-forest">Inclusions</h2>
            <ul className="mt-4 space-y-2 text-charcoal/70">{detail.includes.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-forest" />{item}</li>)}</ul>
          </article>
          <article className="rounded-3xl bg-white p-6 shadow">
            <h2 className="font-heading text-2xl font-bold text-forest">Exclusions</h2>
            <ul className="mt-4 space-y-2 text-charcoal/70">{detail.excludes.map((item) => <li key={item} className="flex gap-2"><CircleX className="mt-0.5 h-4 w-4 text-gold" />{item}</li>)}</ul>
          </article>
        </div>

        <article className="mt-8 rounded-3xl bg-sand p-6">
          <h2 className="font-heading text-2xl font-bold text-forest">Important Notes</h2>
          <ul className="mt-4 list-disc pl-6 text-charcoal/75">{detail.notes.map((note) => <li key={note}>{note}</li>)}</ul>
        </article>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/booking?package=${safari.slug}`} className="inline-flex rounded-full bg-forest px-7 py-3 font-semibold text-white">Book this safari</Link>
          <Link href="/contact" className="inline-flex rounded-full border border-forest px-7 py-3 font-semibold text-forest">Talk to a safari specialist</Link>
        </div>
      </div>
    </section>
  );
}
