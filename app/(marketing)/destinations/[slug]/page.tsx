import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Camera, Clock3, MapPinned, ShieldCheck } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { destinations, safariPackages } from "@/lib/data";

type DestinationDetail = {
  overview: string;
  wildlife: string;
  experiences: string[];
  logistics: string;
  idealFor: string[];
  conservation: string;
  gallery: string[];
  faqs: { q: string; a: string }[];
};

const destinationDetails: Record<string, DestinationDetail> = {
  "serengeti-national-park": {
    overview: "Serengeti offers iconic endless plains, year-round predator sightings, and front-row migration drama in one of Africa’s most celebrated ecosystems.",
    wildlife: "Wildebeest, zebra, lion, cheetah, leopard, hyena, elephant, and exceptional birdlife.",
    experiences: ["Sunrise game drives", "Balloon safari add-on", "Luxury mobile camps", "Private sundowner setups"],
    logistics: "Reachable by light aircraft from Arusha or by road from Ngorongoro/Karatu corridor.",
    idealFor: ["First-time safari travelers", "Wildlife photographers", "Migration-focused itineraries"],
    conservation: "Serengeti park fees and regulated access support habitat protection and anti-poaching programs.",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&w=1400&q=80"
    ],
    faqs: [
      { q: "When is migration best in Serengeti?", a: "River-crossing windows are commonly strongest from July to October, while calving peaks from January to March." },
      { q: "Can Serengeti be combined with Zanzibar?", a: "Yes. It is one of our most requested bush-and-beach combinations." }
    ]
  },
  "ngorongoro-crater": {
    overview: "A UNESCO conservation landscape with dramatic crater views and one of the highest densities of wildlife in East Africa.",
    wildlife: "Black rhino, lion, buffalo, hippo, hyena, zebra, and large herbivore populations.",
    experiences: ["Crater floor safari", "Maasai cultural visit", "Crater-rim lodge stays", "Highland scenic drives"],
    logistics: "Easy road access from Arusha via Karatu highlands.",
    idealFor: ["Short safaris", "Big-five seekers", "Cultural add-ons"],
    conservation: "Strict descent timing and route controls help protect sensitive crater habitats.",
    gallery: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1400&q=80"
    ],
    faqs: [{ q: "How long should I stay?", a: "Most travelers spend 1–2 nights around Ngorongoro as part of a northern circuit route." }]
  },
  "mount-kilimanjaro": {
    overview: "Africa’s highest mountain with a range of routes from scenic day hikes to multi-day summit expeditions.",
    wildlife: "Colobus monkeys, montane birds, endemic flora, and dramatic alpine transitions.",
    experiences: ["Day hikes", "Multi-day summit routes", "Coffee farm pairing", "Moshi town culture stop"],
    logistics: "Accessible from Arusha or Moshi with private vehicle transfers.",
    idealFor: ["Active travelers", "Adventure groups", "Post-safari challenge seekers"],
    conservation: "Route permits and guide standards help preserve mountain trails and ecosystems.",
    gallery: [
      "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1400&q=80"
    ],
    faqs: [{ q: "Is technical climbing required?", a: "No technical climbing is required on the common trekking routes." }]
  },
  zanzibar: {
    overview: "A luxury beach and culture destination that pairs perfectly with northern safari routes.",
    wildlife: "Coral reefs, reef fish, dolphins, and rich coastal birdlife.",
    experiences: ["Stone Town walk", "Spice farm tour", "Dhow sunset cruise", "Private beach relaxation"],
    logistics: "Connected by daily flights from Arusha, Serengeti, and Kilimanjaro.",
    idealFor: ["Honeymoons", "Family beach extensions", "Post-safari recovery"],
    conservation: "Marine parks and reef-safe practices are encouraged across many partner resorts.",
    gallery: [
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=80"
    ],
    faqs: [{ q: "How many days are ideal in Zanzibar?", a: "A 3–5 day extension is a popular duration after safari." }]
  },
  "tarangire-national-park": {
    overview: "Tarangire is famous for giant baobabs, elephant super-herds, and peaceful game-viewing away from peak crowds.",
    wildlife: "Elephants, giraffe, lion, leopard, wildebeest, and prolific seasonal birdlife.",
    experiences: ["Baobab photography", "Riverline game drives", "Night drives in select concessions", "Walking experiences"],
    logistics: "A convenient road transfer from Arusha, often used as first/last northern circuit stop.",
    idealFor: ["Repeat Tanzania travelers", "Family safaris", "Photo-centric itineraries"],
    conservation: "Dry-season route planning helps minimize habitat pressure while maximizing wildlife visibility.",
    gallery: [
      "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80"
    ],
    faqs: [{ q: "When is Tarangire best?", a: "Dry season (July–October) is especially strong for elephant concentration." }]
  }
};

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((x) => x.slug === slug);
  return createMetadata({ title: destination?.name ?? "Destination", path: `/destinations/${slug}` });
}

