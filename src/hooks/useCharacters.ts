import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/characters";
import type { CharactersResponse } from "../schemas/characters-response.schema";

export function useCharacters(page = 1) {
    const [data, setData] = useState<CharactersResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      let isMounted = true;
  
      async function loadCharacters() {
        setIsLoading(true);
        setError(null);
  
        try {
          const response = await fetchCharacters(page);
  
          if (isMounted) {
            setData(response);
          }
        } catch (err) {
          if (isMounted) {
            setError(
              err instanceof Error ? err.message : "Something went wrong"
            );
          }
        } finally {
          if (isMounted) {
            setIsLoading(false);
          }
        }
      }
  
      loadCharacters();
  
      return () => {
        isMounted = false;
      };
    }, [page]);
  
    return { data, isLoading, error };
  }
  