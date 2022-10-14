import React from "react";
import cardBack from "../images/card-back-2.jpg";

const LeftCard = ({ leftCardImg, cardSide }) => {
  return (
    <div>
      <div>
        {cardSide ? (
          <img src={leftCardImg} alt="Card Front"></img>
        ) : (
          <img src={cardBack} alt="Card Back"></img>
        )}
      </div>
    </div>
  );
};

export default LeftCard;

// console.log(data.cards[0].image);
// console.log(data.cards[0].value)
