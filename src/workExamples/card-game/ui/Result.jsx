import { useState, useEffect } from "react";
import React from "react";

const Result = ({ result }) => {
  const [message, setMessage] = useState("Waiting for guess...");

  useEffect(() => {
    if (result === undefined) {
      setMessage("Waiting for first guess...");
    } else if (result === "Right") {
      setMessage("Guess was correct!");
    } else if (result === "Wrong") {
      setMessage(
        "Guess was wrong. Please wait a moment for the game to reset."
      );
      setTimeout(() => {
        setMessage("Game has reset. Waiting for next guess...");
      }, 2100);
    } else {
      setMessage("Guess was a tie. I will show mercy and count this as a win.");
    }
  }, [result]);

  return (
    <div id="result" className={result}>
      {message}
    </div>
  );
};

export default Result;
