import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters'),
  
    age: z
    .number()
    .int()
    .min(18, 'Must be at least 18 years old')
    .max(120, 'Age must be realistic'),  
  
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[+]?[\d\s-()]+$/, 'Invalid phone number format'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format'),
  
  address: z
    .string()
    .min(1, 'Address is required')
    .min(5, 'Address must be at least 5 characters'),
  
  city: z
    .string()
    .min(1, 'City is required')
    .min(2, 'City must be at least 2 characters'),
  
  zipCode: z
    .string()
    .min(1, 'Zip code is required')
    .regex(/^\d{5}(-\d{4})?$/, 'Invalid zip code format'),
  
  country: z
    .string()
    .min(1, 'Country is required'),
  
  occupation: z
    .string()
    .min(1, 'Occupation is required'),
  
  company: z
    .string()
    .optional(),
  
  website: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message: 'Invalid URL format'
    }),
  
  bio: z
    .string()
    .optional()
    .refine((val) => !val || val.length <= 500, {
      message: 'Bio must be less than 500 characters'
    }),
});