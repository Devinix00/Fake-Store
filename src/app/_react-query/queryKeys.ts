export const queryKeys = {
  products: () => ["products"],
  individualProduct: (id: number) => ["products", id],

  cartItems: () => ["cart-items"],
};
