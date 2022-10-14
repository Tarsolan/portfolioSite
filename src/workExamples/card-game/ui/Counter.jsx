import React from "react";

const Counter = ({ counter, highScore }) => {
  return (
    <header id="game-menu">
      <div className="score">
        Correct Cards Drawn:<span id="counter"> {counter}</span>
      </div>
      <div className="score">
        High Score:<span id="counter"> {highScore}</span>
      </div>
    </header>
  );
};

export default Counter;
