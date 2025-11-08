import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface ProductCardProps {
  id: string | number;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  tag?: 'Nouveau' | 'Promo';
}

const ProductCard = ({ id, imageUrl, title, description, price, tag }: ProductCardProps) => {
  const tagColor = tag === 'Promo' ? 'bg-secondary-green' : 'bg-blue-500';

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast.success(`${title} a été ajouté à votre panier!`);
  };

  return (
    <Link to={`/product/${id}`} className="block h-full">
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden relative group cursor-pointer h-full flex flex-col"
        whileHover={{ y: -8, scale: 1.05, shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {tag && (
          <div className={cn('absolute top-3 right-3 text-white text-xs font-bold px-2 py-1 rounded-full z-10', tagColor)}>
            {tag}
          </div>
        )}
        <div className="h-56 w-full overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="p-4 text-dark-gray dark:text-gray-300 flex flex-col flex-grow">
          <h3 className="text-lg font-bold mb-2 truncate">{title}</h3>
          <p className="text-sm mb-4 h-10 overflow-hidden flex-grow">{description}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-xl font-bold text-primary-blue">{price}</span>
            <motion.button 
              className="bg-primary-blue text-white font-bold py-2 px-4 rounded-lg"
              whileHover={{ scale: 1.1, backgroundColor: '#32CD32' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              onClick={handleAddToCart}
            >
              Acheter
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;