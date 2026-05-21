import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      aria-label="Chat with Great Roar Safaris on WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition hover:scale-105 focus-ring"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
