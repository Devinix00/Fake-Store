import React from "react";
import Image from "next/image";
import { Menu } from "../../../public/images";
import Link from "next/link";

function Header() {
  return (
    <header className="fixed top-0 w-[100%] z-50 h-16 bg-black flex justify-center items-center">
      <div className="w-[90%] xl:w-[1240px] h-[60%] flex items-center justify-between">
        <Link href="/" className="text-white text-[18px]">
          Fake store
        </Link>

        <Link
          href="/sign-in"
          className="text-white hidden md:block hover:underline"
        >
          Sign In
        </Link>
        <Image
          className="cursor-pointer block md:hidden"
          src={Menu}
          alt="Menu"
        />
      </div>
    </header>
  );
}

export default Header;
