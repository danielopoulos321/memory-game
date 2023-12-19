/* eslint-disable react/prop-types */
import '/src/styles/Cards.css';

function Card({ pokemon, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={pokemon.imageUrl} alt={pokemon.id} />
    </div>
  );
}

export default function CardContainer({ pokemon, handleClick }) {
  if (pokemon.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      {pokemon.map((pokemon) => {
        return (
          <Card
            onClick={() => handleClick(pokemon)}
            key={pokemon.id}
            pokemon={pokemon}
          />
        );
      })}
    </div>
  );
}
