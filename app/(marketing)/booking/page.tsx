import { Suspense } from "react";
import { BookingForm } from "@/components/sections/booking-form";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({ title: "Booking Inquiry", path: "/booking" });
export default function BookingPage() { return <section className="bg-sand pb-24 pt-40"><div className="container-luxury grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="font-bold uppercase tracking-[.3em] text-gold">Booking system</p><h1 className="mt-4 font-heading text-5xl font-bold text-forest md:text-6xl">Design your private safari.</h1><p className="mt-6 leading-8 text-charcoal/70">Share your preferred dates, travelers, budget, and travel style. The inquiry is validated, ready for Supabase storage, and configured for Resend or SMTP notifications.</p></div><Suspense fallback={<div className="rounded-[2rem] bg-white p-8">Loading booking form...</div>}><BookingForm /></Suspense></div></section>; }
