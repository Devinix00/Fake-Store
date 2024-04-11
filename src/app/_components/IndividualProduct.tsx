"use client";

import getIndividualProducts from "@/app/_api/getIndividualProducts";
import { queryKeys } from "@/app/_react-query/queryKeys";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface IndividualProductProps {
  productId: string;
}

function IndividualProduct({ productId }: IndividualProductProps) {
  const { data } = useQuery({
    queryKey: queryKeys.individualProduct(Number(productId)),
    queryFn: () => getIndividualProducts(Number(productId)),
  });

  console.log(data?.data);

  const product: Product = data?.data;

  return (
    <div className="w-[90%] xl:w-[1240px] m-auto min-h-[100vh] flex flex-col gap-20 items-center justify-center mt-16">
      <Image width={250} height={250} src={product.image} alt={product.title} />
      <section className="flex flex-col gap-2 w-[100%] items-center">
        <p className="text-lg md:text-2xl font-bold w-fit">{product.title}</p>
        <p className="text-md md:text-xl font-medium">{product.category}</p>
        <section className="flex gap-2 items-center">
          <p className="text-md md:text-xl font-extrabold">${product.price}</p>
          <p className="text-md md:text-xl text-red font-semibold">
            {product.rating.rate}%
          </p>
        </section>
        <p className="text-sm md:text-lg font-medium mt-5 break-words">
          {product.description}
        </p>
      </section>
    </div>
  );
}

export default IndividualProduct;
