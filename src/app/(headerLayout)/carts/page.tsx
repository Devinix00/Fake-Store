import React, { Suspense } from "react";
import CartItems from "./_components/CartItems";
import NoSsr from "@/app/_components/NoSsr";
import Loading from "@/app/loading";

function Carts() {
  return (
    <NoSsr>
      <Suspense fallback={<Loading />}>
        <div className="m-auto mt-20 w-[90%] xl:w-[1240px]">
          <h1 className="font-semibold text-xl">My Carts</h1>
          <CartItems />
        </div>
      </Suspense>
    </NoSsr>
  );
}

export default Carts;
