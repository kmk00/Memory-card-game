import React, { useEffect, useState } from "react";
import Card from "./Card";

function GameComponent() {
  //display level
  const [level, setLevel] = useState(undefined);
  //image ids
  const [ids, setIds] = useState([]);
  // correct choices on level
  const [correctChoices, setCorrectChoices] = useState(0);
  // correct choicec on evely level
  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);
  // card is choosen for the second time
  // is the game active
  const [isGame, setIsGame] = useState(undefined);

  function generateID() {
    let array = [];
    for (let i = 0; i < level + 3; i++) {
      let rndInt = randomInteger(1, 400);
      if (!array.includes(rndInt)) array.push(rndInt);
    }
    return array;
  }

  const randomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  function shuffle() {
    let temp = [...ids];
    return temp.sort(() => Math.random() - 0.5);
  }

  function checkIfPressed(isPressed) {
    if (isPressed === true) {
      setScore((prev) => prev + 1);
      setCorrectChoices((prev) => prev + 1);
      shuffleArray();
    }

    if (isPressed === false) {
      setLevel(0);
      setIsGame(false);
    }

    if (correctChoices === ids.length - 1) {
      setLevel((prev) => prev + 1);
      setCorrectChoices(0);
      shuffleArray();
    }
  }

  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score]);

  useEffect(() => {
    setCorrectChoices(0);
    setIds(generateID());
  }, [level]);

  //start game
  useEffect(() => {
    setScore(0);
    setCorrectChoices(0);
    setLevel(1);
  }, [isGame]);

  function shuffleArray() {
    const temp = shuffle();
    setIds(temp);
  }

  function handleGame() {
    setIsGame(true);
  }

  return (
    <main>
      {!isGame && <button onClick={handleGame}>Start Game</button>}
      {<h2>High Score: {highScore}</h2>}
      {isGame && <h1>{`Level ${level}`}</h1>}
      {isGame && <h2>{score}</h2>}
      <div className="flex">
        {isGame &&
          ids.map((index) => (
            <Card key={index} index={index} checkHandler={checkIfPressed} />
          ))}
      </div>
    </main>
  );
}

export default GameComponent;
