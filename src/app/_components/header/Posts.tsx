"use client";

import getPosts from "@/api/getProducts";
import { queryKeys } from "@/react-query/queryKeys";
import { useQuery } from "@tanstack/react-query";

function Posts() {
  const { data } = useQuery({
    queryKey: queryKeys.products(),
    queryFn: getPosts,
  });

  console.log("data:", data);

  return <></>;
}

export default Posts;
