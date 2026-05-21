import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("h-12 w-full rounded-2xl border border-charcoal/15 bg-white px-4 text-sm focus-ring", className)} {...props} />;
}

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("min-h-32 w-full rounded-2xl border border-charcoal/15 bg-white px-4 py-3 text-sm focus-ring", className)} {...props} />;
}

export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn("h-12 w-full rounded-2xl border border-charcoal/15 bg-white px-4 text-sm focus-ring", className)} {...props}>{children}</select>;
}
