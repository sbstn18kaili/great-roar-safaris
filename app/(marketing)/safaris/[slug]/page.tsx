import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, CircleX, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import { safariPackages } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

type AccommodationOption = { name: string; image: string };
type OvernightOptions = { area: string; silver: AccommodationOption; gold: AccommodationOption; platinum: AccommodationOption };
type ItineraryDay = { day: string; title: string; plan: string; overnight: OvernightOptions };
type SafariDetail = {
  intro: string;
  bestTime: string;
  pace: string;
  style: string;
  includes: string[];
  excludes: string[];
  notes: string[];
  itinerary: ItineraryDay[];
};

const safariDetails: Record<string, SafariDetail> = {
  "4-day-luxury-wilderness-tanzania-safari": {
    intro: "A short premium route designed for travelers wanting maximum wildlife impact in limited time.",
    bestTime: "Year-round; strongest wildlife concentration July–October.",
    pace: "Moderate pace with focused game drives.",
    style: "Private luxury safari in a dedicated 4x4.",
    includes: ["Private 4x4 and professional guide", "Park fees", "Accommodation and meals", "Airport transfers", "Drinking water during drives"],
    excludes: ["International flights", "Visa and insurance", "Tips and personal expenses", "Premium drinks"],
    notes: ["Ideal first safari itinerary.", "Can be extended with Zanzibar or Kilimanjaro day hike."],
    itinerary: [
      { day: "Day 1", title: "Arrival in Arusha", plan: "Meet-and-greet at airport, transfer to lodge, trip briefing, and rest.", overnight: overnight("Arusha", "Four Points by Sheraton Arusha", "Arusha Serena Hotel", "Legendary Lodge Arusha") },
      { day: "Day 2", title: "Tarangire National Park", plan: "Drive to Tarangire for full-day game drive among baobabs and elephant corridors.", overnight: overnight("Tarangire", "Tarangire Simba Lodge", "Tarangire Sopa Lodge", "Chem Chem Lodge") },
      { day: "Day 3", title: "Ngorongoro Highlands", plan: "Transfer to highlands with scenic stops and sunset viewpoints.", overnight: overnight("Karatu/Ngorongoro", "Country Lodge Karatu", "Ngorongoro Farm House", "The Manor at Ngorongoro") },
      { day: "Day 4", title: "Crater Safari & Return", plan: "Early crater descent, picnic lunch, and afternoon return to Arusha.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  },
  "5-day-midrange-best-of-tanzania-safari": {
    intro: "A balanced midrange journey covering top northern parks with strong wildlife variety.",
    bestTime: "Year-round, especially June–October.",
    pace: "Active with daily transfers and game drives.",
    style: "Private midrange safari with carefully selected lodges.",
    includes: ["Guide and private vehicle", "Park fees", "Accommodation and full-board meals", "Airport transfers"],
    excludes: ["Flights", "Visa/insurance", "Tips", "Personal purchases"],
    notes: ["Great for first-time Tanzania visitors.", "Can be upgraded to luxury accommodations."],
    itinerary: [
      { day: "Day 1", title: "Arusha to Tarangire", plan: "Start safari with afternoon drive in Tarangire’s river valley and baobab zones.", overnight: overnight("Tarangire", "Tarangire Simba Lodge", "Tarangire Sopa Lodge", "Sanctuary Swala Camp") },
      { day: "Day 2", title: "Tarangire to Serengeti", plan: "Transit through highlands and enter Serengeti for sunset game viewing.", overnight: overnight("Serengeti", "Embalakai Camp", "Kubu Kubu Tented Lodge", "Four Seasons Safari Lodge Serengeti") },
      { day: "Day 3", title: "Central Serengeti", plan: "Full-day game drive focusing on predator territories and migration tracks.", overnight: overnight("Serengeti", "Embalakai Camp", "Kubu Kubu Tented Lodge", "Four Seasons Safari Lodge Serengeti") },
      { day: "Day 4", title: "Serengeti to Ngorongoro", plan: "Morning drive, then transfer to Ngorongoro conservation area.", overnight: overnight("Karatu/Ngorongoro", "Country Lodge Karatu", "Ngorongoro Lion’s Paw", "The Highlands Ngorongoro") },
      { day: "Day 5", title: "Crater floor and return", plan: "Descend into crater for wildlife viewing, then return to Arusha.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  },
  "5-day-luxury-best-of-tanzania-safari": {
    intro: "High-comfort safari across premium wildlife regions with refined lodge experiences.",
    bestTime: "June–October and January–March.",
    pace: "Balanced luxury pace with quality drive windows.",
    style: "Private luxury itinerary with high-end lodges/camps.",
    includes: ["Luxury accommodation", "Private guide and 4x4", "Park fees", "Meals", "Transfers"],
    excludes: ["International flights", "Travel insurance", "Tips", "Personal beverages"],
    notes: ["Excellent choice for couples and honeymooners."],
    itinerary: [
      { day: "Day 1", title: "Arrival & Arusha retreat", plan: "Airport meet-and-greet and relax at luxury lodge.", overnight: overnight("Arusha", "Four Points by Sheraton Arusha", "Arusha Serena Hotel", "Legendary Lodge Arusha") },
      { day: "Day 2", title: "Fly/drive to Serengeti", plan: "Enter Serengeti and enjoy afternoon premium game drive.", overnight: overnight("Serengeti", "Lahia Tented Lodge", "Melia Serengeti Lodge", "Singita Sasakwa Lodge") },
      { day: "Day 3", title: "Serengeti full day", plan: "Private full-day safari with flexible photo stops and sundowner.", overnight: overnight("Serengeti", "Lahia Tented Lodge", "Melia Serengeti Lodge", "Singita Sasakwa Lodge") },
      { day: "Day 4", title: "Ngorongoro rim", plan: "Travel to Ngorongoro and settle into crater-rim or Karatu luxury lodge.", overnight: overnight("Ngorongoro/Karatu", "Country Lodge Karatu", "Ngorongoro Lion’s Paw", "The Highlands Ngorongoro") },
      { day: "Day 5", title: "Crater safari", plan: "Early crater descent and return to Arusha by evening.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  },
  "6-day-great-migration-ndutu-tanzania-safari": {
    intro: "Migration-focused safari centered on Ndutu calving season and predator interactions.",
    bestTime: "December–March for calving action.",
    pace: "Focused wildlife tracking pace.",
    style: "Private migration safari.",
    includes: ["Guide and vehicle", "Park/conservation fees", "Accommodation", "Meals"],
    excludes: ["Flights", "Insurance", "Tips", "Alcoholic beverages"],
    notes: ["Best booked early for prime calving-season camps."],
    itinerary: [
      { day: "Day 1", title: "Arrival and prep", plan: "Arrive Arusha and migration briefing with safari team.", overnight: overnight("Arusha", "Four Points by Sheraton Arusha", "Arusha Serena Hotel", "Legendary Lodge Arusha") },
      { day: "Day 2", title: "Transfer to Ndutu", plan: "Travel to Ndutu and evening game drive.", overnight: overnight("Ndutu", "Ndutu Safari Lodge", "Lake Masek Tented Camp", "andBeyond Under Canvas") },
      { day: "Day 3", title: "Ndutu game drives", plan: "Morning and afternoon drives following herds and predators.", overnight: overnight("Ndutu", "Ndutu Safari Lodge", "Lake Masek Tented Camp", "andBeyond Under Canvas") },
      { day: "Day 4", title: "Southern Serengeti", plan: "Explore calving plains and predator routes.", overnight: overnight("South Serengeti", "Heritage Ndutu Camp", "Kati Kati Ndutu", "Namiri Plains Camp") },
      { day: "Day 5", title: "Ngorongoro highlands", plan: "Transfer via highlands with scenic stops.", overnight: overnight("Karatu", "Country Lodge Karatu", "Kitela Lodge", "The Manor at Ngorongoro") },
      { day: "Day 6", title: "Return to Arusha", plan: "Morning optional activity then return transfer.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  },
  "7-days-premium-luxury-all-inclusive-safari": {
    intro: "All-inclusive premium safari through Tanzania’s northern circuit with top-tier hospitality.",
    bestTime: "Year-round with strong dry season wildlife June–October.",
    pace: "Comfortable premium pacing.",
    style: "Private all-inclusive luxury journey.",
    includes: ["Premium accommodation", "All meals and selected drinks", "Guide/vehicle", "Park fees", "Transfers"],
    excludes: ["International airfare", "Visa", "Insurance", "Gratuities"],
    notes: ["Ideal for milestone celebrations and high-comfort travelers."],
    itinerary: [
      { day: "Day 1", title: "Arrive Arusha", plan: "VIP arrival and lodge orientation.", overnight: overnight("Arusha", "Mount Meru Hotel", "Gran Meliá Arusha", "Legendary Lodge") },
      { day: "Day 2", title: "Tarangire", plan: "Game drive and luxury bush experience.", overnight: overnight("Tarangire", "Tarangire Safari Lodge", "Nimali Tarangire", "Chem Chem Lodge") },
      { day: "Day 3", title: "Manyara/Karatu", plan: "Scenic route with cultural and wildlife stops.", overnight: overnight("Karatu", "Farm of Dreams Lodge", "Ngorongoro Farm House", "The Manor at Ngorongoro") },
      { day: "Day 4", title: "Ngorongoro crater", plan: "Crater descent and curated picnic.", overnight: overnight("Ngorongoro", "Rhino Lodge", "Ngorongoro Serena", "The Highlands") },
      { day: "Day 5", title: "Serengeti transfer", plan: "Enter Serengeti with evening game drive.", overnight: overnight("Serengeti", "Lahia Tented Lodge", "Melia Serengeti Lodge", "Singita Sasakwa Lodge") },
      { day: "Day 6", title: "Serengeti full day", plan: "Private full-day game drive with sundowner.", overnight: overnight("Serengeti", "Lahia Tented Lodge", "Melia Serengeti Lodge", "Singita Sasakwa Lodge") },
      { day: "Day 7", title: "Return", plan: "Flight/drive back to Arusha and departure support.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  },
  "8-day-mid-range-mara-river-great-migration": {
    intro: "A migration-season route built around Mara River crossing opportunities.",
    bestTime: "July–October.",
    pace: "Active with strategic positioning.",
    style: "Private mid-range migration safari.",
    includes: ["Private guide and 4x4", "Accommodation", "Park fees", "Meals"],
    excludes: ["Flights", "Visa/insurance", "Tips"],
    notes: ["Crossing sightings are natural events and cannot be guaranteed."],
    itinerary: [
      { day: "Day 1", title: "Arrival Arusha", plan: "Arrival and migration-route briefing.", overnight: overnight("Arusha", "Four Points by Sheraton Arusha", "Arusha Serena Hotel", "Legendary Lodge Arusha") },
      { day: "Day 2", title: "To Serengeti", plan: "Transfer to central Serengeti with afternoon drive.", overnight: overnight("Central Serengeti", "Serengeti Heritage Camp", "Kubu Kubu", "Four Seasons Serengeti") },
      { day: "Day 3", title: "Central Serengeti", plan: "Predator-focused game drives.", overnight: overnight("Central Serengeti", "Serengeti Heritage Camp", "Kubu Kubu", "Four Seasons Serengeti") },
      { day: "Day 4", title: "North Serengeti transit", plan: "Drive north to migration corridor.", overnight: overnight("North Serengeti", "Baobab Mara Camp", "Mara Mara Tented Lodge", "Sayari Camp") },
      { day: "Day 5", title: "Mara River day", plan: "Full-day tracking at crossing points.", overnight: overnight("North Serengeti", "Baobab Mara Camp", "Mara Mara Tented Lodge", "Sayari Camp") },
      { day: "Day 6", title: "Mara River day 2", plan: "Additional river and plains exploration.", overnight: overnight("North Serengeti", "Baobab Mara Camp", "Mara Mara Tented Lodge", "Sayari Camp") },
      { day: "Day 7", title: "Return south/highlands", plan: "Transfer toward Ngorongoro/Karatu.", overnight: overnight("Karatu", "Country Lodge Karatu", "Kitela Lodge", "The Manor at Ngorongoro") },
      { day: "Day 8", title: "Return Arusha", plan: "Transfer to Arusha and departure.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  },
  "8-day-mid-range-ndutu-migration-footsteps": {
    intro: "Extended Ndutu-focused itinerary tracking seasonal herd movement and predator behavior.",
    bestTime: "December–March.",
    pace: "Exploration-heavy with flexible tracking drives.",
    style: "Private mid-range safari.",
    includes: ["Guide and vehicle", "Accommodation", "Meals", "Park fees"],
    excludes: ["Flights", "Insurance", "Tips", "Extra activities"],
    notes: ["Excellent for wildlife photographers and repeat safari-goers."],
    itinerary: [
      { day: "Day 1", title: "Arrival Arusha", plan: "Arrive and safari preparation.", overnight: overnight("Arusha", "Four Points by Sheraton Arusha", "Arusha Serena Hotel", "Legendary Lodge Arusha") },
      { day: "Day 2", title: "To Ndutu", plan: "Travel to Ndutu and introductory drive.", overnight: overnight("Ndutu", "Ndutu Safari Lodge", "Lake Masek Tented Camp", "andBeyond Under Canvas") },
      { day: "Day 3", title: "Ndutu game drives", plan: "Morning/afternoon drives around calving grounds.", overnight: overnight("Ndutu", "Ndutu Safari Lodge", "Lake Masek Tented Camp", "andBeyond Under Canvas") },
      { day: "Day 4", title: "Ndutu and south plains", plan: "Track herds and predator routes.", overnight: overnight("Ndutu", "Ndutu Safari Lodge", "Lake Masek Tented Camp", "andBeyond Under Canvas") },
      { day: "Day 5", title: "Central Serengeti", plan: "Shift to central Serengeti for varied ecosystems.", overnight: overnight("Central Serengeti", "Serengeti Heritage Camp", "Kubu Kubu", "Four Seasons Serengeti") },
      { day: "Day 6", title: "Central Serengeti full day", plan: "Big-cat and riverine exploration.", overnight: overnight("Central Serengeti", "Serengeti Heritage Camp", "Kubu Kubu", "Four Seasons Serengeti") },
      { day: "Day 7", title: "Ngorongoro/Karatu", plan: "Travel via highlands with scenic stops.", overnight: overnight("Karatu", "Country Lodge Karatu", "Kitela Lodge", "The Manor at Ngorongoro") },
      { day: "Day 8", title: "Return Arusha", plan: "Transfer back and departure assistance.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  },
  "11-days-northern-circuit-safari-zanzibar-beach": {
    intro: "A complete bush-and-beach itinerary combining classic safari with Zanzibar relaxation.",
    bestTime: "June–October and December–February.",
    pace: "Balanced between adventure and rest.",
    style: "Private safari + beach extension.",
    includes: ["Private safari services", "Accommodation and meals", "Domestic flights", "Park fees"],
    excludes: ["International flights", "Visa", "Insurance", "Tips"],
    notes: ["Ideal for couples and families seeking both wildlife and beach time."],
    itinerary: [
      { day: "Day 1", title: "Arrive Arusha", plan: "Arrival support and lodge check-in.", overnight: overnight("Arusha", "Four Points by Sheraton Arusha", "Arusha Serena Hotel", "Legendary Lodge Arusha") },
      { day: "Day 2", title: "Tarangire", plan: "Game drives among baobabs and elephant herds.", overnight: overnight("Tarangire", "Tarangire Simba Lodge", "Tarangire Sopa Lodge", "Chem Chem Lodge") },
      { day: "Day 3", title: "Ngorongoro", plan: "Highland transfer and crater rim views.", overnight: overnight("Karatu/Ngorongoro", "Country Lodge Karatu", "Ngorongoro Lion’s Paw", "The Highlands Ngorongoro") },
      { day: "Day 4", title: "Crater safari", plan: "Full-day crater exploration.", overnight: overnight("Karatu/Ngorongoro", "Country Lodge Karatu", "Ngorongoro Lion’s Paw", "The Highlands Ngorongoro") },
      { day: "Day 5", title: "Serengeti transfer", plan: "Transit to Serengeti with evening drive.", overnight: overnight("Serengeti", "Lahia Tented Lodge", "Melia Serengeti Lodge", "Singita Sasakwa Lodge") },
      { day: "Day 6", title: "Serengeti full day", plan: "Big-cat and migration tracking.", overnight: overnight("Serengeti", "Lahia Tented Lodge", "Melia Serengeti Lodge", "Singita Sasakwa Lodge") },
      { day: "Day 7", title: "Fly to Zanzibar", plan: "Morning transfer and domestic flight.", overnight: overnight("Zanzibar Beach", "Nungwi Dreams", "Zuri Zanzibar", "andBeyond Mnemba Island") },
      { day: "Day 8", title: "Zanzibar leisure", plan: "Beach day and optional reef excursion.", overnight: overnight("Zanzibar", "Amaan Bungalows", "Zuri Zanzibar", "Xanadu Villas") },
      { day: "Day 9", title: "Stone Town and spice", plan: "Cultural and culinary exploration.", overnight: overnight("Zanzibar", "Amaan Bungalows", "Zuri Zanzibar", "Xanadu Villas") },
      { day: "Day 10", title: "Zanzibar free day", plan: "Relaxation and optional water activities.", overnight: overnight("Zanzibar", "Amaan Bungalows", "Zuri Zanzibar", "Xanadu Villas") },
      { day: "Day 11", title: "Departure", plan: "Airport transfer and onward journey.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  },
  "12-day-premium-luxury-safari-beach-all-inclusive": {
    intro: "Flagship all-inclusive luxury journey across top safari parks and Zanzibar beach.",
    bestTime: "Year-round with seasonal migration windows.",
    pace: "Comfort-led premium pacing.",
    style: "All-inclusive private luxury route.",
    includes: ["Luxury camps/resorts", "Private guide and vehicle", "Domestic flights", "Park fees", "Most beverages"],
    excludes: ["International airfare", "Visa/insurance", "Premium imported spirits", "Tips"],
    notes: ["Best for honeymooners and milestone travel.", "Can include private charter upgrades."],
    itinerary: [
      { day: "Day 1", title: "Arrive Arusha", plan: "VIP welcome and luxury lodge orientation.", overnight: overnight("Arusha", "Four Points by Sheraton Arusha", "Arusha Serena Hotel", "Legendary Lodge Arusha") },
      { day: "Day 2", title: "Tarangire", plan: "Premium game drive and curated sundowner.", overnight: overnight("Tarangire", "Tarangire Safari Lodge", "Nimali Tarangire", "Chem Chem Lodge") },
      { day: "Day 3", title: "Ngorongoro transfer", plan: "Scenic highland route and lodge check-in.", overnight: overnight("Ngorongoro", "Rhino Lodge", "Ngorongoro Serena", "The Highlands") },
      { day: "Day 4", title: "Crater day", plan: "Full crater safari with curated picnic setup.", overnight: overnight("Ngorongoro", "Rhino Lodge", "Ngorongoro Serena", "The Highlands") },
      { day: "Day 5", title: "Serengeti fly-in", plan: "Light-aircraft transfer and evening drive.", overnight: overnight("Serengeti", "Lahia Tented Lodge", "Melia Serengeti Lodge", "Singita Sasakwa Lodge") },
      { day: "Day 6", title: "Serengeti full day", plan: "Private full-day wildlife tracking.", overnight: overnight("Serengeti", "Lahia Tented Lodge", "Melia Serengeti Lodge", "Singita Sasakwa Lodge") },
      { day: "Day 7", title: "Serengeti exclusive experiences", plan: "Flexible game drive with optional balloon add-on.", overnight: overnight("Serengeti", "Lahia Tented Lodge", "Melia Serengeti Lodge", "Singita Sasakwa Lodge") },
      { day: "Day 8", title: "Fly to Zanzibar", plan: "Transfer to beach resort and relax.", overnight: overnight("Zanzibar Luxury", "The Mora Zanzibar", "Zuri Zanzibar", "andBeyond Mnemba Island") },
      { day: "Day 9", title: "Beach leisure", plan: "Resort activities and private beach time.", overnight: overnight("Zanzibar", "Amaan Bungalows", "Zuri Zanzibar", "Xanadu Villas") },
      { day: "Day 10", title: "Stone Town and heritage", plan: "Guided heritage and spice route exploration.", overnight: overnight("Zanzibar", "Amaan Bungalows", "Zuri Zanzibar", "Xanadu Villas") },
      { day: "Day 11", title: "Final beach day", plan: "Wellness and ocean activities at leisure.", overnight: overnight("Zanzibar", "Amaan Bungalows", "Zuri Zanzibar", "Xanadu Villas") },
      { day: "Day 12", title: "Departure", plan: "Airport transfer for international onward flight.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  },
  "kilimanjaro-trek": {
    intro: "A professionally guided Kilimanjaro trekking itinerary with safety-first planning.",
    bestTime: "January–March and June–October.",
    pace: "Altitude-aware trekking pace.",
    style: "Guided mountain expedition with support crew.",
    includes: ["Mountain guide and support team", "Park fees", "Camping/refuge accommodation", "Meals on trek"],
    excludes: ["International flights", "Visa/insurance", "Tips for mountain crew", "Personal gear rental"],
    notes: ["Medical check and insurance strongly recommended.", "Acclimatization days improve summit success."],
    itinerary: [
      { day: "Day 1", title: "Arrival and gear check", plan: "Arrival in Moshi/Arusha and full expedition briefing.", overnight: overnight("Moshi", "Panama Garden Resort", "Chanya Lodge", "Kilimanjaro Wonders Hotel") },
      { day: "Day 2", title: "Trek day 1", plan: "Enter park and trek through montane forest to first camp.", overnight: overnight("Mountain Camp", "Public Campsite", "Premium Mountain Camp", "Private High-Altitude Camp") },
      { day: "Day 3", title: "Trek day 2", plan: "Ascend to moorland zone with acclimatization pace.", overnight: overnight("Mountain Camp", "Public Campsite", "Premium Mountain Camp", "Private High-Altitude Camp") },
      { day: "Day 4", title: "Trek day 3", plan: "Continue ascent with altitude monitoring and short acclimatization walk.", overnight: overnight("Mountain Camp", "Public Campsite", "Premium Mountain Camp", "Private High-Altitude Camp") },
      { day: "Day 5", title: "Trek day 4", plan: "Traverse to high camp and prepare for summit push.", overnight: overnight("High Camp", "Barafu/Kosovo Camp", "Premium High Camp", "Private Summit Camp") },
      { day: "Day 6", title: "Acclimatization day", plan: "Structured rest and acclimatization protocol.", overnight: overnight("High Camp", "Barafu/Kosovo Camp", "Premium High Camp", "Private Summit Camp") },
      { day: "Day 7", title: "Summit attempt", plan: "Midnight summit push, sunrise at Uhuru Peak, controlled descent.", overnight: overnight("Lower Camp", "Mweka Camp", "Premium Descend Camp", "Private Descend Camp") },
      { day: "Day 8", title: "Final descent", plan: "Descend through lower zones and exit park gate.", overnight: overnight("Moshi", "Panama Garden Resort", "Chanya Lodge", "Kilimanjaro Wonders Hotel") },
      { day: "Day 9", title: "Departure", plan: "Recovery morning and transfer to airport.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  },
  "zanzibar-escape": {
    intro: "A curated beach extension focused on culture, relaxation, and ocean activities.",
    bestTime: "June–October and December–February.",
    pace: "Leisure pace with optional excursions.",
    style: "Boutique/luxury beach stay.",
    includes: ["Airport/ferry transfers", "Accommodation", "Breakfast and selected meals", "Stone Town tour"],
    excludes: ["International flights", "Travel insurance", "Optional diving/snorkeling add-ons"],
    notes: ["Perfect as a post-safari decompression route."],
    itinerary: [
      { day: "Day 1", title: "Arrival Zanzibar", plan: "Transfer to beach resort and evening relaxation.", overnight: overnight("Zanzibar Beach", "Nungwi Dreams", "Zuri Zanzibar", "andBeyond Mnemba Island") },
      { day: "Day 2", title: "Stone Town heritage", plan: "Guided walking tour and historic spice market visit.", overnight: overnight("Zanzibar", "Amaan Bungalows", "Zuri Zanzibar", "Xanadu Villas") },
      { day: "Day 3", title: "Ocean leisure", plan: "Free day for reef trip, dhow cruise, or spa time.", overnight: overnight("Zanzibar", "Amaan Bungalows", "Zuri Zanzibar", "Xanadu Villas") },
      { day: "Day 4", title: "Spice farm + sunset", plan: "Half-day spice tour and sunset by the coast.", overnight: overnight("Zanzibar", "Amaan Bungalows", "Zuri Zanzibar", "Xanadu Villas") },
      { day: "Day 5", title: "Departure", plan: "Transfer to airport for onward travel.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  }
};



function lodgeImage(seed: string) {
  return `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=240&q=80`;
}

function overnight(area: string, silverName: string, goldName: string, platinumName: string): OvernightOptions {
  return {
    area,
    silver: { name: silverName, image: lodgeImage("photo-1566073771259-6a8506099945") },
    gold: { name: goldName, image: lodgeImage("photo-1578683010236-d716f9a3f461") },
    platinum: { name: platinumName, image: lodgeImage("photo-1582719478250-c89cae4dc85b") }
  };
}

function defaultDetail(title: string): SafariDetail {
  return {
    intro: `${title} is a curated private safari route balancing wildlife access, comfort, and efficient logistics.`,
    bestTime: "Depends on route focus; dry season generally offers strongest visibility.",
    pace: "Balanced pace with strategic game-drive windows.",
    style: "Private guided safari with flexible daily rhythm.",
    includes: ["Private safari vehicle", "Professional guide", "Accommodation and meals", "Park fees"],
    excludes: ["International flights", "Visa and travel insurance", "Tips and personal purchases"],
    notes: ["Can be customized with activities and beach extensions.", "Upgrade options available for lodges and transport."],
    itinerary: [
      { day: "Day 1", title: "Arrival and Briefing", plan: "Arrival support, transfer, and detailed safari orientation.", overnight: overnight("Arusha", "Four Points by Sheraton Arusha", "Arusha Serena Hotel", "Legendary Lodge Arusha") },
      { day: "Day 2", title: "First Game Drive", plan: "Transfer to park and afternoon game drive in high-probability wildlife zones.", overnight: overnight("Safari Region", "Midrange Safari Camp", "Premium Safari Camp", "Ultra-Luxury Safari Camp") },
      { day: "Day 3", title: "Full Safari Day", plan: "Sunrise and afternoon drives, flexible stops for photography and interpretation.", overnight: overnight("Safari Region", "Midrange Safari Camp", "Premium Safari Camp", "Ultra-Luxury Safari Camp") },
      { day: "Final Day", title: "Return Transfer", plan: "Final short drive and transfer to airport or city hotel.", overnight: overnight("Departure", "Day room (midrange)", "Day room (premium)", "Private lounge + transfer") }
    ]
  };
}



export function generateStaticParams() {
  return safariPackages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safari = safariPackages.find((s) => s.slug === slug);
  return createMetadata({ title: safari?.title ?? "Safari", path: `/safaris/${slug}` });
}

export default async function SafariDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safari = safariPackages.find((s) => s.slug === slug);
  if (!safari) notFound();

  const detail = safariDetails[slug] ?? defaultDetail(safari.title);

  return (
    <section className="pb-24 pt-36">
      <div className="container-luxury max-w-6xl">
        <p className="font-semibold uppercase tracking-[.25em] text-gold">Detailed Itinerary</p>
        <h1 className="mt-3 font-heading text-5xl font-bold text-forest">{safari.title}</h1>
        <p className="mt-3 text-charcoal/70">{safari.duration} · {safari.price} · {safari.destination}</p>

        <div className="relative mt-8 h-[480px] overflow-hidden rounded-3xl">
          <Image src={safari.image} alt={safari.title} fill className="object-cover" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <article className="rounded-3xl bg-white p-6 shadow">
            <h2 className="font-heading text-2xl font-bold text-forest">Safari Overview</h2>
            <p className="mt-3 text-charcoal/70">{detail.intro}</p>
            <p className="mt-4 text-charcoal/70">{safari.summary}</p>
            <ul className="mt-4 list-disc pl-6 text-charcoal/70">{safari.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          </article>
          <article className="rounded-3xl bg-sand p-6">
            <p className="flex items-center gap-2 text-sm text-charcoal/70"><MapPinned className="h-4 w-4 text-gold" />Best timing: {detail.bestTime}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-charcoal/70"><Sparkles className="h-4 w-4 text-gold" />Style: {detail.style}</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-charcoal/70"><ShieldCheck className="h-4 w-4 text-gold" />Pace: {detail.pace}</p>
          </article>
        </div>

        <article className="mt-8 rounded-3xl bg-white p-6 shadow">
          <h2 className="font-heading text-3xl font-bold text-forest">Day-by-Day Itinerary</h2>
          <div className="mt-6 space-y-4">
            {detail.itinerary.map((entry) => (
              <div key={entry.day} className="rounded-2xl border border-charcoal/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[.15em] text-gold">{entry.day}</p>
                <h3 className="mt-1 font-heading text-2xl font-bold text-forest">{entry.title}</h3>
                <p className="mt-2 text-charcoal/70">{entry.plan}</p>
                <p className="mt-2 text-sm text-charcoal/60">Overnight area: {entry.overnight.area}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {(["silver", "gold", "platinum"] as const).map((tier) => (
                    <div key={tier} className="rounded-2xl border border-charcoal/10 bg-white p-3 text-center">
                      <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">{tier}</p>
                      <div className="mx-auto mt-2 h-20 w-20 overflow-hidden rounded-full border-2 border-sand">
                        <Image src={entry.overnight[tier].image} alt={entry.overnight[tier].name} width={80} height={80} className="h-full w-full object-cover" />
                      </div>
                      <p className="mt-2 text-xs leading-5 text-charcoal/70">{entry.overnight[tier].name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl bg-white p-6 shadow">
            <h2 className="font-heading text-2xl font-bold text-forest">Inclusions</h2>
            <ul className="mt-4 space-y-2 text-charcoal/70">{detail.includes.map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-forest" />{item}</li>)}</ul>
          </article>
          <article className="rounded-3xl bg-white p-6 shadow">
            <h2 className="font-heading text-2xl font-bold text-forest">Exclusions</h2>
            <ul className="mt-4 space-y-2 text-charcoal/70">{detail.excludes.map((item) => <li key={item} className="flex gap-2"><CircleX className="mt-0.5 h-4 w-4 text-gold" />{item}</li>)}</ul>
          </article>
        </div>

        <article className="mt-8 rounded-3xl bg-sand p-6">
          <h2 className="font-heading text-2xl font-bold text-forest">Important Notes</h2>
          <ul className="mt-4 list-disc pl-6 text-charcoal/75">{detail.notes.map((note) => <li key={note}>{note}</li>)}</ul>
        </article>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`/booking?package=${safari.slug}`} className="inline-flex rounded-full bg-forest px-7 py-3 font-semibold text-white">Book this safari</Link>
          <Link href="/contact" className="inline-flex rounded-full border border-forest px-7 py-3 font-semibold text-forest">Talk to a safari specialist</Link>
        </div>
      </div>
    </section>
  );
}
