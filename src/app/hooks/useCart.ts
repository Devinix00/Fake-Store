import useCartStore from "../_stores/useCartStore";
import useIsAuthed from "../_stores/useIsAuthed";

function useCart() {
  const { setProductIds, setClearEveryCart } = useCartStore();
  const clearEveryCart = useCartStore.persist.clearStorage;

  const { toSignInPage } = useIsAuthed();

  const handleAddCart = (productId: number) => {
    if (toSignInPage()) setProductIds(productId);
  };

  const handleClearEveryCart = () => {
    setClearEveryCart();
    clearEveryCart();
  };

  return { handleAddCart, handleClearEveryCart };
}

export default useCart;
