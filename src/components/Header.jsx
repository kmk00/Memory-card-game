import React from "react";
import logo from "../assets/logo.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import SignOut from "./LogOut";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <header className="p-6 flex w-full items-center gap-8 justify-between bg-zinc-900 ">
      <img src={logo} className="h-12"></img>
      {user ? <SignOut /> : <SignIn />}
    </header>
  );
}

export default Header;
