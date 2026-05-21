import { CountUp } from "@/components/animations/count-up";

const stats = [
  { value: 5000, suffix: "+", label: "Travelers" },
  { value: 120, suffix: "+", label: "Safari Tours" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" }
];

export function Stats() {
  return (
    <section className="bg-safari-gradient py-20 text-white">
      <div className="container-luxury grid gap-6 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
            <div className="font-heading text-5xl font-bold text-gold"><CountUp value={stat.value} suffix={stat.suffix} /></div>
            <p className="mt-2 text-white/75">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
