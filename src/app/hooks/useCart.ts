import useCartStore from "../_stores/useCartStore";
import useIsAuthed from "../_stores/useIsAuthed";

function useCart() {
  const { setProductIds, setClearEveryCart, setRemoveCart } = useCartStore();
  const clearEveryCart = useCartStore.persist.clearStorage;

  const { toSignInPage } = useIsAuthed();

  const handleAddCart = (productId: number) => {
    if (toSignInPage()) setProductIds(productId);
  };

  const handleClearEveryCart = () => {
    setClearEveryCart();
    clearEveryCart();
  };

  const handleRemoveCart = (productId: number) => {
    setRemoveCart(productId);
  };

  return { handleAddCart, handleClearEveryCart, handleRemoveCart };
}

export default useCart;
