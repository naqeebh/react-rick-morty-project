import { z } from "zod";
import { CharacterSchema } from "./character.schema"

const PageInfoSchema = z.object({
    count: z.number(),
    pages: z.number(),
    next: z.string().url().nullable(),
    prev: z.string().url().nullable(),
  });
  
  export const CharactersResponseSchema = z.object({
    info: PageInfoSchema,
    results: z.array(CharacterSchema),
  });
  
  export type CharactersResponse = z.infer<
  typeof CharactersResponseSchema
>;
