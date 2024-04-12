import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UseCartStoreReturn {
  productIds: number[];
  setProductIds: (productId: number) => void;
}

const useCartStore = create(
  persist<UseCartStoreReturn>(
    (set, _get) => ({
      productIds: [],
      setProductIds: (productId: number) =>
        set((state: { productIds: number[] }) => {
          if (!state.productIds.includes(productId)) {
            return { productIds: [...state.productIds, productId] };
          }

          return {};
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
