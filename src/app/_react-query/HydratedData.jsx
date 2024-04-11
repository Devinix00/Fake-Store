import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "../getQueryClient";
import Products from "../_components/Products";
import { getProducts } from "@/app/_api/getProducts";
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
      <Products />
    </Hydrate>
  );
}

export default HydratedData;
