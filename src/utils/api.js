export async function fetchCharacters({ page = 1, name = "" }) {
    const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`;
    
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Failed to fetch characters");
    }

    const data = await res.json();
    return data;
  }