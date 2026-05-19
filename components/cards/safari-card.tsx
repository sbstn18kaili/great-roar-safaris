import Image from "next/image";
import Link from "next/link";
import type { SafariPackage } from "@/types";

export function SafariCard({ safari }: { safari: SafariPackage }) {
  return (
    <Link id={safari.slug} href={`/safaris/${safari.slug}`} className="group block overflow-hidden rounded-sm bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <Image src={safari.image} alt={`${safari.title} safari`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="bg-white px-4 py-3 text-center">
        <h3 className="font-body text-xl leading-6 text-charcoal">{safari.title}</h3>
      </div>
    </Link>
  );
}
