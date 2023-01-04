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
      className="bg-slate-700 bg-opacity-60 w-28 border-4 border-slate-800 hover:scale-105 md:w-32 lg:w-36 active:opacity-50"
    >
      <img
        draggable={false}
        onClick={press}
        className="w-28 md:w-32 lg:w-36 border border-zinc-800"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`}
      ></img>
    </div>
  );
}

export default Card;
