import './styles/GameMaster.css';
import { useState, useEffect } from 'react';
import { fetchData, arrayRandomizer } from './helperFunctions';
import Card from './components/Card';

export default function GameMaster() {
  const [pokemon, setPokemon] = useState([]);
  const [shouldShuffle, setShouldShuffle] = useState(false);

  const handleClick = (clickedPokemon) => {
    setPokemon((prevPokemon) =>
      prevPokemon.map((p) =>
        p.id === clickedPokemon.id ? { ...p, clicked: true } : p,
      ),
    );
    console.log(clickedPokemon.id);
    setShouldShuffle(true);
  };

  useEffect(() => {
    if (shouldShuffle) {
      setPokemon((prevPokemon) => arrayRandomizer(prevPokemon));
      setShouldShuffle(false);
    }
  }, [shouldShuffle]);

  useEffect(() => {
    fetchData(setPokemon);
  }, []);

  return (
    <>
      {pokemon.map((pokemon) => {
        return (
          <Card
            onClick={() => handleClick(pokemon)}
            key={pokemon.id}
            pokemon={pokemon}
          />
        );
      })}
    </>
  );
}

//Current Score + Best Score as states in Game Master
//  Passed to header to update

//FILE STRUCTURE
//GameMaster
//COMPONENTS
//Card
//Header(with Score)
