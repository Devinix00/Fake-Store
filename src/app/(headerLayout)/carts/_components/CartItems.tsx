"use client";

import getCartItems from "@/app/_api/getCartItems";
import { queryKeys } from "@/app/_react-query/queryKeys";
import useCartStore from "@/app/_stores/useCartStore";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import CartItem from "./CartItem";

function CartItems() {
  const { productIds } = useCartStore();
  const { data } = useQuery({
    queryKey: queryKeys.cartItems(),
    queryFn: () => getCartItems(productIds),
  });

  const cartItems: Product[] | undefined = data?.data;

  return (
    <ul className="flex flex-col gap-10 mt-5">
      {cartItems?.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem.id} />
      ))}
    </ul>
  );
}

export default CartItems;
