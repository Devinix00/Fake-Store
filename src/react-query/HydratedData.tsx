import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../app/getQueryClient";
import Posts from "../app/_components/header/Posts";
import getProducts from "@/api/getProducts";
import { queryKeys } from "./queryKeys";

async function HydratedData() {
  const queryClient = getQueryClient();
  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: queryKeys.products(),
      queryFn: getProducts,
    }),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Posts />
    </Hydrate>
  );
}

export default HydratedData;
