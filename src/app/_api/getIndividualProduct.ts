async function getProduct(id: number) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "GET",
  });

  const data = await response.json();
  return { data, response };
}

export default getProduct;
