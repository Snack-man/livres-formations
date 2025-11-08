import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { allProducts } from '../data/products';
import { toast } from 'sonner';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return <div className='container mx-auto text-center py-20'>Produit non trouvé.</div>;
  }

  const handleAddToCart = () => {
    toast.success(`${product.title} a été ajouté au panier!`);
  };

  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='grid md:grid-cols-2 gap-12 items-start'>
        <div>
          <img src={product.imageUrl} alt={product.title} className='w-full h-auto rounded-lg shadow-lg object-cover aspect-[3/4]' />
        </div>
        <div className='text-dark-gray dark:text-gray-200'>
          <h1 className='text-4xl font-bold mb-2'>{product.title}</h1>
          {product.author && <p className='text-xl text-gray-600 dark:text-gray-400 mb-4'>par {product.author}</p>}
          <p className='text-3xl font-bold text-primary-blue mb-6'>{product.price}</p>
          <p className='text-lg mb-8'>{product.description}</p>
          <Button size='lg' style={{ backgroundColor: '#32CD32', color: 'white' }} onClick={handleAddToCart}>Ajouter au Panier</Button>
        </div>
      </div>
    </div>
  );
}