import { z } from "zod";

export const contactSchema = z.object({
  phone: z.string().trim().min(7, "Please enter a valid phone number"),
  email: z.email("Please enter a valid email address"),
  message: z
    .string()
    .trim()
    .max(1000, "Message is too long (max 1000 characters)"),
  includeQuote: z.boolean(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
