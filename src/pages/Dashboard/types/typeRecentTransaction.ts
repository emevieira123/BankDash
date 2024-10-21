import { z } from "zod";

export const typeRecentTransaction = z.object({
  tipe: z.number(),
  description: z.string(),
  dateTransaction: z.string(),
  amount: z.number().or(z.string()),
  currency: z.string().optional(),
  color: z.string(),
});

export type TypeRecentTransaction = z.infer<typeof typeRecentTransaction>;
