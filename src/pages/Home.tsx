import { useCharacters } from "../hooks/useCharacters";

export default function Home() {
  const { data, isLoading, error } = useCharacters(1);

  if (isLoading) {
    return <p>Loading characters…</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>Characters</h1>

      <ul>
        {data.results.map((character) => (
          <li key={character.id}>
            {character.name} — {character.status}
          </li>
        ))}
      </ul>
    </div>
  );
}


