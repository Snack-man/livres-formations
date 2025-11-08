import { Toaster } from 'sonner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { LivresPage } from './pages/LivresPage';
import { FormationsPage } from './pages/FormationsPage';
import { PromotionsPage } from './pages/PromotionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-dark-gray">
        <Toaster position="bottom-right" />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/livres" element={<LivresPage />} />
            <Route path="/formations" element={<FormationsPage />} />
            <Route path="/promotions" element={<PromotionsPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}