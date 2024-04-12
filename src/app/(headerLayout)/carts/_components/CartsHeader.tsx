"use client";

import useCart from "@/app/hooks/useCart";
import React from "react";

function CartsHeader() {
  const { handleClearEveryCart } = useCart();

  return (
    <section className="flex justify-between">
      <h1 className="font-semibold text-xl">My Carts</h1>
      <button
        onClick={handleClearEveryCart}
        className="w-24 h-8 bg-red text-white text-sm rounded-lg"
      >
        Remove all
      </button>
    </section>
  );
}

export default CartsHeader;
