import React from "react";
import Posts from "./Posts";

function Header() {
  return (
    <header className="h-16 bg-black flex justify-center items-center">
      <div className="w-[90%] h-[60%] flex items-center">
        <div className="text-white">Logo</div>
      </div>
    </header>
  );
}

export default Header;
