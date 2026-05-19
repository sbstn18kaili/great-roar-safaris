import Image from "next/image";

export function PageHero({ eyebrow, title, description, image }: { eyebrow: string; title: string; description?: string; image: string }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 text-white">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/45" />
      </div>
      <div className="container-luxury relative z-10 max-w-4xl">
        <p className="font-bold uppercase tracking-[.3em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-heading text-5xl font-bold md:text-7xl">{title}</h1>
        {description ? <p className="mt-6 text-lg leading-8 text-white/80">{description}</p> : null}
      </div>
    </section>
  );
}
