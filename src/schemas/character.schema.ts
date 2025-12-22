import { z } from "zod";

export const CharactersScheme = z.object({
    id: z.number(),
    name: z.string(),
    status: z.enum(["Alive", "Dead", "unknown"]),
    species: z.string(),
    gender: z.enum(["Male", "Female", "Genderless", "unknown"]),
    image: z.string().url(),
});

export type Character = z.infer<typeof CharactersSchema>;