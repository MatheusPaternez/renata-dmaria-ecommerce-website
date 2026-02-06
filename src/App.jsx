import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import CategoryPage from './components/CategoryPage';
import ProductDetail from './components/ProductDetail';
import CartView from './components/CartView';

import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartView />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/:category" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;