import useCartStore from "../_stores/useCartStore";
import useIsAuthed from "../_stores/useIsAuthed";

function useAddCart() {
  const { toSignInPage } = useIsAuthed();
  const { setProductIds } = useCartStore();

  const handleAddCart = (productId: number) => {
    toSignInPage();
    setProductIds(productId);
  };

  return { handleAddCart };
}

export default useAddCart;
