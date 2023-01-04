import React, { useState } from "react";

function Card(props) {
  const [isPressed, setIsPressed] = useState(false);

  function press() {
    console.log(isPressed);
    setIsPressed(true);
  }

  return (
    <div
      onClick={props.checkHandler}
      className="bg-blue-400 bg-opacity-30 h-32 w-32"
    >
      <img
        onClick={press}
        className="h-32 border border-zinc-800"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`}
      ></img>
    </div>
  );
}

export default Card;
