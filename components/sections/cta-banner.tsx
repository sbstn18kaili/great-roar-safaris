import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="px-4 py-20">
      <div className="container-luxury rounded-[2.5rem] bg-safari-gradient p-10 text-center text-white md:p-16">
        <p className="font-bold uppercase tracking-[.3em] text-gold">Tailor-made journeys</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl font-bold md:text-6xl">Start Planning Your Dream Safari Today</h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/72">Tell us your travel dates, celebration style, and wildlife dreams. We will design a refined Tanzania itinerary within 24 hours.</p>
        <Button asChild size="lg" className="mt-8"><Link href="/booking">Book Your Safari <ArrowRight className="h-5 w-5" /></Link></Button>
      </div>
    </section>
  );
}
