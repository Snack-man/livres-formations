import HeroCarousel from '../components/HeroCarousel';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { books, formations } from '../data/products';

const bestSellers = [...books].reverse().slice(0, 4);

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <motion.section 
    className="py-12 md:py-20 px-4"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-gray dark:text-white">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {children}
      </div>
    </div>
  </motion.section>
);

const HomePage = () => {
  return (
    <div>
      <HeroCarousel />
      <div className="bg-light-gray dark:bg-gray-900">
        <Section title="Nouveautés Livres">
          {books.slice(0, 4).map((book) => <ProductCard key={`book-${book.id}`} {...book} />)}
        </Section>
      </div>
      <div className="bg-white dark:bg-dark-gray">
        <Section title="Meilleures ventes Livres">
          {bestSellers.map((book) => <ProductCard key={`best-${book.id}`} {...book} />)}
        </Section>
      </div>
      <div className="bg-light-gray dark:bg-gray-900">
        <Section title="Nouveautés Formations">
          {formations.map((formation) => <ProductCard key={`formation-${formation.id}`} {...formation} />)}
        </Section>
      </div>
    </div>
  );
};

export default HomePage;