import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gold text-charcoal shadow-lg shadow-gold/20 hover:bg-[#d8aa4f]",
        forest: "bg-forest text-white hover:bg-[#173a2c]",
        outline: "border border-white/60 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-charcoal",
        ghost: "text-charcoal hover:bg-forest/10"
      },
      size: { default: "h-11 px-6", lg: "h-13 px-8 text-base", sm: "h-9 px-4" }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
