import React from "react";

const Button = ({ onClick, text, correct }) => {
  let answer = "";

  if (
    (text === "Higher" && correct === 1) ||
    (text === "Lower" && correct === 0)
  ) {
    answer = "Right";
  } else if (correct === 2) {
    answer = "Tie";
  } else {
    answer = "Wrong";
  }

  return (
    <button
      className="answerButton"
      onClick={() => {
        onClick(answer);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
