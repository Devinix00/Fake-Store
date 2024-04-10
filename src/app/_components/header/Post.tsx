"use client";

import getIndividualProducts from "@/api/getIndividualProducts";
import { queryKeys } from "@/react-query/queryKeys";
import { useQuery } from "@tanstack/react-query";

function Post() {
  const { data } = useQuery({
    queryKey: queryKeys.individualProduct(1),
    queryFn: () => getIndividualProducts(1),
  });

  console.log("individualData:", data);

  return <></>;
}

export default Post;
