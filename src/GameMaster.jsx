import './styles/GameMaster.css';
import { useState, useEffect } from 'react';
import { fetchData, arrayRandomizer } from './helperFunctions';
import CardContainer from './components/Cards';
import Header from './components/Header';
import Modal from './components/Modal';

export default function GameMaster() {
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [shouldShuffle, setShouldShuffle] = useState(false);
  const [shouldRestart, setShouldRestart] = useState(false);

  const handleClick = (clickedPokemon) => {
    const validClick = pokemon.some(
      (pokemon) => pokemon.id == clickedPokemon.id && pokemon.clicked == false,
    );
    if (validClick) {
      setScore(score + 1);
    } else {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setDialogOpen(true);
    }

    setPokemon((prevPokemon) =>
      prevPokemon.map((p) =>
        p.id === clickedPokemon.id ? { ...p, clicked: true } : p,
      ),
    );
    setShouldShuffle(true);
  };

  useEffect(() => {
    if (shouldShuffle) {
      setPokemon((prevPokemon) => arrayRandomizer(prevPokemon));
      setShouldShuffle(false);
    }
  }, [shouldShuffle]);

  useEffect(() => {
    setPokemon([]);
    fetchData(setPokemon);
    setShouldRestart(false);
  }, [shouldRestart]);

  return (
    <>
      <Header score={score} highScore={highScore} />
      <CardContainer pokemon={pokemon} handleClick={handleClick} />
      <Modal
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
        setShouldRestart={setShouldRestart}
      />
    </>
  );
}
