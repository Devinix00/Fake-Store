import { toast } from "react-toastify";
import useCartStore from "../_stores/useCartStore";
import useIsAuthed from "./useIsAuthed";

function useCart() {
  const { setProductIds, setClearEveryCart, setRemoveCart } = useCartStore();
  const clearEveryCart = useCartStore.persist?.clearStorage;

  const { toSignInPage } = useIsAuthed();

  const handleAddCart = (productId: number) => {
    if (toSignInPage()) setProductIds(productId);
  };

  const handleClearEveryCart = () => {
    setClearEveryCart();
    clearEveryCart();
    toast.info("All products have been removed!");
  };

  const handleRemoveCart = (productId: number) => {
    setRemoveCart(productId);
    toast.info("Removed!");
  };

  return { handleAddCart, handleClearEveryCart, handleRemoveCart };
}

export default useCart;
