import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/og-image.jpg"
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image.startsWith("http") ? image : absoluteUrl(image), width: 1200, height: 630 }],
      locale: "en_US",
      type: "website"
    },
    twitter: { card: "summary_large_image", title, description, images: [image] }
  };
}
