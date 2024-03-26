import * as z from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(5).max(100),
});

export type ContactShemaType = z.infer<typeof ContactSchema>;
