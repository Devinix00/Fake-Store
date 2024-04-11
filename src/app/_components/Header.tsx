import React from "react";
import Image from "next/image";
import { Menu } from "../../../public/images";

function Header() {
  return (
    <header className="absolute top-0 w-[100%] h-16 bg-black flex justify-center items-center">
      <div className="w-[90%] xl:w-[1240px] h-[60%] flex items-center justify-between">
        <p className="text-white text-[18px]">Fake store</p>

        <Image className="cursor-pointer" src={Menu} alt="Menu" />
      </div>
    </header>
  );
}

export default Header;
