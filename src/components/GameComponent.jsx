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
  // best score within all attempts
  const [highScore, setHighScore] = useState(0);
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
    <main className="p-4 flex flex-col items-center w-full lg:max-w-7xl">
      <p className="text-green-200 text-3xl p-1 w-full">{`Score: ${score}`}</p>
      <p className="text-yellow-500 text-sm p-1 w-full">{`High Score: ${highScore}`}</p>
      {!isGame && (
        <button
          onClick={handleGame}
          className="m-8 px-8 py-2.5 text-2xl hover:animate-pulse bg-zinc-300 text-gray-900 uppercase font-bold border-zinc-600 hover:bg-slate-400 border-4"
        >
          Start Game
        </button>
      )}
      {isGame && (
        <p className="mt-2 p-2 text-4xl text-gray-50">{`LEVEL ${level}`}</p>
      )}
      <div className="flex flex-wrap px-4 py-2 justify-center gap-2">
        {isGame &&
          ids.map((index) => (
            <Card key={index} index={index} checkHandler={checkIfPressed} />
          ))}
      </div>
    </main>
  );
}

export default GameComponent;
