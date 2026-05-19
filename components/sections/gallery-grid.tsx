"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { galleryByDestination } from "@/lib/data";

export function GalleryGrid() {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <>
      <div className="space-y-10">
        {Object.entries(galleryByDestination).map(([name, images]) => (
          <section key={name}>
            <h3 className="mb-4 font-heading text-3xl font-bold text-forest">{name}</h3>
            <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
              {images.map((image, index) => (
                <button key={image} onClick={() => setSelected(image)} className="mb-5 block w-full overflow-hidden rounded-[2rem] focus-ring" aria-label="Open safari gallery image">
                  <Image src={image} alt={`${name} gallery image ${index + 1}`} width={900} height={700} className="h-auto w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
      {selected ? <div className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4" role="dialog" aria-modal="true"><button onClick={() => setSelected(null)} className="absolute right-5 top-5 rounded-full bg-white p-3 text-charcoal focus-ring" aria-label="Close lightbox"><X /></button><div className="relative h-[82vh] w-full max-w-5xl"><Image src={selected} alt="Expanded safari gallery view" fill sizes="100vw" className="object-contain" /></div></div> : null}
    </>
  );
}
