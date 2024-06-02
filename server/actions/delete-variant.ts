"use server";

import { createSafeActionClient } from "next-safe-action";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { productVariants } from "../schema";
import { db } from "..";
import { eq } from "drizzle-orm";
import algoliaSearch from "algoliasearch";

const action = createSafeActionClient();

const client = algoliaSearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID!,
  process.env.ALGOLIA_ADMIN!
);

const algoliaIndex = client.initIndex("products");

export const deleteVariant = action(
  z.object({
    id: z.number(),
  }),
  async ({ id }) => {
    try {
      const deletedVariant = await db
        .delete(productVariants)
        .where(eq(productVariants.id, id))
        .returning();
      revalidatePath("/dashboard/products");
      algoliaIndex.deleteObject(deletedVariant[0].id.toString());
      return { success: `Deleted ${deletedVariant[0].productType}` };
    } catch (error) {
      return { error: "Failed to delete variant" };
    }
  }
);
