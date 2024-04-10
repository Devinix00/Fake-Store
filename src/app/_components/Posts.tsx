"use client";

import getPosts from "@/app/_api/getProducts";
import { queryKeys } from "@/app/_react-query/queryKeys";
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
