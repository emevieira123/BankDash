import { z } from "zod";

export const typeQuickTransfer = z.object({
  contactId: z.string(),
  contactName: z.string(),
  jobPosition: z.string(),
  avatarImg: z.string().nullable().optional(),
});

export type TypeQuickTransfer = z.infer<typeof typeQuickTransfer>;
