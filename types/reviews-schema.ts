import { z } from "zod";

export const reviewSchema = z.object({
  productID: z.number(),
  rating: z
    .number()
    .int()
    .min(1, { message: "Please add at least one star" })
    .max(5, { message: "Please add no more than five stars" }),
  comment: z
    .string()
    .min(10, { message: "Please add a comment with at least 10 characters" }),
});
