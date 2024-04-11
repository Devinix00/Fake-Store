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
        <section className="flex gap-6">
          <Link href="/cart" className="text-white hover:underline">
            Cart
          </Link>
          <button
            onClick={() => setIsSignedIn(false)}
            className="text-white hover:underline"
          >
            Sign Out
          </button>
        </section>
      ) : (
        <Link href="/sign-in" className="text-white hover:underline">
          Sign In
        </Link>
      )}
    </React.Fragment>
  );
}

export default HeaderRightSection;
