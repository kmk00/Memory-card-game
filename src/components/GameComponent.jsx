import React, { useEffect, useState } from "react";
import Card from "./Card";

function GameComponent() {
  //display level
  const [level, setLevel] = useState(1);
  //image ids
  const [ids, setIds] = useState([]);
  // correct choices on level
  const [correctChoices, setCorrectChoices] = useState(0);
  // correct choicec on evely level
  const [score, setScore] = useState(0);
  // card is choosen for the second time
  const [isFailed, setIsFailed] = useState(false);
  // is the game active
  const [isGame, setIsGame] = useState(false);

  const randomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  function shuffle() {
    let temp = [...ids];
    return temp.sort(() => Math.random() - 0.5);
  }

  function checkIfPressed(isPressed) {
    if (isPressed === true) {
      setCorrectChoices((prev) => prev + 1);
      shuffleArray();
    }
    if (isPressed === false) setIsGame(false);
  }

  useEffect(() => {
    let array = [];
    for (let i = 0; i < level + 3; i++) {
      let rndInt = randomInteger(1, 400);
      if (!array.includes(rndInt)) array.push(rndInt);
    }
    setIds(array);
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
      {!isGame && (
        <button className="text-white" onClick={handleGame}>
          Start Game
        </button>
      )}
      {isGame && <h1 className="text-white">{`Level ${level}`}</h1>}
      {isGame &&
        ids.map((index) => (
          <Card key={index} index={index} checkHandler={checkIfPressed} />
        ))}
    </main>
  );
}

export default GameComponent;
