import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { destinations, safariPackages } from "@/lib/data";

const destinationDetails: Record<string, { overview: string; wildlife: string; experiences: string[]; logistics: string }> = {
  "serengeti-national-park": {
    overview: "Serengeti offers vast plains, resident predators, and year-round game viewing with seasonal migration drama.",
    wildlife: "Wildebeest, zebra, lion, cheetah, leopard, hyena, and exceptional birdlife.",
    experiences: ["Sunrise game drives", "Balloon safari add-on", "Luxury mobile camps"],
    logistics: "Best reached by light aircraft from Arusha or by road from Ngorongoro side."
  },
  "ngorongoro-crater": { overview: "A UNESCO conservation area with one of the world’s densest wildlife habitats.", wildlife: "Black rhino, lion, buffalo, hippo, and abundant plains game.", experiences: ["Crater floor safari", "Maasai cultural visit", "Crater-rim lodge stays"], logistics: "Easy connection from Arusha via Karatu highlands." },
  "mount-kilimanjaro": { overview: "Africa’s tallest mountain with routes for both summit expeditions and short scenic hikes.", wildlife: "Forest monkeys, alpine flora, and dramatic ecological zones.", experiences: ["Day hikes", "Multi-day summit routes", "Coffee farm pairing"], logistics: "Accessible from Arusha or Moshi with private transfers." },
  "zanzibar": { overview: "Beach and culture destination ideal after safari adventures.", wildlife: "Marine life, dolphins, reef fish, and coastal birdlife.", experiences: ["Stone Town walk", "Spice farm tour", "Dhow sunset cruise"], logistics: "Connected by daily flights from Arusha/Serengeti." },
  "tarangire-national-park": { overview: "Known for giant baobabs and large elephant herds in dry season.", wildlife: "Elephants, giraffe, lion, leopard, and prolific bird species.", experiences: ["Baobab photography", "Game drives", "Night drives in private concessions"], logistics: "Convenient first or last stop from Arusha (road transfer)." }
};

export function generateStaticParams() { return destinations.map((d) => ({ slug: d.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const d = destinations.find((x) => x.slug === slug); return createMetadata({ title: d?.name ?? "Destination", path: `/destinations/${slug}` }); }

export default async function DestinationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();
  const details = destinationDetails[slug];
  const relatedSafaris = safariPackages.filter((s) => s.destination.toLowerCase().includes(destination.name.toLowerCase().split(" ")[0]) || s.title.toLowerCase().includes(destination.name.toLowerCase().split(" ")[0])).slice(0, 3);

  return (
    <section className="pb-24 pt-36">
      <div className="container-luxury">
        <h1 className="font-heading text-5xl font-bold text-forest">{destination.name}</h1>
        <p className="mt-3 text-charcoal/70">Best season: {destination.bestSeason}</p>
        <div className="relative mt-8 h-[460px] overflow-hidden rounded-3xl"><Image src={destination.image} alt={destination.name} fill className="object-cover" /></div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-6 shadow"><h2 className="font-heading text-2xl font-bold text-forest">Overview</h2><p className="mt-3 text-charcoal/70">{details.overview}</p></article>
          <article className="rounded-3xl bg-white p-6 shadow"><h2 className="font-heading text-2xl font-bold text-forest">Wildlife</h2><p className="mt-3 text-charcoal/70">{details.wildlife}</p></article>
          <article className="rounded-3xl bg-white p-6 shadow"><h2 className="font-heading text-2xl font-bold text-forest">Top Experiences</h2><ul className="mt-3 list-disc pl-6 text-charcoal/70">{details.experiences.map((e) => <li key={e}>{e}</li>)}</ul></article>
          <article className="rounded-3xl bg-white p-6 shadow"><h2 className="font-heading text-2xl font-bold text-forest">Logistics</h2><p className="mt-3 text-charcoal/70">{details.logistics}</p></article>
        </div>
        <div className="mt-14">
          <h2 className="font-heading text-4xl font-bold text-forest">Safaris including {destination.name}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {relatedSafaris.map((safari) => (
              <Link key={safari.slug} href={`/safaris/${safari.slug}`} className="rounded-3xl bg-white p-4 shadow hover:-translate-y-1 transition">
                <div className="relative h-40 overflow-hidden rounded-2xl"><Image src={safari.image} alt={safari.title} fill className="object-cover" /></div>
                <h3 className="mt-3 font-semibold text-forest">{safari.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
