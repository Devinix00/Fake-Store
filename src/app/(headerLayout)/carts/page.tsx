import React from "react";
import CartItems from "./_components/CartItems";

function Carts() {
  return (
    <div className="m-auto mt-20 w-[90%] xl:w-[1240px] ">
      <h1 className="font-semibold text-xl">My Carts</h1>
      <CartItems />
    </div>
  );
}

export default Carts;
