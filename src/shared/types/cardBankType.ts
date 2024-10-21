import { z } from "zod";

export const cardBank = z.object({
  balanceValue: z.string().or(z.number()),
  cardValidad: z.string(),
  cardHolder: z.string(),
  cardNumber: z.string(),
});

export type CardBankType = z.infer<typeof cardBank>;
