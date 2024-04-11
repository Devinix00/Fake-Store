import Loading from "@/app/loading";
import React, { Suspense } from "react";
import IndividualProduct from "./_components/IndividualProduct";

function Detail({ params }: { params: { productId: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <IndividualProduct productId={params.productId} />
    </Suspense>
  );
}

export default Detail;
