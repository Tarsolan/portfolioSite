import React from "react";
import LeftCard from "./cards/LeftCard";
import MidCard from "./cards/MidCard";
import RightCard from "./cards/RightCard";
import { useState, useEffect } from "react";
import Counter from "./ui/Counter";
import "./game.css";
import useLocalStorage from "use-local-storage";
import { successToast, errorToast, infoToast } from "./ui/toast";

const Game = () => {
  const [DeckID, setDeckID] = useState();

  const [leftCardValue, setLeftCardValue] = useState();
  const [leftCardImg, setLeftCardImg] = useState();

  const [rightCardValue, setRightCardValue] = useState();
  const [rightCardImg, setRightCardImg] = useState();

  const [cardSide, setCardSide] = useState(false);
  // const [display, setDisplay] = useState();

  const [counter, setCounter] = useState(0);
  const [highScore, setHighScore] = useLocalStorage("highScore");

  // Saves high score to local storage
  useEffect(() => {
    localStorage.setItem("highScore", JSON.stringify(highScore));
  }, [highScore]);

  // Create Deck of Cards
  const createGame = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log("deck info:");
    // console.log(data);
    return data;
  };

  // Initial setup - gets a deck and the first two cards
  const getDeck = async () => {
    const deckIDFromDeck = await createGame(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    setDeckID(deckIDFromDeck.deck_id);

    // Get Initial Cards
    getLeftCard(deckIDFromDeck.deck_id);
    getRightCard(deckIDFromDeck.deck_id);
  };

  // Runs after an incorrect guess - resets the game
  const resetDeck = async () => {
    const deckIDFromDeck = await createGame(
      `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`
    );
    setDeckID(deckIDFromDeck.deck_id);
  };

  // Loads the deck with a unique ID, sets that ID to be passed to each card
  useEffect(() => {
    getDeck();
    try {
      var highScores = JSON.parse(localStorage.getItem("highScore"));
    } catch (error) {
      highScores = 0;
    }

    if (highScores !== undefined) {
      setHighScore(highScores);
    } else {
      setHighScore(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Draw card
  const drawLeftCard = async (deck_id) => {
    const res = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    );
    const data = await res.json();
    // console.log("left card:");
    // console.log(data);
    return data;
  };

  // Assign Card
  const getLeftCard = async (deck_id) => {
    const card = await drawLeftCard(deck_id);
    setLeftCardImg(card.cards[0].image);
    cardValue(card.cards[0].value, "left");
    setCardSide(!cardSide);
  };

  // Draw card
  const drawRightCard = async (deck_id) => {
    const res = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    );
    const data = await res.json();
    // console.log("right card:");
    // console.log(data);
    return data;
  };

  // Assign Card
  const getRightCard = async (deck_id) => {
    const card = await drawRightCard(deck_id);
    setRightCardImg(card.cards[0].image);
    cardValue(card.cards[0].value, "right");
    setCardSide(!cardSide);
  };

  // Check Answer
  const checkAnswer = (answer) => {
    if (answer === "Right") {
      // setDisplay("Right");
      successToast("Right answer!");
      setCounter(counter + 1);
    } else if (answer === "Wrong") {
      // setDisplay("Wrong");
      errorToast("Wrong answer!");
      if (counter > highScore) {
        setHighScore(counter);
      }
      setCounter(0);
      // Resets the game
      resetDeck();
    } else {
      infoToast("You tied!");
      // setDisplay("Tie");
      setCounter(counter + 1);
    }
  };

  // Function to allocate suit names a number
  const cardValue = (card, side) => {
    let card_number = 0;
    switch (card) {
      case "JACK":
        card_number = 11;
        break;
      case "QUEEN":
        card_number = 12;
        break;
      case "KING":
        card_number = 13;
        break;
      case "ACE":
        card_number = 14;
        break;
      default:
        card_number = +card;
    }
    if (side === "right") {
      setRightCardValue(card_number);
    } else {
      setLeftCardValue(card_number);
    }
  };

  return (
    <div id="game">
      <p className="game-para">
        This is another example of my work. I created this simple high/low card
        game all on my own as a way to practice my skills with React! Give it a
        try.{" "}
      </p>
      <div className="game-container">
        <Counter counter={counter} highScore={highScore} />
        <div>
          <LeftCard leftCardImg={leftCardImg} cardSide={cardSide} />
        </div>
        <div>
          <MidCard
            leftCardValue={leftCardValue}
            rightCardValue={rightCardValue}
            cardSide={cardSide}
            drawLeft={(answer) => {
              getLeftCard(DeckID);
              checkAnswer(answer);
            }}
            drawRight={(answer) => {
              getRightCard(DeckID);
              checkAnswer(answer);
            }}
          />
        </div>
        <div>
          <RightCard
            deckID={DeckID}
            rightCardImg={rightCardImg}
            cardSide={cardSide}
          />
        </div>
      </div>
    </div>
  );
};

export default Game;

// Draw Card https://deckofcardsapi.com/api/deck/new/draw/?count=1
