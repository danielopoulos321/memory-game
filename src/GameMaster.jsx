import './styles/GameMaster.css';
import { useState, useEffect } from 'react';
import { fetchData, arrayRandomizer } from './helperFunctions';
import Card from './components/Card';

export default function GameMaster() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchData(setPokemon);
  }, []);

  const handleClick = () => {
    setPokemon(arrayRandomizer(pokemon));
  };

  return (
    <>
      {pokemon.map((pokemon) => {
        return (
          <Card onClick={handleClick} key={pokemon.id} pokemon={pokemon} />
        );
      })}
    </>
  );
}

//Current Score + Best Score as states in Game Master
//  Passed to header to update

//Generate random number 1/100 chance of pulling shiny image

//  Images get mapped to Card components
//      Each card click adds that object to a clicked state array
//          Master Pokemon array state is randomized
//          Trigger-rerendering

//FILE STRUCTURE
//GameMaster
//COMPONENTS
//Card
//Header(with Score)
