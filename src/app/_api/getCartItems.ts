async function getCartItems(productIds: number[]) {
  const requests = productIds.map(async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await response.json();
  });

  const data = await Promise.all(requests);
  return { data };
}

export default getCartItems;
