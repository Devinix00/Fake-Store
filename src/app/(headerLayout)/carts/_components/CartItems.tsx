"use client";

import getCartItems from "@/app/_api/getCartItems";
import { queryKeys } from "@/app/_react-query/queryKeys";
import useCartStore from "@/app/_stores/useCartStore";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import CartItem from "./CartItem";
import NoCart from "./NoCart";

function CartItems() {
  const { productIds } = useCartStore();
  const { data, refetch } = useQuery({
    queryKey: queryKeys.cartItems(),
    queryFn: () => getCartItems(productIds),
  });

  useEffect(() => {
    refetch();
  }, [productIds, refetch]);

  const cartItems: Product[] | undefined = data?.data;

  return (
    <ul className="flex flex-col gap-10 mt-5">
      {cartItems?.map((cartItem) => (
        <CartItem cartItem={cartItem} key={cartItem.id} />
      ))}

      {productIds.length === 0 && <NoCart />}
    </ul>
  );
}

export default CartItems;
