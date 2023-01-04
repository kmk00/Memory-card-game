import React, { useEffect, useState } from "react";
import Card from "./Card";

function GameComponent() {
  const [level, setLevel] = useState(1);
  const [ids, setIds] = useState([]);
  //generate random numbers from 1-500
  //add it to array
  const randomInteger = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  function shuffle() {
    let temp = [...ids];
    return temp.sort(() => Math.random() - 0.5);
  }

  function checkIfPressed(e) {
    console.log(e);
    shuffleArray();
  }

  useEffect(() => {
    let array = [];
    for (let i = 0; i < level + 3; i++) {
      let rndInt = randomInteger(1, 400);
      if (!array.includes(rndInt)) array.push(rndInt);
    }
    setIds(array);
  }, []);

  function shuffleArray() {
    console.log("ids przed: " + ids);
    const temp = shuffle();
    setIds(temp);
    console.log("ids po: " + ids);
  }

  return (
    <main>
      <h1 className="text-white">{`Level ${level}`}</h1>
      {ids.map((index) => (
        <Card key={index} index={index} checkHandler={checkIfPressed} />
      ))}
    </main>
  );
}

export default GameComponent;
