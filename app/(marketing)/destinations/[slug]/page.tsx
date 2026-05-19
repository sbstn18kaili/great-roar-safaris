import Image from "next/image";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { destinations } from "@/lib/data";

export function generateStaticParams() { return destinations.map((d) => ({ slug: d.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const d = destinations.find((x) => x.slug === slug); return createMetadata({ title: d?.name ?? "Destination", path: `/destinations/${slug}` }); }

export default async function DestinationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const destination = destinations.find((d) => d.slug === slug); if (!destination) notFound();
  return <section className="pb-24 pt-36"><div className="container-luxury"><h1 className="font-heading text-5xl font-bold text-forest">{destination.name}</h1><p className="mt-4 text-charcoal/70">Best season: {destination.bestSeason}</p><div className="relative mt-8 h-[460px] overflow-hidden rounded-3xl"><Image src={destination.image} alt={destination.name} fill className="object-cover" /></div><p className="mt-8 leading-8 text-charcoal/70">{destination.description}</p></div></section>;
}
