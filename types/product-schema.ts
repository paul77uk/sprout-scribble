import { desc } from "drizzle-orm";
import { optional, z } from "zod";

export const ProductSchema = z.object({
  id: z.number().optional(),
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  description: z
    .string()
    .min(40, { message: "Description must be at least 40 characters" }),
  price: z.coerce
    .number({ invalid_type_error: "Price must be a number" })
    .min(0, { message: "Price must be a positive number" }),
});

export type zProductSchema = z.infer<typeof ProductSchema>;