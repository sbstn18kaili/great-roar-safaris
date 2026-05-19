import type { LucideIcon } from "lucide-react";

export type SafariPackage = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  summary: string;
  highlights: string[];
};

export type Destination = {
  slug: string;
  name: string;
  image: string;
  description: string;
  bestSeason: string;
};

export type OptionalActivity = {
  slug: string;
  title: string;
  image: string;
  short: string;
  details: string[];
};

export type Testimonial = {
  name: string;
  location: string;
  image: string;
  rating: number;
  quote: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
  content: string[];
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};
