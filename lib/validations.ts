import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please include a reachable phone or WhatsApp number."),
  safariPackage: z.string().min(2, "Choose a safari package."),
  travelDate: z.string().min(1, "Choose your preferred travel date."),
  travelers: z.coerce.number().min(1).max(30),
  budget: z.string().min(2, "Select a budget range."),
  message: z.string().min(10, "Tell us a little about your dream safari.").max(1000)
});

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(3, "Please enter a subject."),
  message: z.string().min(10, "Please enter at least 10 characters.").max(1000)
});

export type BookingInput = z.infer<typeof bookingSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
