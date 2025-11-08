import ProductCard from "../components/ProductCard";
import { allProducts } from "../data/products";

const discountedProducts = allProducts.filter(p => p.tag === 'Promo');

export function PromotionsPage() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold text-gray-800 dark:text-white mb-8'>Nos Promotions</h1>
      {discountedProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {discountedProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 py-10">Il n'y a aucune promotion pour le moment.</p>
      )}
    </div>
  );
}