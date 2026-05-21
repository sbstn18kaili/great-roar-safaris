"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroImage } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal text-white">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(200,155,60,.24),transparent_32rem)]" />
      <div className="container-luxury relative z-10 pt-24">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="font-semibold uppercase tracking-[.35em] text-gold">
          Luxury Tanzania Safaris
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }} className="mt-5 max-w-5xl font-heading text-5xl font-bold leading-tight text-balance md:text-7xl lg:text-8xl">
          Hear the wild call of Tanzania in cinematic comfort.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .3 }} className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
          Private safaris, crater adventures, Kilimanjaro treks, Zanzibar escapes, and cultural journeys designed by local experts in the Ngorongoro Conservation Area.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .45 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg"><Link href="/booking">Book Your Safari <ArrowRight className="h-5 w-5" /></Link></Button>
          <Button asChild size="lg" variant="outline"><Link href="/destinations">Explore Tanzania <PlayCircle className="h-5 w-5" /></Link></Button>
        </motion.div>
      </div>
    </section>
  );
}
