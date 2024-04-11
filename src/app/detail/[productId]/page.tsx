import IndividualProduct from "@/app/_components/IndividualProduct";
import Loading from "@/app/loading";
import React, { Suspense } from "react";

function Detail({ params }: { params: { productId: string } }) {
  return (
    <Suspense
      fallback={
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <Loading />
        </div>
      }
    >
      <IndividualProduct productId={params.productId} />
    </Suspense>
  );
}

export default Detail;
