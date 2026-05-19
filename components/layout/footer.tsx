import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-luxury grid gap-10 py-16 md:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
        <div>
          <h2 className="font-heading text-3xl font-bold">{siteConfig.name}</h2>
          <p className="mt-4 max-w-sm text-white/70">Luxury, conservation-minded safari design from the Ngorongoro Conservation Area to Tanzania’s wildest horizons.</p>
          <div className="mt-6 flex gap-3">
            <Link aria-label="Instagram" href={siteConfig.socials.instagram} className="rounded-full bg-white/10 p-3 hover:bg-gold"><Instagram className="h-5 w-5" /></Link>
            <Link aria-label="Facebook" href={siteConfig.socials.facebook} className="rounded-full bg-white/10 p-3 hover:bg-gold"><Facebook className="h-5 w-5" /></Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Explore</h3>
          <ul className="mt-4 space-y-3 text-white/70">
            {["About", "Safaris", "Destinations", "Gallery", "Blog"].map((item) => <li key={item}><Link href={`/${item.toLowerCase()}`} className="hover:text-white">{item}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Legal</h3>
          <ul className="mt-4 space-y-3 text-white/70">
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gold">Newsletter</h3>
          <p className="mt-4 text-sm text-white/70">Seasonal safari openings, wildlife calendars, and luxury lodge offers.</p>
          <form className="mt-4 flex gap-2">
            <Input type="email" placeholder="Email address" aria-label="Email address" className="bg-white/10 text-white placeholder:text-white/50" />
            <Button size="sm" aria-label="Subscribe"><Send className="h-4 w-4" /></Button>
          </form>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <p className="flex gap-2"><MapPin className="h-4 w-4 text-gold" />{siteConfig.location}</p>
            <p className="flex gap-2"><Phone className="h-4 w-4 text-gold" />{siteConfig.phone}</p>
            <p className="flex gap-2"><Mail className="h-4 w-4 text-gold" />{siteConfig.email}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-white/55">© {new Date().getFullYear()} Great Roar Safaris. All rights reserved.</div>
    </footer>
  );
}
