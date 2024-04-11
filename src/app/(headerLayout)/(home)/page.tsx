import { Suspense } from "react";
import Products from "./_components/Products";
import Loading from "../../loading";

function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Products />
    </Suspense>
  );
}

export default Home;
