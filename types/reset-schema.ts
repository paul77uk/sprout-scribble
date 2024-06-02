import { revalidatePath } from "next/cache";
import { z } from "zod";

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});
