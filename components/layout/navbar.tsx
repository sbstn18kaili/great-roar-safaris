"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { safariPackages } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/about", label: "About" },
  { href: "/safaris", label: "Safaris" },
  { href: "/destinations", label: "Destinations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav aria-label="Primary" className="container-luxury rounded-full bg-forest px-5 py-3 text-white shadow-2xl shadow-black/20">
        <div className="flex items-center justify-between gap-5">
          <Link href="/" className="font-heading text-xl font-bold tracking-wide focus-ring inline-flex items-center gap-2">
            <Image src="/images/logo/great-roar-logo.svg" alt="Great Roar Safaris logo" width={44} height={44} className="h-11 w-11 rounded-full border border-white/40 bg-white object-cover" /><span>{siteConfig.name}</span>
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => item.label === "Safaris" ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className="flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white focus-ring">
                  Safaris <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="invisible absolute left-0 top-8 w-72 translate-y-3 rounded-3xl bg-white p-3 text-charcoal opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {safariPackages.slice(0, 5).map((pkg) => (
                    <Link key={pkg.slug} href={`/safaris#${pkg.slug}`} className="block rounded-2xl px-4 py-3 text-sm hover:bg-sand">
                      {pkg.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-white/90 hover:text-white focus-ring">
                {item.label}
              </Link>
            ))}
          </div>
          <Button asChild size="sm" className="hidden lg:inline-flex"><Link href="/booking">Book Your Safari</Link></Button>
          <button aria-label="Toggle navigation" className="focus-ring lg:hidden" onClick={() => setOpen((value) => !value)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <div className={cn("grid transition-all lg:hidden", open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]")}> 
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 rounded-3xl bg-charcoal/85 p-4">
              {nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-3 py-2 hover:bg-white/10">{item.label}</Link>)}
              <Button asChild><Link href="/booking" onClick={() => setOpen(false)}>Book Your Safari</Link></Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
