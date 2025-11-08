import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Send } from 'lucide-react';
import { siteConfig } from '../config/site';

const Footer = () => {
  return (
    <footer className="bg-light-gray dark:bg-gray-800 text-dark-gray dark:text-gray-300 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-dark-gray dark:text-white">{siteConfig.name}</h3>
            <p className="text-sm">Votre destination pour les meilleurs livres et formations en ligne.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-primary-blue dark:hover:text-primary-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary-blue dark:hover:text-primary-blue transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary-blue dark:hover:text-primary-blue transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-dark-gray dark:text-white">Catégories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/livres" className="hover:text-primary-blue dark:hover:text-primary-blue transition-colors">Livres</Link></li>
              <li><Link to="/formations" className="hover:text-primary-blue dark:hover:text-primary-blue transition-colors">Formations</Link></li>
              <li><Link to="/promotions" className="hover:text-primary-blue dark:hover:text-primary-blue transition-colors">Promotions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-dark-gray dark:text-white">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary-blue dark:hover:text-primary-blue transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-primary-blue dark:hover:text-primary-blue transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-dark-gray dark:text-white">Newsletter</h3>
            <p className="text-sm mb-2">Abonnez-vous pour recevoir les dernières nouveautés.</p>
            <form className="flex items-center">
              <input type="email" placeholder="Votre email" className="w-full px-3 py-2 text-sm rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-blue" />
              <button type="submit" className="bg-primary-blue text-white p-2 rounded-r-md hover:bg-opacity-80 transition-colors">
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 py-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;