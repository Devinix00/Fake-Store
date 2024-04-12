"use client";

import React, { Suspense } from "react";
import CartItems from "./_components/CartItems";
import NoSsr from "@/app/_components/NoSsr";
import Loading from "@/app/loading";
import CartsHeader from "./_components/CartsHeader";

function Carts() {
  return (
    <NoSsr>
      <Suspense fallback={<Loading />}>
        <div className="m-auto mt-20 w-[90%] xl:w-[1240px]">
          <CartsHeader />
          <CartItems />
        </div>
      </Suspense>
    </NoSsr>
  );
}

export default Carts;
