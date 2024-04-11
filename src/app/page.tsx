import { Suspense } from "react";
import Products from "./_components/Products";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Products />
    </Suspense>
  );
}
