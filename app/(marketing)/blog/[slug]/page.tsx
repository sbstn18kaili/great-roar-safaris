import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return blogPosts.map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const post = blogPosts.find((item) => item.slug === slug); return createMetadata({ title: post?.title ?? "Blog", description: post?.excerpt, path: `/blog/${slug}`, image: post?.image }); }

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <article className="pb-24 pt-36"><div className="container-luxury max-w-4xl"><p className="font-bold uppercase tracking-[.25em] text-gold">{post.category} · {post.readTime}</p><h1 className="mt-4 font-heading text-5xl font-bold text-forest md:text-7xl">{post.title}</h1><p className="mt-4 text-charcoal/60">Published {new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(post.date))}</p><div className="relative mt-10 h-[460px] overflow-hidden rounded-[2rem]"><Image src={post.image} alt={post.title} fill className="object-cover" /></div><div className="prose prose-lg mt-10 max-w-none text-charcoal/75">{post.content.map((paragraph) => <p key={paragraph} className="mb-6 leading-8">{paragraph}</p>)}</div></div></article>;
}
