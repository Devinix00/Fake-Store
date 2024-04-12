export interface AddCartProps {
  products: CartProduct;
}

interface CartProduct {
  productId: number;
  quantity: number;
}

async function addCart({ products }: AddCartProps) {
  const response = await fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      date: Date.now(),
      products: products,
    }),
  });

  const data = await response.json();
  return { data, response };
}

export default addCart;
