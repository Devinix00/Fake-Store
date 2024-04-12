import useCart from "@/app/hooks/useCart";
import Image from "next/image";
import React from "react";

interface CartItemProps {
  cartItem: Product;
}

function CartItem({ cartItem }: CartItemProps) {
  const { handleRemoveCart } = useCart();
  return (
    <li className="border-b-[1px] pb-10 flex gap-8">
      <Image
        width={100}
        height={100}
        src={cartItem.image}
        alt={cartItem.title}
      />

      <section className="flex flex-col justify-center">
        <p className="font-bold">{cartItem.title}</p>
        <p className="font-medium mt-4">{cartItem.category}</p>

        <section className="flex gap-2">
          <p className="font-extrabold">${cartItem.price}</p>
          <p className="font-semibold text-red">{cartItem.rating.rate}%</p>
        </section>

        <button
          onClick={() => handleRemoveCart(cartItem.id)}
          className="w-20 h-8 mt-2 bg-red text-white rounded-lg text-sm"
        >
          Remove
        </button>
      </section>
    </li>
  );
}

export default CartItem;
