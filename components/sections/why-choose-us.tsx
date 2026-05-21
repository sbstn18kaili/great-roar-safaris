import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { whyChooseUs } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section className="bg-sand py-24">
      <div className="container-luxury">
        <SectionHeading eyebrow="Why choose us" title="Local expertise, luxury standards" description="We combine grounded Tanzania knowledge with meticulous hospitality and responsive support." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * .06} className="rounded-[2rem] bg-white p-6 shadow-lg shadow-charcoal/5">
                <div className="mb-5 inline-flex rounded-2xl bg-forest/10 p-3 text-forest"><Icon className="h-6 w-6" /></div>
                <h3 className="font-heading text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/70">{feature.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
