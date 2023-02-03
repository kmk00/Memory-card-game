import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Score from "./Score";

function Scoreboard() {
  const [scoreboard, setScoreboard] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "scoreboard"), orderBy("score", "desc"));

    //select only the highest score
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let names = [];
      let finalScores = [];
      let scores = [];
      querySnapshot.forEach((doc) => {
        scores.push({ ...doc.data(), id: doc.id });
      });
      scores.forEach((element) => {
        if (!names.includes(element.name)) {
          names.push(element.name);
          finalScores.push(element);
        }
      });

      setScoreboard(finalScores);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <p className="text-5xl p-4 uppercase font-black text-yellow-500">
        Scoreboard
      </p>
      <div className="border-4 border-yellow-300 p-4">
        <ul>
          {scoreboard.map((score) => (
            <Score key={score.id} score={score} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Scoreboard;
