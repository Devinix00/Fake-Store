"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import useIsSignedInStore from "../_stores/useIsSignedInStore";

function HeaderRightSection() {
  const router = useRouter();
  const { isSignedIn, setIsSignedIn } = useIsSignedInStore();

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
