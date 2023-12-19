function randomSet(length) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < length) {
    const randomNumber = Math.floor(Math.random() * 1000);
    if (randomNumber === 0) {
      continue;
    }
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers);
}

export async function fetchData(setPokemon) {
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const randomPokemon = randomSet(12);
  try {
    const pokemonData = await Promise.all(
      randomPokemon.map(async (pokemonNumber) => {
        const response = await fetch(`${api}${pokemonNumber}`);
        const data = await response.json();
        const imageUrl =
          data.sprites?.other?.['official-artwork']?.['front_default'];

        return { imageUrl, clicked: false };
      }),
    );

    setPokemon(pokemonData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
