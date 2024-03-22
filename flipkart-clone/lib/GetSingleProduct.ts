export default async function GetSingleProduct(id: number) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch the product.');
  return response.json();
}
