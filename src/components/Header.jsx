import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="p-6 flex justify-center md:justify-start bg-zinc-900 w-full">
      <img src={logo} className="h-12"></img>
    </header>
  );
}

export default Header;
