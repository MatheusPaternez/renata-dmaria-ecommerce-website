import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navLinks = [
        { name: 'Dresses', path: '/dresses' },
        { name: 'Blouses', path: '/blouses' },
        { name: 'Pants', path: '/pants' },
        { name: 'Accessories', path: '/accessories' },
        { name: 'Sale', path: '/sale' },
    ];

    const { cart } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <header className="w-full flex flex-col font-sans relative">
            {/* Top Bar */}
            <div className="bg-black text-white text-xs py-2 text-center tracking-widest uppercase">
                Free shipping for orders over $99
            </div>

            {/* Main Navigation */}
            <nav className="flex items-center justify-between px-6 md:px-8 py-4 bg-white shadow-sm z-50">
                <div className="flex-1 flex items-center gap-4">
                    <button
                        onClick={() => setMobileOpen(prev => !prev)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                        aria-label="Open menu"
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <Link to="/">
                        <h1 className="text-2xl tracking-[0.2em] font-serif uppercase text-gray-900">
                            Renata Dmaria
                        </h1>
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex gap-8 flex-1 justify-center">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Icon cart */}
                <div className="flex-1 flex justify-end gap-6 items-center text-gray-700">
                    <Link to="/cart">
                        <motion.div className="relative cursor-pointer" whileHover={{ scale: 1.1 }}>
                            <ShoppingBag size={20} />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                                    {totalItems}
                                </span>
                            )}
                        </motion.div>
                    </Link>
                </div>
            </nav>

            {/* Mobile menu panel */}
            {mobileOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-40">
                    <ul className="flex flex-col divide-y">
                        {navLinks.map(link => (
                            <li key={link.name} className="px-6 py-4">
                                <Link
                                    to={link.path}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-gray-700 uppercase tracking-wide text-sm"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className="px-6 py-4">
                            <Link
                                to="/cart"
                                onClick={() => setMobileOpen(false)}
                                className="block text-gray-700 uppercase tracking-wide text-sm"
                            >
                                Cart ({totalItems})
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;