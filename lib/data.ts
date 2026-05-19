import { Binoculars, Headphones, Hotel, MapPinned, ShieldCheck } from "lucide-react";
import type { BlogPost, Destination, OptionalActivity, SafariPackage, Testimonial } from "@/types";

export const heroImage = "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2400&q=85";

export const safariPackages: SafariPackage[] = [
  { slug: "4-day-luxury-wilderness-tanzania-safari", title: "4 Day Luxury Wilderness Tanzania Safari", destination: "Tarangire + Ngorongoro", duration: "4 days", price: "From $2,100", rating: 4.8, image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1200&q=80", summary: "A short luxury escape with private guiding and premium lodges.", highlights: ["Tarangire elephants", "Crater game drive", "Luxury lodge stay"] },
  { slug: "5-day-midrange-best-of-tanzania-safari", title: "5-Day Midrange Best of Tanzania Safari", destination: "Tarangire + Serengeti + Ngorongoro", duration: "5 days", price: "From $2,450", rating: 4.8, image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80", summary: "Balanced value and comfort across Tanzania’s iconic northern parks.", highlights: ["Three-park circuit", "Midrange lodges", "Big cat sightings"] },
  { slug: "5-day-luxury-best-of-tanzania-safari", title: "5-Day Luxury Best of Tanzania Safari", destination: "Serengeti + Ngorongoro", duration: "5 days", price: "From $3,200", rating: 4.9, image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80", summary: "High-comfort classic safari with private game drives and scenic flights.", highlights: ["Luxury camps", "Private guide", "Crater and plains"] },
  { slug: "6-day-great-migration-ndutu-tanzania-safari", title: "6-Day Great Migration Ndutu Tanzania Safari", destination: "Ndutu + Southern Serengeti", duration: "6 days", price: "From $3,050", rating: 4.9, image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1200&q=80", summary: "Focus on calving season action in Ndutu and southern plains.", highlights: ["Calving season", "Predator activity", "Migration tracking"] },
  { slug: "7-days-premium-luxury-all-inclusive-safari", title: "7 Days Premium Luxury All Inclusive Safari", destination: "Northern Circuit", duration: "7 days", price: "From $5,600", rating: 5, image: "https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=1200&q=80", summary: "All-inclusive private safari with top-tier lodges and concierge service.", highlights: ["All-inclusive", "Premium lodges", "Private 4x4"] },
  { slug: "8-day-mid-range-mara-river-great-migration", title: "8-Day Mid-Range Mara River Great Migration", destination: "Northern Serengeti", duration: "8 days", price: "From $3,700", rating: 4.8, image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=1200&q=80", summary: "Designed for river crossing season with strong mid-range comfort.", highlights: ["Mara crossings", "Mobile camps", "Prime migration timing"] },
  { slug: "8-day-mid-range-ndutu-migration-footsteps", title: "8-Day Mid-Range Ndutu Migration Footsteps Safari", destination: "Ndutu + Central Serengeti", duration: "8 days", price: "From $3,550", rating: 4.8, image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80", summary: "Follow migration movements with strategic overnight positioning.", highlights: ["Ndutu focus", "Central Serengeti", "Excellent photography"] },
  { slug: "11-days-northern-circuit-safari-zanzibar-beach", title: "11 Days Northern Circuit Safari & Zanzibar Beach", destination: "Northern Circuit + Zanzibar", duration: "11 days", price: "From $6,300", rating: 4.9, image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f95?auto=format&fit=crop&w=1200&q=80", summary: "Classic safari adventure followed by premium island relaxation.", highlights: ["Bush and beach", "Stone Town", "Luxury resorts"] },
  { slug: "12-day-premium-luxury-safari-beach-all-inclusive", title: "12-Day Premium Luxury Safari & Beach Holidays All Inclusive", destination: "Serengeti + Ngorongoro + Zanzibar", duration: "12 days", price: "From $8,400", rating: 5, image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80", summary: "Flagship all-inclusive honeymoon and celebration itinerary.", highlights: ["Premium lodges", "Private transfers", "Zanzibar finale"] },
  { slug: "kilimanjaro-trek", title: "Kilimanjaro Trek", destination: "Mount Kilimanjaro", duration: "9 days", price: "From $3,400", rating: 4.8, image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1200&q=80", summary: "Summit Africa’s highest peak with a trained support crew.", highlights: ["Acclimatization", "Safety-first", "Summit support"] },
  { slug: "zanzibar-escape", title: "Zanzibar Escape", destination: "Zanzibar", duration: "5 days", price: "From $1,950", rating: 4.9, image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=1200&q=80", summary: "A refined beach extension with Stone Town culture and island relaxation.", highlights: ["Beach resort", "Spice tour", "Dhow cruise"] }
];

export const destinations: Destination[] = [
  { slug: "serengeti-national-park", name: "Serengeti", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80", description: "Great Migration plains and big cats.", bestSeason: "Jun–Oct" },
  { slug: "ngorongoro-crater", name: "Ngorongoro Crater", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80", description: "UNESCO crater packed with wildlife.", bestSeason: "Year-round" },
  { slug: "mount-kilimanjaro", name: "Kilimanjaro", image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?auto=format&fit=crop&w=1200&q=80", description: "Africa’s highest mountain trek.", bestSeason: "Jan–Mar, Jun–Oct" },
  { slug: "zanzibar", name: "Zanzibar", image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=1200&q=80", description: "Luxury beaches and Swahili culture.", bestSeason: "Jun–Oct, Dec–Feb" },
  { slug: "tarangire-national-park", name: "Tarangire", image: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=1200&q=80", description: "Elephants and iconic baobab landscapes.", bestSeason: "Jul–Oct" }
];

export const optionalActivities: OptionalActivity[] = [
  { slug: "balloon-safari", title: "Balloon Safari", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80", short: "Sunrise aerial wildlife views.", details: ["Early departure and bush breakfast.", "Best added to Serengeti itineraries."] },
  { slug: "maasai-village-visit", title: "Maasai Visit", image: "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?auto=format&fit=crop&w=1200&q=80", short: "Culture and community storytelling.", details: ["Hosted by local Maasai guides.", "Can pair with Ngorongoro routes."] },
  { slug: "hadzabe-tribe-visit", title: "Hadzabe Tribe Visit", image: "https://images.unsplash.com/photo-1591805347239-743fa8a41330?auto=format&fit=crop&w=1200&q=80", short: "Learn from one of Tanzania’s oldest communities.", details: ["Ethical cultural interaction.", "Usually starts from Lake Eyasi."] },
  { slug: "kilimanjaro-day-hike", title: "Kilimanjaro Day Hike", image: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?auto=format&fit=crop&w=1200&q=80", short: "One-day rainforest trekking experience.", details: ["Good for non-summit travelers.", "Private guide and permits included."] },
  { slug: "mto-wa-mbu-walk", title: "Mto wa Mbu Walk", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1200&q=80", short: "Village markets and local food walk.", details: ["Community-led cultural stop.", "Popular between parks."] },
  { slug: "empakai-crater-hike", title: "Empakai Crater Hike", image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80", short: "Scenic crater-rim hiking adventure.", details: ["Guided highland hike.", "Views toward Ol Doinyo Lengai."] },
  { slug: "chemka-hot-springs", title: "Chemka Hot Springs", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80", short: "Relaxing spring swim near Moshi.", details: ["Crystal-clear geothermal water.", "Great post-safari unwind."] },
  { slug: "coffee-tour", title: "Coffee Tour", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80", short: "Farm-to-cup coffee experience.", details: ["Includes roasting demonstration.", "Available around Arusha/Moshi."] }
];

export const galleryByDestination = {
  Serengeti: ["https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1521651201144-634f700b36ef?auto=format&fit=crop&w=900&q=80"],
  Ngorongoro: ["https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80"],
  Tarangire: ["https://images.unsplash.com/photo-1504432842672-1a79f78e4084?auto=format&fit=crop&w=900&q=80"],
  Zanzibar: ["https://images.unsplash.com/photo-1586500036706-41963de24d8b?auto=format&fit=crop&w=900&q=80", "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=80"]
};

export const testimonials: Testimonial[] = [{ name: "Amelia Carter", location: "London, UK", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80", rating: 5, quote: "Excellent safari planning and guiding." }];
export const whyChooseUs = [
  { title: "Local expert guides", description: "Born-and-raised naturalists with deep knowledge of Tanzania’s wildlife corridors.", icon: Binoculars },
  { title: "Personalized safari plans", description: "Tailored itineraries around your pace and interests.", icon: MapPinned },
  { title: "Luxury accommodations", description: "Handpicked lodges and camps with high guiding standards.", icon: Hotel },
  { title: "24/7 support", description: "Concierge care from arrival to departure.", icon: Headphones },
  { title: "Trusted Tanzania experience", description: "Transparent planning and safety-first operations.", icon: ShieldCheck }
];
export const blogPosts: BlogPost[] = [{ slug: "best-time-to-visit-serengeti", title: "Best Time to Visit the Serengeti", excerpt: "A short seasonal planning guide.", date: "2026-04-12", image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=1200&q=80", category: "Safari Planning", readTime: "4 min read", content: ["Plan around wildlife movement and weather windows."] }];
export const seasons = [
  { months: "Jan–Mar", wildlife: "Calving season in southern Serengeti", tip: "Excellent predator action, newborn wildebeest, and lush green landscapes." },
  { months: "Apr–May", wildlife: "Green season and migratory birds", tip: "Quieter parks, dramatic skies, and value-focused luxury rates." },
  { months: "Jun–Oct", wildlife: "Dry-season concentration and river crossings", tip: "Top wildlife visibility and classic game-viewing across northern parks." },
  { months: "Nov–Dec", wildlife: "Short rains and herd movement reset", tip: "Beautiful light, fewer crowds, and excellent photography conditions." }
];
