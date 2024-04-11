"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "../../../public/images";
import React from "react";
import useIsSignedIn from "../_stores/useIsSignedIn";

function HeaderRightSection() {
  const { isSignedIn, setIsSignedIn } = useIsSignedIn();

  return (
    <React.Fragment>
      {isSignedIn ? (
        <button
          onClick={() => setIsSignedIn(false)}
          className="text-white hidden md:block hover:underline"
        >
          Sign Out
        </button>
      ) : (
        <Link
          href="/sign-in"
          className="text-white hidden md:block hover:underline"
        >
          Sign In
        </Link>
      )}
      <Image className="cursor-pointer block md:hidden" src={Menu} alt="Menu" />
    </React.Fragment>
  );
}

export default HeaderRightSection;
