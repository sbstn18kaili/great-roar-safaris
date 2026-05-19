import Image from "next/image";
import Link from "next/link";
import { optionalActivities } from "@/lib/data";
import { SectionHeading } from "@/components/sections/section-heading";

export function OptionalActivities() {
  return (
    <section className="py-24">
      <div className="container-luxury">
        <SectionHeading eyebrow="Optional activities" title="Enhance your safari journey" description="Add these curated experiences before, during, or after your core safari." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {optionalActivities.map((activity) => (
            <Link key={activity.slug} href={`/activities/${activity.slug}`} className="group block overflow-hidden rounded-3xl bg-white shadow-lg">
              <div className="relative h-44"><Image src={activity.image} alt={activity.title} fill className="object-cover transition group-hover:scale-105" /></div>
              <div className="p-4"><h3 className="font-semibold text-forest">{activity.title}</h3><p className="text-sm text-charcoal/70">{activity.short}</p></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
