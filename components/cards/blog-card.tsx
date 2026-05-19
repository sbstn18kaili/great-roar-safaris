import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-charcoal/5">
      <div className="relative h-56"><Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" /></div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">{post.category} · {post.readTime}</p>
        <h3 className="mt-3 font-heading text-2xl font-bold"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p className="mt-3 text-sm leading-6 text-charcoal/70">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-forest">Read guide <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </article>
  );
}
