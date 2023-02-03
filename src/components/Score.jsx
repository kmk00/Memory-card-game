import React from "react";

function Score({ score }) {
  return (
    <li className="text-yellow-400 p-2 flex justify-between border-b-2 text-2xl">
      <p className="mr-8">{`${score.name}`}</p>
      <p>{`${score.score}`}</p>
    </li>
  );
}

export default Score;
