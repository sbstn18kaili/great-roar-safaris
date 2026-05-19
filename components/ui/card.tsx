import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-3xl border border-charcoal/10 bg-white shadow-xl shadow-charcoal/5", className)} {...props} />;
}
