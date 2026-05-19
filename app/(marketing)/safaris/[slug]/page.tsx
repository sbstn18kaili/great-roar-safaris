import Image from "next/image";
import { notFound } from "next/navigation";
import { safariPackages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return safariPackages.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const safari = safariPackages.find((s) => s.slug === slug); return createMetadata({ title: safari?.title ?? "Safari", path: `/safaris/${slug}` }); }

export default async function SafariDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const safari = safariPackages.find((s) => s.slug === slug); if (!safari) notFound();
  return <section className="pb-24 pt-36"><div className="container-luxury max-w-4xl"><h1 className="font-heading text-5xl font-bold text-forest">{safari.title}</h1><p className="mt-3 text-charcoal/70">{safari.duration} · {safari.price} · {safari.destination}</p><div className="relative mt-8 h-[460px] overflow-hidden rounded-3xl"><Image src={safari.image} alt={safari.title} fill className="object-cover" /></div><p className="mt-8 leading-8 text-charcoal/70">{safari.summary}</p><ul className="mt-5 list-disc pl-6 text-charcoal/70">{safari.highlights.map((h) => <li key={h}>{h}</li>)}</ul></div></section>;
}
