"use client";

import getIndividualProduct from "@/app/_api/getIndividualProduct";
import { queryKeys } from "@/app/_react-query/queryKeys";
import useCart from "@/app/_hooks/useCart";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import useCartStore from "@/app/_stores/useCartStore";

interface IndividualProductProps {
  productId: string;
}

function IndividualProduct({ productId }: IndividualProductProps) {
  const { productIds } = useCartStore();
  const { handleAddCart } = useCart();
  const { data } = useQuery({
    queryKey: queryKeys.individualProduct(Number(productId)),
    queryFn: () => getIndividualProduct(Number(productId)),
  });

  const product: Product = data?.data;
  const isAddedCart = productIds.includes(product.id);

  return (
    <div className="w-[90%] xl:w-[1240px] m-auto min-h-[100vh] flex flex-col gap-20 items-center justify-center mt-16">
      <Image width={250} height={250} src={product.image} alt={product.title} />
      <section className="flex flex-col gap-2 w-[100%] items-center">
        <p className="text-lg md:text-2xl font-bold w-fit text-center">
          {product.title}
        </p>
        <p className="text-md md:text-xl font-medium">{product.category}</p>

        <section className="flex gap-2 items-center">
          <p className="text-md md:text-xl font-extrabold">${product.price}</p>
          <p className="text-md md:text-xl text-red font-semibold">
            {product.rating.rate}%
          </p>
        </section>

        <p className="text-sm md:text-lg font-medium mt-5 break-words text-center">
          {product.description}
        </p>
        <button
          onClick={() => handleAddCart(product.id)}
          disabled={isAddedCart}
          className={`w-[100%] md:w-40 h-12 rounded-xl ${
            isAddedCart ? "bg-gray-300" : "bg-red"
          } text-white text-md md:text-lg font-semibold mt-5`}
        >
          {isAddedCart ? "Added to Cart" : "Cart"}
        </button>
      </section>
    </div>
  );
}

export default IndividualProduct;
