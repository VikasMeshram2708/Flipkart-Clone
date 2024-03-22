import Carousel from '@/components/Carousel';
import ProductCard from '@/components/ProductCard';
import GetProducts from '@/lib/GetProducts';

export default async function Home() {
  const products: Promise<Product[]> = GetProducts();
  const productItem = await products;

  return (
    <main className="min-h-screen max-w-[90%] mx-auto">
      {/** TODO: Carousel */}
      <div className="mt-10">
        <Carousel />
      </div>
      <div className="mt-36 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-5 lg:gap-10">
        {productItem.map((product) => (
          <div key={product?.id}>
            <ProductCard
              id={product?.id}
              title={product?.title}
              description={product?.description}
              imageSrc={product?.image}
              price={product?.price}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
