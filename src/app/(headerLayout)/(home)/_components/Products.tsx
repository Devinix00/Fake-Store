"use client";

import getPosts from "@/app/_api/getProducts";
import { queryKeys } from "@/app/_react-query/queryKeys";
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
import { ToastContainer } from "react-toastify";

function Posts() {
  const { data } = useQuery({
    queryKey: queryKeys.products(),
    queryFn: getPosts,
  });

  const products: Product[] = data?.data;

  return (
    <ul className="w-[90%] xl:w-[1240px] m-auto">
      {products?.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <ToastContainer position="top-center" />
    </ul>
  );
}

export default Posts;
