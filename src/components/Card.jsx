/* eslint-disable react/prop-types */
import '/src/styles/Card.css';

export default function Card({ pokemon, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={pokemon.imageUrl} alt={pokemon.id} />
    </div>
  );
}
