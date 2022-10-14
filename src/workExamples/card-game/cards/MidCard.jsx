import Button from "../ui/Button";

const MidCard = ({
  leftCardValue,
  rightCardValue,
  drawLeft,
  drawRight,
  cardSide,
}) => {
  let guessHigh = true;
  let drawCard = "";

  if (cardSide) {
    drawCard = drawLeft;
    if (rightCardValue > leftCardValue) {
      guessHigh = 1;
    } else if (rightCardValue === leftCardValue) {
      guessHigh = 2;
    } else {
      guessHigh = 0;
    }
  } else {
    drawCard = drawRight;
    if (leftCardValue > rightCardValue) {
      guessHigh = 1;
    } else if (rightCardValue === leftCardValue) {
      guessHigh = 2;
    } else {
      guessHigh = 0;
    }
  }

  return (
    <div className="gameMiddle">
      <div className="button">
        <Button
          text="Higher"
          onClick={(answer) => {
            drawCard(answer);
          }}
          correct={guessHigh}
        />
      </div>
      {/* <div id="debug">
        <div>Debugging Info:</div>
        <div>{guessHigh}</div>
        <div>Left Card: {leftCardValue}</div>
        <div>Right Card: {rightCardValue}</div>
      </div> */}
      <div className="button">
        <Button
          text="Lower"
          onClick={(answer) => {
            drawCard(answer);
          }}
          correct={guessHigh}
        />
      </div>
    </div>
  );
};

export default MidCard;

// Styles
