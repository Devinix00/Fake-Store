import { Suspense } from "react";
import Products from "./_components/Products";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <Loading />
          </div>
        }
      >
        <Products />
      </Suspense>
    </>
  );
}
