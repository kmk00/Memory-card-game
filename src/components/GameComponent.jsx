import React, { useEffect, useState } from "react";
import Card from "./Card";
import Scoreboard from "./Scoreboard";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

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
    //generate id for pokecard API
    let array = [];
    for (let i = 0; array.length < level + 3; i++) {
      let rndInt = randomInteger(1, 500);
      if (!array.includes(rndInt) && !ids.includes(rndInt)) array.push(rndInt);
    }
    return array;
  }

  const randomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  //shuffle cards after pick
  function shuffle() {
    let temp = [...ids];
    return temp.sort(() => Math.random() - 0.5);
  }

  function checkIfPressed(isPressed) {
    //pick correct card
    if (isPressed === true) {
      setScore((prev) => prev + 1);
      setCorrectChoices((prev) => prev + 1);
      shuffleArray();
    }

    //pick wrong card
    if (isPressed === false) {
      sendScore();
      setLevel(0);
      setIsGame(false);
    }

    //shuffle cards and go to the next lever
    if (correctChoices === ids.length - 1) {
      setIds([]);
      setLevel((prev) => prev + 1);
      setCorrectChoices(0);
      shuffleArray();
    }
  }

  const sendScore = async () => {
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "scoreboard"), {
      score: score,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
  };

  //set new high score local
  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score]);

  //after new level
  useEffect(() => {
    setCorrectChoices(0);
    setIds(generateID());
  }, [level]);

  //start game
  useEffect(() => {
    setCorrectChoices(0);
    setLevel(1);
  }, [isGame]);

  function shuffleArray() {
    const temp = shuffle();
    setIds(temp);
  }

  function handleGame() {
    //start new game
    setScore(0);
    setIsGame(true);
  }

  return (
    <main className="p-4 flex flex-col items-center w-full lg:max-w-7xl">
      <p className="text-green-200 text-3xl p-1 w-full tracking-wider">{`Score: ${score}`}</p>
      <p className="text-yellow-500 text-xl  p-1 w-full tracking-wider">{`Highest Session Score: ${highScore}`}</p>
      {!isGame && (
        <button
          onClick={handleGame}
          className="m-8 px-8 py-2.5 text-2xl hover:animate-pulse bg-zinc-300 text-gray-900 uppercase font-bold border-zinc-600 hover:bg-slate-400 border-4"
        >
          Start Game
        </button>
      )}
      {!isGame && highScore > 0 && (
        <>
          <h1 className="text-red-500 text-3xl p-4">You lost!</h1>
          <Scoreboard />
        </>
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
