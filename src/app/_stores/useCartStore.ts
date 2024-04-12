import { toast } from "react-toastify";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseCartStoreReturn {
  productIds: number[];
  setProductIds: (productId: number) => void;
  setClearEveryCart: () => void;
  setRemoveCart: (productId: number) => void;
}

const useCartStore = create(
  persist<UseCartStoreReturn>(
    (set, _get) => ({
      productIds: [],
      setProductIds: (productId: number) =>
        set((state: { productIds: number[] }) => {
          if (!state.productIds.includes(productId)) {
            toast.success("Added to cart");

            return { productIds: [...state.productIds, productId] };
          }

          return {};
        }),
      setClearEveryCart: () => set(() => ({ productIds: [] })),
      setRemoveCart: (productId: number) =>
        set((state: { productIds: number[] }) => {
          const filteredProductIds = state.productIds.filter(
            (id) => id !== productId
          );
          return { productIds: filteredProductIds };
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
