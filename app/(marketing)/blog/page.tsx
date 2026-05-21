import { BlogCard } from "@/components/cards/blog-card";
import { SectionHeading } from "@/components/sections/section-heading";
import { blogPosts } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Blog", path: "/blog" });
export default function BlogPage() { return <section className="pb-24 pt-40"><div className="container-luxury"><SectionHeading eyebrow="Travel journal" title="Safari planning blog" description="CMS-ready travel tips, conservation notes, wildlife calendars, and luxury lodge advice." /><div className="grid gap-6 md:grid-cols-3">{blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div></div></section>; }
