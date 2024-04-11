import IndividualProduct from "@/app/_components/IndividualProduct";
import Loading from "@/app/loading";
import React, { Suspense } from "react";

function Detail({ params }: { params: { productId: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <IndividualProduct productId={params.productId} />
    </Suspense>
  );
}

export default Detail;
