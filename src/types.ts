
import { z } from "zod";

// Basic user form schema
export const userFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  age: z
    .string()
    .refine((v) => /^\d+$/.test(v), "Age must be a number")
    .transform((v) => Number(v))
    .refine((n) => n >= 13 && n <= 120, "Age must be between 13 and 120"),
  acceptTos: z.boolean().refine((val) => val === true, { message: "You must accept TOS" }),
});

// Type inferred from schema for both examples
export type UserFormInput = z.infer<typeof userFormSchema>;

// For FieldArray example (addresses)
export const addressSchema = z.object({
  line1: z.string().min(3, "Address line1 is required"),
  city: z.string().min(2, "City is required"),
  zip: z.string().regex(/^\d{5}$/, "ZIP must be 5 digits"),
});

export const userWithAddressesSchema = userFormSchema.extend({
  addresses: z.array(addressSchema).min(1, "At least one address"),
});

export type AddressInput = z.infer<typeof addressSchema>;
export type UserWithAddressesInput = z.infer<typeof userWithAddressesSchema>;