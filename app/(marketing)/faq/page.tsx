import { Accordion } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/sections/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "FAQ", path: "/faq" });
const faqs = [
  { question: "When is the best time for a Tanzania safari?", answer: "Tanzania is excellent year-round. June to October is best for dry-season viewing and river crossings, while January to March is ideal for Serengeti calving season." },
  { question: "Are your safaris private?", answer: "Most Great Roar Safaris journeys are private and tailor-made, with your own guide and vehicle unless you request a small-group option." },
  { question: "Can you combine safari with Zanzibar?", answer: "Yes. We frequently design bush-and-beach itineraries that finish with barefoot luxury on Zanzibar or nearby private islands." },
  { question: "Do you handle domestic flights and lodges?", answer: "Yes. We coordinate lodge reservations, bush flights, airport assistance, transfers, park permits, and guiding logistics." }
];
export default function FAQPage() { return <section className="bg-sand pb-24 pt-40"><div className="container-luxury max-w-4xl"><SectionHeading eyebrow="FAQ" title="Safari questions, answered" /><Accordion items={faqs} /></div></section>; }
