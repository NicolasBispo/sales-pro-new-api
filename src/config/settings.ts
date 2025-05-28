import { z } from 'zod';

const settingsSchema = z.object({
  jwt: z.object({
    secret: z.string().min(1, 'JWT_SECRET is required'),
    expiresIn: z.string().default('1h'),
  }),
});

export const settings = settingsSchema.parse({
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: '1h',
  },
});

// Export the type for use in other files
export type Settings = z.infer<typeof settingsSchema>;