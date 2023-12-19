import './styles/GameMaster.css';
import { useState, useEffect } from 'react';
import { fetchData } from './helperFunctions';

export default function GameMaster() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchData(setPokemon);
  }, []);
}

//Current Score + Best Score as states in Game Master
//Onload random assortment of Pokemon objects stored in state

//Generate random number 1/100 chance of pulling shiny image

//  Images get mapped to Card components
//      Each card click adds that object to a clicked state array
//          Master Pokemon array state is randomized
//          Trigger-rerendering

//FILE STRUCTURE
//GameMaster
//COMPONENTS
//Card
//Score
