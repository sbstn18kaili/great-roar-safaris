"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input, Select, Textarea } from "@/components/ui/input";
import { bookingSchema, type BookingInput } from "@/lib/validations";
import { safariPackages } from "@/lib/data";

export function BookingForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { safariPackage: searchParams.get("package") ?? "", travelers: 2 }
  });

  async function onSubmit(values: BookingInput) {
    setStatus(null);
    const response = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    if (!response.ok) {
      setStatus("We could not send your inquiry. Please try again or WhatsApp us directly.");
      return;
    }
    reset();
    setStatus("Thank you. Our safari designers will reply within 24 hours.");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-[2rem] bg-white p-6 shadow-2xl shadow-charcoal/10 md:grid-cols-2 md:p-8">
      <Field label="Full name" error={errors.name?.message}><Input {...register("name")} autoComplete="name" /></Field>
      <Field label="Email" error={errors.email?.message}><Input {...register("email")} type="email" autoComplete="email" /></Field>
      <Field label="Phone / WhatsApp" error={errors.phone?.message}><Input {...register("phone")} autoComplete="tel" /></Field>
      <Field label="Preferred date" error={errors.travelDate?.message}><Input {...register("travelDate")} type="date" /></Field>
      <Field label="Safari package" error={errors.safariPackage?.message}>
        <Select {...register("safariPackage")}><option value="">Select a package</option>{safariPackages.map((pkg) => <option key={pkg.slug} value={pkg.slug}>{pkg.title}</option>)}</Select>
      </Field>
      <Field label="Travelers" error={errors.travelers?.message}><Input {...register("travelers", { valueAsNumber: true })} type="number" min={1} max={30} /></Field>
      <Field label="Budget range" error={errors.budget?.message}>
        <Select {...register("budget")}><option value="">Select budget</option><option>$1,500–$3,000 per person</option><option>$3,000–$5,000 per person</option><option>$5,000–$8,000 per person</option><option>$8,000+ per person</option></Select>
      </Field>
      <Field className="md:col-span-2" label="Your dream safari" error={errors.message?.message}><Textarea {...register("message")} placeholder="Tell us about preferred parks, lodge style, special occasions, or must-see wildlife." /></Field>
      <div className="md:col-span-2"><Button disabled={isSubmitting} size="lg" className="w-full">{isSubmitting ? "Sending..." : "Send booking inquiry"}</Button>{status ? <p className="mt-4 text-center text-sm text-forest" role="status">{status}</p> : null}</div>
    </form>
  );
}

function Field({ label, error, children, className }: { label: string; error?: string; children: ReactNode; className?: string }) {
  return <label className={className}><span className="mb-2 block text-sm font-semibold text-charcoal">{label}</span>{children}{error ? <span className="mt-1 block text-sm text-red-600">{error}</span> : null}</label>;
}
