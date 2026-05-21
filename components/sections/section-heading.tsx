export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[.28em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-4xl font-bold text-forest md:text-6xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-charcoal/70">{description}</p> : null}
    </div>
  );
}
