import { PageHero } from "@/components/sections/page-hero";
import { DestinationsShowcase } from "@/components/sections/destinations-showcase";
import { SeasonCalendar } from "@/components/sections/season-calendar";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Destinations", path: "/destinations" });
export default function DestinationsPage() { return <><PageHero eyebrow="Where we go" title="Tanzania Destinations" description="Discover iconic parks, mountain routes, and Indian Ocean escapes." image="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80" /><DestinationsShowcase /><SeasonCalendar /></>; }
