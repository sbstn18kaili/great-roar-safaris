"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/sections/section-heading";

export function Testimonials() {
  return (
    <section className="bg-forest py-16 text-white">
      <div className="container-luxury">
        <SectionHeading eyebrow="Guest stories" title="Travelers remember the roar" description="Realistic guest feedback from private safaris, summits, family adventures, and honeymoons." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article key={item.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={`${item.name} safari guest`} width={64} height={64} className="rounded-full object-cover" />
                <div><h3 className="font-semibold">{item.name}</h3><p className="text-sm text-white/60">{item.location}</p></div>
              </div>
              <div className="mt-5 flex gap-1" aria-label={`${item.rating} star review`}>{Array.from({ length: item.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}</div>
              <p className="mt-5 leading-7 text-white/80">“{item.quote}”</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
