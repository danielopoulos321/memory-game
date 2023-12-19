/* eslint-disable react/prop-types */
import '/src/styles/Header.css';

export default function Header({ score, highScore }) {
  return (
    <header>
      <img className="logo" src="src/assets/logo.png" alt="memory-game" />
      <div className="scores tile-background">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </header>
  );
}
