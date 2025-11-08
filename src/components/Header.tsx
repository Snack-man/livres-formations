import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { siteConfig } from '../config/site';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 dark:bg-dark-gray/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-dark-gray dark:text-white">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="text-dark-gray dark:text-gray-300 hover:text-primary-blue dark:hover:text-primary-blue transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-dark-gray dark:text-gray-300">
            <ShoppingCart />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="text-dark-gray dark:text-gray-300">
            <User />
          </motion.button>
          <div className="md:hidden">
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-dark-gray dark:text-gray-300">
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-gray"
          >
            <nav className="flex flex-col items-center space-y-4 p-4 border-t border-gray-200 dark:border-gray-700">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-dark-gray dark:text-gray-300 hover:text-primary-blue dark:hover:text-primary-blue transition-colors text-lg"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;