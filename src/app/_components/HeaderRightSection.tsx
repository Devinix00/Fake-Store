"use client";

import Link from "next/link";
import React from "react";
import useIsSignedIn from "../_stores/useIsSignedIn";
import { useRouter } from "next/navigation";

function HeaderRightSection() {
  const router = useRouter();
  const { isSignedIn, setIsSignedIn } = useIsSignedIn();

  return (
    <React.Fragment>
      {isSignedIn ? (
        <section className="flex gap-6">
          <Link href="/carts" className="text-white hover:underline">
            Carts
          </Link>
          <button
            onClick={() => {
              setIsSignedIn(false);
              router.push("/");
            }}
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
