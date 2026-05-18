import { Binoculars, Headphones, Hotel, MapPinned, ShieldCheck } from "lucide-react";
import type { BlogPost, Destination, SafariPackage, Testimonial } from "@/types";

export const heroImage = "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=85";

export const safariPackages: SafariPackage[] = [
  {
    slug: "serengeti-migration-safari",
    title: "Serengeti Migration Safari",
    destination: "Serengeti National Park",
    duration: "8 days",
    price: "From $4,850",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80",
    summary: "A cinematic migration journey with private guides, mobile luxury camps, and sunrise game drives.",
    highlights: ["Great migration crossings", "Private 4x4 vehicle", "Luxury tented camps"]
  },
  {
    slug: "ngorongoro-crater-tour",
    title: "Ngorongoro Crater Tour",
    destination: "Ngorongoro Conservation Area",
    duration: "3 days",
    price: "From $1,650",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    summary: "Descend into the world’s largest intact volcanic caldera for big-cat sightings and crater-rim stays.",
    highlights: ["Crater floor picnic", "Rhino tracking", "Maasai cultural visit"]
  },
  {
    slug: "tarangire-safari",
    title: "Tarangire Safari",
    destination: "Tarangire National Park",
    duration: "4 days",
    price: "From $2,250",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=1200&q=80",
    summary: "Follow elephant herds among ancient baobabs with secluded lodges and golden-hour photography.",
    highlights: ["Elephant herds", "Baobab landscapes", "Night drive option"]
  },
  {
    slug: "zanzibar-escape",
    title: "Zanzibar Escape",
    destination: "Zanzibar Archipelago",
    duration: "5 days",
    price: "From $1,950",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=1200&q=80",
    summary: "A barefoot-luxury beach extension with Stone Town culture, spice farms, and turquoise water.",
    highlights: ["Beachfront resort", "Spice tour", "Dhow sunset cruise"]
  },
  {
    slug: "kilimanjaro-trek",
    title: "Kilimanjaro Trek",
    destination: "Mount Kilimanjaro",
    duration: "9 days",
    price: "From $3,400",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1200&q=80",
    summary: "Summit Africa’s highest peak with a safety-first crew, high-quality gear, and acclimatization planning.",
    highlights: ["Machame or Lemosho route", "Summit support", "Portable oxygen"]
  },
  {
    slug: "luxury-honeymoon-safari",
    title: "Luxury Honeymoon Safari",
    destination: "Northern Circuit + Zanzibar",
    duration: "10 days",
    price: "From $6,900",
    rating: 5,
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=80",
    summary: "Romantic private safari moments, candlelit bush dinners, hot-air ballooning, and island serenity.",
    highlights: ["Private plunge-pool suites", "Balloon safari", "Beach finale"]
  }
];

export const destinations: Destination[] = [
  {
    slug: "serengeti-national-park",
    name: "Serengeti National Park",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    description: "Endless plains, predators, and the legendary Great Migration across Tanzania’s most iconic wilderness.",
    bestSeason: "June–October and January–March"
  },
  {
    slug: "ngorongoro-crater",
    name: "Ngorongoro Crater",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    description: "A UNESCO-listed natural amphitheater with dense wildlife and dramatic volcanic landscapes.",
    bestSeason: "Year-round"
  },
  {
    slug: "mount-kilimanjaro",
    name: "Mount Kilimanjaro",
    image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1200&q=80",
    description: "Africa’s rooftop, offering premium guided treks through rainforest, moorland, alpine desert, and glaciers.",
    bestSeason: "January–March and June–October"
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=1200&q=80",
    description: "White sand, spice-scented heritage, coral reefs, and refined beach resorts after your safari.",
    bestSeason: "June–October and December–February"
  },
  {
    slug: "tarangire-national-park",
    name: "Tarangire National Park",
    image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=1200&q=80",
    description: "Elephant-rich landscapes framed by ancient baobabs and rewarding dry-season wildlife concentrations.",
    bestSeason: "July–October"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Amelia Carter",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    quote: "Every detail felt effortless: the crater lodge, our guide Emmanuel, and the surprise bush breakfast were unforgettable."
  },
  {
    name: "Daniel Kim",
    location: "Seattle, USA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    quote: "Great Roar Safaris built a private migration route that avoided crowds while putting us right where the action was."
  },
  {
    name: "Sofia Mendes",
    location: "Lisbon, Portugal",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    quote: "The Kilimanjaro team was safety-focused, warm, and incredibly organized. We summited with confidence."
  }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=80"
];

