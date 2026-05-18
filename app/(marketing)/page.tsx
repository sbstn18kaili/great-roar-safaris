import Script from "next/script";
import { BlogCard } from "@/components/cards/blog-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { DestinationsShowcase } from "@/components/sections/destinations-showcase";
import { FeaturedSafaris } from "@/components/sections/featured-safaris";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { SeasonCalendar } from "@/components/sections/season-calendar";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { blogPosts } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteConfig.name,
    description: siteConfig.description,
    address: siteConfig.location,
    telephone: siteConfig.phone,
    url: siteConfig.url
  };
  return (
    <>
      <Script id="organization-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Hero />
      <FeaturedSafaris />
      <WhyChooseUs />
      <DestinationsShowcase />
      <Stats />
      <SeasonCalendar />
      <section className="py-24"><div className="container-luxury"><SectionHeading eyebrow="Safari gallery" title="Moments from the wild" description="A masonry gallery of landscapes, wildlife, beaches, lodges, and cultural encounters." /><GalleryGrid /></div></section>
      <Testimonials />
      <section className="py-24"><div className="container-luxury"><SectionHeading eyebrow="Travel journal" title="Safari planning guides" /><div className="grid gap-6 md:grid-cols-3">{blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div></div></section>
      <CtaBanner />
    </>
  );
}
