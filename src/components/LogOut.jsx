import React from "react";
import { auth } from "../firebase";

function LogOut() {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <button
        onClick={() => auth.signOut()}
        className="text-yellow-200 hover:text-xl ease-in duration-200 text-lg mr-4"
      >
        Log Out
      </button>
    </div>
  );
}

export default LogOut;
