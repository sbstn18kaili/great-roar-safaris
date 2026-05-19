import { GalleryGrid } from "@/components/sections/gallery-grid";
import { SectionHeading } from "@/components/sections/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Gallery", path: "/gallery" });
export default function GalleryPage() { return <section className="pb-24 pt-40"><div className="container-luxury"><SectionHeading eyebrow="Gallery" title="Safari imagery that inspires" description="Optimized, lazy-loaded images with lightbox viewing for cinematic browsing." /><GalleryGrid /></div></section>; }
