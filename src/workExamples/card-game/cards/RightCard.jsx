import React from "react";
import cardBack from "../images/card-back-2.jpg";

const RightCard = ({ rightCardImg, cardSide }) => {
  return (
    <div>
      <div>
        {cardSide ? (
          <img src={cardBack} alt="Card Back"></img>
        ) : (
          <img src={rightCardImg} alt="Card Front"></img>
        )}
      </div>
    </div>
  );
};

export default RightCard;

// console.log(data.cards[0].image);
// console.log(data.cards[0].value)