export const whyChooseUs = [
  { title: "Local expert guides", description: "Born-and-raised naturalists with deep knowledge of Tanzania’s wildlife corridors.", icon: Binoculars },
  { title: "Personalized safari plans", description: "Every itinerary is tailored around pace, interests, seasonality, and celebration moments.", icon: MapPinned },
  { title: "Luxury accommodations", description: "Handpicked lodges and camps with exceptional guiding, comfort, and conservation credentials.", icon: Hotel },
  { title: "24/7 support", description: "On-trip concierge care from arrival through departure, including flight and route adjustments.", icon: Headphones },
  { title: "Trusted Tanzania experience", description: "Transparent planning, ethical partners, and a safety-first operating standard.", icon: ShieldCheck }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "best-time-to-visit-serengeti",
    title: "Best Time to Visit the Serengeti for the Great Migration",
    excerpt: "Month-by-month guidance for river crossings, calving season, predator sightings, and crowd-free luxury camps.",
    date: "2026-04-12",
    image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80",
    category: "Safari Planning",
    readTime: "6 min read",
    content: [
      "The Serengeti is rewarding throughout the year, but the migration shifts constantly with rainfall and grass conditions.",
      "For dramatic river crossings, plan for the northern Serengeti between July and October. For newborn wildebeest and predator action, the southern plains peak from January through March.",
      "Luxury mobile camps are ideal because they move close to seasonal wildlife concentrations while preserving a refined, low-impact experience."
    ]
  },
  {
    slug: "luxury-safari-packing-guide",
    title: "Luxury Safari Packing Guide for Tanzania",
    excerpt: "What to pack for game drives, bush flights, crater mornings, beach extensions, and elegant lodge dinners.",
    date: "2026-03-28",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=80",
    category: "Travel Tips",
    readTime: "5 min read",
    content: [
      "Pack lightweight neutral layers, a warm fleece for early drives, sun protection, and soft-sided luggage for bush flights.",
      "Binoculars and a camera with spare batteries will elevate sightings, while comfortable shoes are enough for most lodge walks.",
      "If your itinerary includes Zanzibar, add reef-safe sunscreen, relaxed resort wear, and a light cover-up for Stone Town visits."
    ]
  },
  {
    slug: "ngorongoro-crater-conservation-guide",
    title: "Ngorongoro Crater: Conservation, Culture, and Wildlife",
    excerpt: "A concise guide to exploring the Ngorongoro Conservation Area with respect for wildlife and Maasai communities.",
    date: "2026-02-18",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    category: "Destinations",
    readTime: "7 min read",
    content: [
      "Ngorongoro blends extraordinary wildlife density with living cultural landscapes and globally important conservation work.",
      "Responsible visits support regulated access, trained guides, community partnerships, and careful route planning to reduce pressure on sensitive habitats.",
      "A crater descent pairs beautifully with nearby highland walks, Maasai-led cultural encounters, and onward Serengeti exploration."
    ]
  }
];

export const seasons = [
  { months: "Jan–Mar", wildlife: "Calving season in southern Serengeti", tip: "Excellent predator action and green landscapes." },
  { months: "Apr–May", wildlife: "Emerald season and migratory birds", tip: "Best value for photographers who love dramatic skies." },
  { months: "Jun–Oct", wildlife: "Dry-season wildlife and river crossings", tip: "Book early for premium camps and guides." },
  { months: "Nov–Dec", wildlife: "Short rains and returning herds", tip: "Beautiful light, fewer crowds, and festive escapes." }
];
