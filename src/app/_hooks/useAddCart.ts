import { useMutation } from "@tanstack/react-query";
import addCart, { AddCartProps } from "../_api/addCart";

function useAddCart() {
  const addCartMutation = useMutation({
    mutationFn: (data: AddCartProps) => {
      return addCart(data);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleAddCart = addCartMutation.mutate;

  return { handleAddCart };
}

export default useAddCart;
