import { CharactersResponseSchema } from "../schemas/characters-response.schema";
import type { CharactersResponse } from "../schemas/characters-response.schema";

const BASE_URL = "https://rickandmortyapi.com/api";

export async function fetchCharacters(
  page = 1
): Promise<CharactersResponse> {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch characters (status ${response.status})`);
  }

  const json: unknown = await response.json();

  const parsed = CharactersResponseSchema.safeParse(json);

  if (!parsed.success) {
    // Helpful during development: see exactly what didn't match
    console.error("Zod validation error:", parsed.error.flatten());
    throw new Error("Invalid characters API response");
  }

  return parsed.data;
}
