import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../getQueryClient";
import Posts from "../_components/Products";
import getProducts from "@/app/_api/getProducts";
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
