/* eslint-disable react/prop-types */
import '/src/styles/Header.css';

export default function Header({ score, highScore }) {
  return (
    <header>
      <h1>Memory-Game</h1>
      <div className="scores">
        <div>Score: {score}</div>
        <div>High Score: {highScore}</div>
      </div>
    </header>
  );
}
