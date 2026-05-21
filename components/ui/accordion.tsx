"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
      {items.map((item, index) => (
        <AccordionPrimitive.Item key={item.question} value={`item-${index}`} className="rounded-3xl border border-charcoal/10 bg-white px-6 shadow-sm">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-heading text-xl font-semibold focus-ring">
              {item.question}
              <ChevronDown className="h-5 w-5 shrink-0 transition group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden pb-5 text-charcoal/70 data-[state=closed]:animate-none">
            {item.answer}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
