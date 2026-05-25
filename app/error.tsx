"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <div className="grid min-h-screen place-items-center bg-sand px-4 text-center"><div><h1 className="font-heading text-5xl font-bold text-forest">Something went off trail.</h1><p className="mt-4 text-charcoal/70">Please try again or contact our reservations team.</p><Button onClick={reset} className="mt-6">Try again</Button></div></div>;
}
