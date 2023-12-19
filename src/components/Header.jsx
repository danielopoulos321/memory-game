/* eslint-disable react/prop-types */
import '/src/styles/Header.css';

export default function Header({ score, highScore }) {
  return (
    <header>
      <h1 className="logo tile-background">Memory Game</h1>
      <div className="scores tile-background">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </header>
  );
}
