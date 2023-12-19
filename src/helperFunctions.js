function randomSet(length) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < length) {
    const randomNumber = Math.floor(Math.random() * 150);
    if (randomNumber === 0) {
      continue;
    }
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers);
}

function shinyCheck() {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber == 44 ? true : false;
}

export async function fetchData(setPokemon) {
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const randomPokemon = randomSet(12);
  try {
    const pokemonData = await Promise.all(
      randomPokemon.map(async (pokemonNumber) => {
        const response = await fetch(`${api}${pokemonNumber}`);
        const data = await response.json();
        const imageUrl = shinyCheck()
          ? data.sprites?.other?.['official-artwork']?.['front_shiny']
          : data.sprites?.other?.['official-artwork']?.['front_default'];

        return { id: pokemonNumber, imageUrl, clicked: false };
      }),
    );

    setPokemon(pokemonData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export function arrayRandomizer(originalArray) {
  const newArray = [...originalArray];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}
