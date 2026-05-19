import Image from "next/image";
import Link from "next/link";
import type { SafariPackage } from "@/types";

export function SafariCard({ safari }: { safari: SafariPackage }) {
  return (
    <Link id={safari.slug} href={`/safaris/${safari.slug}`} className="group block overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-charcoal/10 transition hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <Image src={safari.image} alt={`${safari.title} luxury safari scene`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-2xl font-bold">{safari.title}</h3>
      </div>
    </Link>
  );
}
