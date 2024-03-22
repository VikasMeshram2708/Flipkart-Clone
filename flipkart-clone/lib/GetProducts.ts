export default async function GetProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('Failed to fetch the products...');
  return response.json();
}
