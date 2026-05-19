import Image from "next/image";
import { notFound } from "next/navigation";
import { optionalActivities } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return optionalActivities.map((a) => ({ slug: a.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const a = optionalActivities.find((x) => x.slug === slug); return createMetadata({ title: a?.title ?? "Activity", path: `/activities/${slug}` }); }

export default async function ActivityDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const activity = optionalActivities.find((a) => a.slug === slug); if (!activity) notFound();
  return <section className="pb-24 pt-36"><div className="container-luxury max-w-4xl"><h1 className="font-heading text-5xl font-bold text-forest">{activity.title}</h1><p className="mt-3 text-charcoal/70">{activity.short}</p><div className="relative mt-8 h-[460px] overflow-hidden rounded-3xl"><Image src={activity.image} alt={activity.title} fill className="object-cover" /></div><ul className="mt-8 list-disc pl-6 text-charcoal/70">{activity.details.map((d) => <li key={d}>{d}</li>)}</ul></div></section>;
}
