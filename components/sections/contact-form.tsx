"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { contactSchema, type ContactInput } from "@/lib/validations";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactInput) {
    setStatus(null);
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    if (!response.ok) {
      setStatus("Message failed. Please try again or email reservations@greatroarsafaris.com.");
      return;
    }
    reset();
    setStatus("Message received. We will respond shortly.");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[2rem] bg-white p-6 shadow-2xl shadow-charcoal/10 md:p-8">
      <Field label="Full name" error={errors.name?.message}><Input {...register("name")} autoComplete="name" /></Field>
      <Field label="Email" error={errors.email?.message}><Input {...register("email")} type="email" autoComplete="email" /></Field>
      <Field label="Subject" error={errors.subject?.message}><Input {...register("subject")} /></Field>
      <Field label="Message" error={errors.message?.message}><Textarea {...register("message")} /></Field>
      <Button disabled={isSubmitting} size="lg" className="w-full">{isSubmitting ? "Sending..." : "Send message"}</Button>
      {status ? <p className="text-center text-sm text-forest" role="status">{status}</p> : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return <label><span className="mb-2 block text-sm font-semibold">{label}</span>{children}{error ? <span className="mt-1 block text-sm text-red-600">{error}</span> : null}</label>;
}
