import React, { useEffect, useState } from "react";

function Card(props) {
  const [isPressed, setIsPressed] = useState(undefined);

  useEffect(() => {
    props.checkHandler(isPressed);
  }, [isPressed]);

  function press() {
    if (isPressed === true) setIsPressed(false);
    if (isPressed === undefined) setIsPressed(true);
  }

  return (
    <div
      onClick={props.checkHandler}
      className={
        isPressed
          ? "bg-green-300 bg-opacity-30 w-28 md:w-32 lg:w-36"
          : "bg-blue-400 bg-opacity-30 w-28 hover:scale-105 md:w-32 lg:w-36"
      }
    >
      <img
        onClick={press}
        className="w-28 md:w-32 lg:w-36 border border-zinc-800"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`}
      ></img>
    </div>
  );
}

export default Card;
