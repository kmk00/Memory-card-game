import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

const logIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

function SignIn() {
  return (
    <div>
      <button
        onClick={logIn}
        className="text-yellow-200 hover:text-xl ease-in duration-200 text-lg mr-4"
      >
        Log In
      </button>
    </div>
  );
}

export default SignIn;
