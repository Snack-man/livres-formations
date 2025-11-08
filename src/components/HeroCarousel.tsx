import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/254e2eb5-e707-4282-aa24-36d1a6a39a72/carousel-1-qz9k755-1762638996017.webp',
    title: 'Explorez des Mondes Infinis',
    subtitle: 'Découvrez notre collection de livres captivants.'
  },
  {
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/254e2eb5-e707-4282-aa24-36d1a6a39a72/carousel-2-s4ekon3-1762639003613.webp',
    title: 'Apprenez et Grandissez',
    subtitle: 'Nos formations sont conçues pour votre succès.'
  },
  {
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/254e2eb5-e707-4282-aa24-36d1a6a39a72/carousel-3-cubemhf-1762639010829.webp',
    title: 'Promotions Exclusives',
    subtitle: 'Profitez d\'offres spéciales sur une sélection d\'articles.'
  }
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              {slides[index].title}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              {slides[index].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition-colors z-10">
        <ChevronLeft size={32} />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition-colors z-10">
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/50'}`}></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;