import { DestinationsShowcase } from "@/components/sections/destinations-showcase";
import { SeasonCalendar } from "@/components/sections/season-calendar";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Destinations", path: "/destinations" });
export default function DestinationsPage() { return <><section className="bg-safari-gradient pb-12 pt-36 text-center text-white"><div className="container-luxury"><p className="font-bold uppercase tracking-[.3em] text-gold">Where we go</p><h1 className="mt-4 font-heading text-5xl font-bold md:text-7xl">Tanzania Destinations</h1></div></section><DestinationsShowcase /><SeasonCalendar /></>; }
