import type { DefaultSeoProps } from "next-seo";
import { siteConfig } from "@/lib/site";

const defaultSeoConfig: DefaultSeoProps = {
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultTitle: `${siteConfig.name} | Luxury Tanzania Safaris`,
  description: siteConfig.description,
  canonical: siteConfig.url,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name
  }
};

export default defaultSeoConfig;
