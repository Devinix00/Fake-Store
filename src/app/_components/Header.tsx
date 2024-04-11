import React from "react";
import Link from "next/link";
import HeaderRightSection from "./HeaderRightSection";

function Header() {
  return (
    <header className="fixed top-0 w-[100%] z-50 h-16 bg-black flex justify-center items-center">
      <div className="w-[90%] xl:w-[1240px] h-[60%] flex items-center justify-between">
        <Link href="/" className="text-white text-[18px]">
          Fake store
        </Link>
        <HeaderRightSection />
      </div>
    </header>
  );
}

export default Header;