export default async function DestinationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

  const details = destinationDetails[slug];
  if (!details) notFound();

  const keyword = destination.name.toLowerCase().split(" ")[0];
  const relatedSafaris = safariPackages
    .filter((s) => s.destination.toLowerCase().includes(keyword) || s.title.toLowerCase().includes(keyword))
    .slice(0, 3);

  return (
    <section className="pb-24 pt-36">
      <div className="container-luxury">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="font-semibold uppercase tracking-[.25em] text-gold">Destination Guide</p>
            <h1 className="mt-3 font-heading text-5xl font-bold text-forest">{destination.name}</h1>
            <p className="mt-4 text-lg text-charcoal/70">{details.overview}</p>
          </div>
          <div className="rounded-3xl bg-sand p-6">
            <p className="flex items-center gap-2 text-sm text-charcoal/70"><Clock3 className="h-4 w-4 text-gold" />Best season: {destination.bestSeason}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-charcoal/70"><MapPinned className="h-4 w-4 text-gold" />{details.logistics}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-charcoal/70"><ShieldCheck className="h-4 w-4 text-gold" />{details.conservation}</p>
          </div>
        </div>

        <div className="relative mt-8 h-[500px] overflow-hidden rounded-3xl">
          <Image src={destination.image} alt={destination.name} fill className="object-cover" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl bg-white p-6 shadow"><h2 className="font-heading text-2xl font-bold text-forest">Wildlife Highlights</h2><p className="mt-3 text-charcoal/70">{details.wildlife}</p></article>
          <article className="rounded-3xl bg-white p-6 shadow"><h2 className="font-heading text-2xl font-bold text-forest">Top Experiences</h2><ul className="mt-3 list-disc pl-6 text-charcoal/70">{details.experiences.map((e) => <li key={e}>{e}</li>)}</ul></article>
          <article className="rounded-3xl bg-white p-6 shadow"><h2 className="font-heading text-2xl font-bold text-forest">Ideal For</h2><ul className="mt-3 list-disc pl-6 text-charcoal/70">{details.idealFor.map((i) => <li key={i}>{i}</li>)}</ul></article>
        </div>

        <div className="mt-14">
          <h2 className="flex items-center gap-2 font-heading text-4xl font-bold text-forest"><Camera className="h-8 w-8 text-gold" />Photo Moments</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {details.gallery.map((image, index) => (
              <div key={image} className="relative h-56 overflow-hidden rounded-2xl">
                <Image src={image} alt={`${destination.name} gallery ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-heading text-4xl font-bold text-forest">Safaris including {destination.name}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {relatedSafaris.map((safari) => (
              <Link key={safari.slug} href={`/safaris/${safari.slug}`} className="rounded-3xl bg-white p-4 shadow transition hover:-translate-y-1">
                <div className="relative h-40 overflow-hidden rounded-2xl"><Image src={safari.image} alt={safari.title} fill className="object-cover" /></div>
                <h3 className="mt-3 font-semibold text-forest">{safari.title}</h3>
                <p className="mt-1 text-sm text-charcoal/65">{safari.duration} · {safari.price}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-sand p-8">
          <h2 className="font-heading text-3xl font-bold text-forest">Quick Questions</h2>
          <div className="mt-5 space-y-4">
            {details.faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl bg-white p-5">
                <h3 className="font-semibold text-forest">{faq.q}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{faq.a}</p>
              </div>
            ))}
          </div>
          <Link href="/booking" className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 font-semibold text-white">Plan a safari in {destination.name}</Link>
        </div>
      </div>
    </section>
  );
}
