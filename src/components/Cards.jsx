/* eslint-disable react/prop-types */
import '/src/styles/Cards.css';

function Card({ pokemon, onClick, rotation }) {
  return (
    <div
      className={`card tile-background ${rotation ? 'rotate' : ''}`}
      onClick={onClick}
    >
      <img src={pokemon.imageUrl} alt={pokemon.id} />
    </div>
  );
}

export default function CardContainer({ pokemon, handleClick, rotation }) {
  if (pokemon.length === 0) {
    return (
      <div className="loading">
        <h1>Loading...</h1>;
      </div>
    );
  }

  return (
    <div className={`card-container ${rotation ? 'rotate' : ''}`}>
      {pokemon.map((pokemon) => {
        return (
          <Card
            onClick={() => handleClick(pokemon)}
            key={pokemon.id}
            pokemon={pokemon}
            rotation={rotation}
          />
        );
      })}
    </div>
  );
}
