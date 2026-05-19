import { seasons } from "@/lib/data";
import { SectionHeading } from "@/components/sections/section-heading";

export function SeasonCalendar() {
  return (
    <section className="bg-sand py-24">
      <div className="container-luxury">
        <SectionHeading eyebrow="Wildlife calendar" title="Plan around nature’s rhythm" description="Tanzania rewards travelers year-round. These seasonal notes help align your safari with the wildlife moments you value most." />
        <div className="grid gap-5 md:grid-cols-4">
          {seasons.map((season) => (
            <div key={season.months} className="rounded-[2rem] bg-white p-6 shadow-lg shadow-charcoal/5">
              <p className="font-heading text-3xl font-bold text-forest">{season.months}</p>
              <h3 className="mt-4 font-semibold">{season.wildlife}</h3>
              <p className="mt-3 text-sm leading-6 text-charcoal/70">{season.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
