"use client";

import getPosts from "@/app/_api/getProducts";
import { queryKeys } from "@/app/_react-query/queryKeys";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

function Posts() {
  const { data } = useQuery({
    queryKey: queryKeys.products(),
    queryFn: getPosts,
  });

  const products: Product[] = data?.data;

  return (
    <ul className="w-[90%] xl:w-[1240px] m-auto">
      {products?.map((product) => (
        <li
          key={product.id}
          className="w-[100%] min-h-[100vh] flex flex-col md:flex-row gap-20 items-center justify-center"
        >
          <Image
            width={250}
            height={250}
            src={product.image}
            alt={product.title}
          />
          <section className="flex flex-col gap-2 w-[100%]">
            <Link
              href="/"
              className="text-lg md:text-2xl font-bold hover:underline w-fit"
            >
              {product.title}
            </Link>
            <p className="text-md md:text-xl font-medium">{product.category}</p>
            <section className="flex gap-2 items-center">
              <p className="text-md md:text-xl font-extrabold">
                ${product.price}
              </p>
              <p className="text-md md:text-xl text-red font-semibold">
                {product.rating.rate}%
              </p>
            </section>
            <p className="text-sm md:text-lg font-medium mt-5 break-words">
              {product.description}
            </p>
          </section>
        </li>
      ))}
    </ul>
  );
}

export default Posts;
