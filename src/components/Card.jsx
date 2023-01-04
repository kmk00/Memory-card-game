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
