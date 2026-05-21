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
    includes: ["Private 4x4 and professional guide", "Park fees", "Accommodation and meals", "Airport transfers", "Drinking water during drives"],
    excludes: ["International flights", "Visa and insurance", "Tips and personal expenses", "Premium drinks"],
    notes: ["Ideal first safari itinerary.", "Can be extended with Zanzibar or Kilimanjaro day hike."],
    itinerary: [
      { day: "Day 1", title: "Arrival in Arusha", plan: "Meet-and-greet at airport, transfer to lodge, trip briefing, and rest.", overnight: "Arusha" },
      { day: "Day 2", title: "Tarangire National Park", plan: "Drive to Tarangire for full-day game drive among baobabs and elephant corridors.", overnight: "Tarangire" },
      { day: "Day 3", title: "Ngorongoro Highlands", plan: "Transfer to highlands with scenic stops and sunset viewpoints.", overnight: "Karatu/Ngorongoro rim" },
      { day: "Day 4", title: "Crater Safari & Return", plan: "Early crater descent, picnic lunch, and afternoon return to Arusha.", overnight: "Departure" }
    ]
  },
  "5-day-midrange-best-of-tanzania-safari": {
    intro: "A balanced midrange journey covering top northern parks with strong wildlife variety.",
    bestTime: "Year-round, especially June–October.",
    pace: "Active with daily transfers and game drives.",
    style: "Private midrange safari with carefully selected lodges.",
    includes: ["Guide and private vehicle", "Park fees", "Accommodation and full-board meals", "Airport transfers"],
    excludes: ["Flights", "Visa/insurance", "Tips", "Personal purchases"],
    notes: ["Great for first-time Tanzania visitors.", "Can be upgraded to luxury accommodations."],
    itinerary: [
      { day: "Day 1", title: "Arusha to Tarangire", plan: "Start safari with afternoon drive in Tarangire’s river valley and baobab zones.", overnight: "Tarangire lodge" },
      { day: "Day 2", title: "Tarangire to Serengeti", plan: "Transit through highlands and enter Serengeti for sunset game viewing.", overnight: "Serengeti camp" },
      { day: "Day 3", title: "Central Serengeti", plan: "Full-day game drive focusing on predator territories and migration tracks.", overnight: "Serengeti camp" },
      { day: "Day 4", title: "Serengeti to Ngorongoro", plan: "Morning drive, then transfer to Ngorongoro conservation area.", overnight: "Karatu/Ngorongoro" },
      { day: "Day 5", title: "Crater floor and return", plan: "Descend into crater for wildlife viewing, then return to Arusha.", overnight: "Departure" }
    ]
  },
  "5-day-luxury-best-of-tanzania-safari": {
    intro: "High-comfort safari across premium wildlife regions with refined lodge experiences.",
    bestTime: "June–October and January–March.",
    pace: "Balanced luxury pace with quality drive windows.",
    style: "Private luxury itinerary with high-end lodges/camps.",
    includes: ["Luxury accommodation", "Private guide and 4x4", "Park fees", "Meals", "Transfers"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal beverages"],
    notes: ["Excellent choice for couples and honeymooners."],
    itinerary: [
      { day: "Day 1", title: "Arrival & Arusha retreat", plan: "Airport meet-and-greet and relax at luxury lodge.", overnight: "Arusha" },
      { day: "Day 2", title: "Fly/drive to Serengeti", plan: "Enter Serengeti and enjoy afternoon premium game drive.", overnight: "Serengeti luxury camp" },
      { day: "Day 3", title: "Serengeti full day", plan: "Private full-day safari with flexible photo stops and sundowner.", overnight: "Serengeti luxury camp" },
      { day: "Day 4", title: "Ngorongoro rim", plan: "Travel to Ngorongoro and settle into crater-rim or Karatu luxury lodge.", overnight: "Ngorongoro/Karatu" },
      { day: "Day 5", title: "Crater safari", plan: "Early crater descent and return to Arusha by evening.", overnight: "Departure" }
    ]
  },
  "6-day-great-migration-ndutu-tanzania-safari": {
    intro: "Migration-focused safari centered on Ndutu calving season and predator interactions.",
    bestTime: "December–March for calving action.",
    pace: "Focused wildlife tracking pace.",
    style: "Private migration safari.",
    includes: ["Guide and vehicle", "Park/conservation fees", "Accommodation", "Meals"],
    excludes: ["Flights", "Insurance", "Tips", "Alcoholic beverages"],
    notes: ["Best booked early for prime calving-season camps."],
    itinerary: [
      { day: "Day 1", title: "Arrival and prep", plan: "Arrive Arusha and migration briefing with safari team.", overnight: "Arusha" },
      { day: "Day 2", title: "Transfer to Ndutu", plan: "Travel to Ndutu and evening game drive.", overnight: "Ndutu camp" },
      { day: "Day 3", title: "Ndutu game drives", plan: "Morning and afternoon drives following herds and predators.", overnight: "Ndutu camp" },
      { day: "Day 4", title: "Southern Serengeti", plan: "Explore calving plains and predator routes.", overnight: "Ndutu/South Serengeti" },
      { day: "Day 5", title: "Ngorongoro highlands", plan: "Transfer via highlands with scenic stops.", overnight: "Karatu" },
      { day: "Day 6", title: "Return to Arusha", plan: "Morning optional activity then return transfer.", overnight: "Departure" }
    ]
  },
  "7-days-premium-luxury-all-inclusive-safari": {
    intro: "All-inclusive premium safari through Tanzania’s northern circuit with top-tier hospitality.",
    bestTime: "Year-round with strong dry season wildlife June–October.",
    pace: "Comfortable premium pacing.",
    style: "Private all-inclusive luxury journey.",
    includes: ["Premium accommodation", "All meals and selected drinks", "Guide/vehicle", "Park fees", "Transfers"],
    excludes: ["International airfare", "Visa", "Insurance", "Gratuities"],
    notes: ["Ideal for milestone celebrations and high-comfort travelers."],
    itinerary: [
      { day: "Day 1", title: "Arrive Arusha", plan: "VIP arrival and lodge orientation.", overnight: "Arusha luxury lodge" },
      { day: "Day 2", title: "Tarangire", plan: "Game drive and luxury bush experience.", overnight: "Tarangire luxury lodge" },
      { day: "Day 3", title: "Manyara/Karatu", plan: "Scenic route with cultural and wildlife stops.", overnight: "Karatu luxury lodge" },
      { day: "Day 4", title: "Ngorongoro crater", plan: "Crater descent and curated picnic.", overnight: "Ngorongoro area" },
      { day: "Day 5", title: "Serengeti transfer", plan: "Enter Serengeti with evening game drive.", overnight: "Serengeti luxury camp" },
      { day: "Day 6", title: "Serengeti full day", plan: "Private full-day game drive with sundowner.", overnight: "Serengeti luxury camp" },
      { day: "Day 7", title: "Return", plan: "Flight/drive back to Arusha and departure support.", overnight: "Departure" }
    ]
  },
  "8-day-mid-range-mara-river-great-migration": {
    intro: "A migration-season route built around Mara River crossing opportunities.",
    bestTime: "July–October.",
    pace: "Active with strategic positioning.",
    style: "Private mid-range migration safari.",
    includes: ["Private guide and 4x4", "Accommodation", "Park fees", "Meals"],
    excludes: ["Flights", "Visa/insurance", "Tips"],
    notes: ["Crossing sightings are natural events and cannot be guaranteed."],
    itinerary: [
      { day: "Day 1", title: "Arrival Arusha", plan: "Arrival and migration-route briefing.", overnight: "Arusha" },
      { day: "Day 2", title: "To Serengeti", plan: "Transfer to central Serengeti with afternoon drive.", overnight: "Central Serengeti" },
      { day: "Day 3", title: "Central Serengeti", plan: "Predator-focused game drives.", overnight: "Central Serengeti" },
      { day: "Day 4", title: "North Serengeti transit", plan: "Drive north to migration corridor.", overnight: "North Serengeti" },
      { day: "Day 5", title: "Mara River day", plan: "Full-day tracking at crossing points.", overnight: "North Serengeti" },
      { day: "Day 6", title: "Mara River day 2", plan: "Additional river and plains exploration.", overnight: "North Serengeti" },
      { day: "Day 7", title: "Return south/highlands", plan: "Transfer toward Ngorongoro/Karatu.", overnight: "Karatu" },
      { day: "Day 8", title: "Return Arusha", plan: "Transfer to Arusha and departure.", overnight: "Departure" }
    ]
  },
  "8-day-mid-range-ndutu-migration-footsteps": {
    intro: "Extended Ndutu-focused itinerary tracking seasonal herd movement and predator behavior.",
    bestTime: "December–March.",
    pace: "Exploration-heavy with flexible tracking drives.",
    style: "Private mid-range safari.",
    includes: ["Guide and vehicle", "Accommodation", "Meals", "Park fees"],
    excludes: ["Flights", "Insurance", "Tips", "Extra activities"],
    notes: ["Excellent for wildlife photographers and repeat safari-goers."],
    itinerary: [
      { day: "Day 1", title: "Arrival Arusha", plan: "Arrive and safari preparation.", overnight: "Arusha" },
      { day: "Day 2", title: "To Ndutu", plan: "Travel to Ndutu and introductory drive.", overnight: "Ndutu" },
      { day: "Day 3", title: "Ndutu game drives", plan: "Morning/afternoon drives around calving grounds.", overnight: "Ndutu" },
      { day: "Day 4", title: "Ndutu and south plains", plan: "Track herds and predator routes.", overnight: "Ndutu" },
      { day: "Day 5", title: "Central Serengeti", plan: "Shift to central Serengeti for varied ecosystems.", overnight: "Central Serengeti" },
      { day: "Day 6", title: "Central Serengeti full day", plan: "Big-cat and riverine exploration.", overnight: "Central Serengeti" },
      { day: "Day 7", title: "Ngorongoro/Karatu", plan: "Travel via highlands with scenic stops.", overnight: "Karatu" },
      { day: "Day 8", title: "Return Arusha", plan: "Transfer back and departure assistance.", overnight: "Departure" }
    ]
  },
  "11-days-northern-circuit-safari-zanzibar-beach": {
    intro: "A complete bush-and-beach itinerary combining classic safari with Zanzibar relaxation.",
    bestTime: "June–October and December–February.",
    pace: "Balanced between adventure and rest.",
    style: "Private safari + beach extension.",
    includes: ["Private safari services", "Accommodation and meals", "Domestic flights", "Park fees"],
    excludes: ["International flights", "Visa", "Insurance", "Tips"],
    notes: ["Ideal for couples and families seeking both wildlife and beach time."],
    itinerary: [
      { day: "Day 1", title: "Arrive Arusha", plan: "Arrival support and lodge check-in.", overnight: "Arusha" },
      { day: "Day 2", title: "Tarangire", plan: "Game drives among baobabs and elephant herds.", overnight: "Tarangire" },
      { day: "Day 3", title: "Ngorongoro", plan: "Highland transfer and crater rim views.", overnight: "Karatu/Ngorongoro" },
      { day: "Day 4", title: "Crater safari", plan: "Full-day crater exploration.", overnight: "Karatu/Ngorongoro" },
      { day: "Day 5", title: "Serengeti transfer", plan: "Transit to Serengeti with evening drive.", overnight: "Serengeti" },
      { day: "Day 6", title: "Serengeti full day", plan: "Big-cat and migration tracking.", overnight: "Serengeti" },
      { day: "Day 7", title: "Fly to Zanzibar", plan: "Morning transfer and domestic flight.", overnight: "Zanzibar beach resort" },
      { day: "Day 8", title: "Zanzibar leisure", plan: "Beach day and optional reef excursion.", overnight: "Zanzibar" },
      { day: "Day 9", title: "Stone Town and spice", plan: "Cultural and culinary exploration.", overnight: "Zanzibar" },
      { day: "Day 10", title: "Zanzibar free day", plan: "Relaxation and optional water activities.", overnight: "Zanzibar" },
      { day: "Day 11", title: "Departure", plan: "Airport transfer and onward journey.", overnight: "Departure" }
    ]
  },
  "12-day-premium-luxury-safari-beach-all-inclusive": {
    intro: "Flagship all-inclusive luxury journey across top safari parks and Zanzibar beach.",
    bestTime: "Year-round with seasonal migration windows.",
    pace: "Comfort-led premium pacing.",
    style: "All-inclusive private luxury route.",
    includes: ["Luxury camps/resorts", "Private guide and vehicle", "Domestic flights", "Park fees", "Most beverages"],
    excludes: ["International airfare", "Visa/insurance", "Premium imported spirits", "Tips"],
    notes: ["Best for honeymooners and milestone travel.", "Can include private charter upgrades."],
    itinerary: [
      { day: "Day 1", title: "Arrive Arusha", plan: "VIP welcome and luxury lodge orientation.", overnight: "Arusha" },
      { day: "Day 2", title: "Tarangire", plan: "Premium game drive and curated sundowner.", overnight: "Tarangire luxury" },
      { day: "Day 3", title: "Ngorongoro transfer", plan: "Scenic highland route and lodge check-in.", overnight: "Ngorongoro luxury" },
      { day: "Day 4", title: "Crater day", plan: "Full crater safari with curated picnic setup.", overnight: "Ngorongoro luxury" },
      { day: "Day 5", title: "Serengeti fly-in", plan: "Light-aircraft transfer and evening drive.", overnight: "Serengeti luxury camp" },
      { day: "Day 6", title: "Serengeti full day", plan: "Private full-day wildlife tracking.", overnight: "Serengeti luxury camp" },
      { day: "Day 7", title: "Serengeti exclusive experiences", plan: "Flexible game drive with optional balloon add-on.", overnight: "Serengeti luxury camp" },
      { day: "Day 8", title: "Fly to Zanzibar", plan: "Transfer to beach resort and relax.", overnight: "Zanzibar luxury resort" },
      { day: "Day 9", title: "Beach leisure", plan: "Resort activities and private beach time.", overnight: "Zanzibar" },
      { day: "Day 10", title: "Stone Town and heritage", plan: "Guided heritage and spice route exploration.", overnight: "Zanzibar" },
      { day: "Day 11", title: "Final beach day", plan: "Wellness and ocean activities at leisure.", overnight: "Zanzibar" },
      { day: "Day 12", title: "Departure", plan: "Airport transfer for international onward flight.", overnight: "Departure" }
    ]
  },
  "kilimanjaro-trek": {
    intro: "A professionally guided Kilimanjaro trekking itinerary with safety-first planning.",
    bestTime: "January–March and June–October.",
    pace: "Altitude-aware trekking pace.",
    style: "Guided mountain expedition with support crew.",
    includes: ["Mountain guide and support team", "Park fees", "Camping/refuge accommodation", "Meals on trek"],
    excludes: ["International flights", "Visa/insurance", "Tips for mountain crew", "Personal gear rental"],
    notes: ["Medical check and insurance strongly recommended.", "Acclimatization days improve summit success."],
    itinerary: [
      { day: "Day 1", title: "Arrival and gear check", plan: "Arrival in Moshi/Arusha and full expedition briefing.", overnight: "Moshi" },
      { day: "Day 2", title: "Trek day 1", plan: "Enter park and trek through montane forest to first camp.", overnight: "Mountain camp" },
      { day: "Day 3", title: "Trek day 2", plan: "Ascend to moorland zone with acclimatization pace.", overnight: "Mountain camp" },
      { day: "Day 4", title: "Trek day 3", plan: "Continue ascent with altitude monitoring and short acclimatization walk.", overnight: "Mountain camp" },
      { day: "Day 5", title: "Trek day 4", plan: "Traverse to high camp and prepare for summit push.", overnight: "High camp" },
      { day: "Day 6", title: "Acclimatization day", plan: "Structured rest and acclimatization protocol.", overnight: "High camp" },
      { day: "Day 7", title: "Summit attempt", plan: "Midnight summit push, sunrise at Uhuru Peak, controlled descent.", overnight: "Lower camp" },
      { day: "Day 8", title: "Final descent", plan: "Descend through lower zones and exit park gate.", overnight: "Moshi" },
      { day: "Day 9", title: "Departure", plan: "Recovery morning and transfer to airport.", overnight: "Departure" }
    ]
  },
  "zanzibar-escape": {
    intro: "A curated beach extension focused on culture, relaxation, and ocean activities.",
    bestTime: "June–October and December–February.",
    pace: "Leisure pace with optional excursions.",
    style: "Boutique/luxury beach stay.",
    includes: ["Airport/ferry transfers", "Accommodation", "Breakfast and selected meals", "Stone Town tour"],
    excludes: ["International flights", "Travel insurance", "Optional diving/snorkeling add-ons"],
    notes: ["Perfect as a post-safari decompression route."],
    itinerary: [
      { day: "Day 1", title: "Arrival Zanzibar", plan: "Transfer to beach resort and evening relaxation.", overnight: "Zanzibar beach resort" },
      { day: "Day 2", title: "Stone Town heritage", plan: "Guided walking tour and historic spice market visit.", overnight: "Zanzibar" },
      { day: "Day 3", title: "Ocean leisure", plan: "Free day for reef trip, dhow cruise, or spa time.", overnight: "Zanzibar" },
      { day: "Day 4", title: "Spice farm + sunset", plan: "Half-day spice tour and sunset by the coast.", overnight: "Zanzibar" },
      { day: "Day 5", title: "Departure", plan: "Transfer to airport for onward travel.", overnight: "Departure" }
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


const accommodationLevels = {
  silver: ["Well-rated midrange lodges/camps", "Ensuite rooms with hot showers", "Shared but comfortable lounge/dining areas"],
  gold: ["High-comfort lodges and premium tented camps", "Enhanced service and upgraded room categories", "Excellent locations for wildlife access"],
  platinum: ["Ultra-luxury boutique lodges/camps", "Private decks/plunge-pool options where available", "Concierge-level personalization and premium inclusions"]
};

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

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {Object.entries(accommodationLevels).map(([tier, features]) => (
            <article key={tier} className="rounded-3xl bg-white p-6 shadow">
              <h2 className="font-heading text-2xl font-bold text-forest capitalize">{tier} Accommodation</h2>
              <ul className="mt-4 list-disc pl-6 text-charcoal/70">{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </article>
          ))}
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
