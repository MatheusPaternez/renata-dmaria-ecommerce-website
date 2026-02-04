import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    const navLinks = [
        { name: 'Dresses', path: '/dresses' },
        { name: 'Blouses', path: '/blouses' },
        { name: 'Pants', path: '/pants' },
        { name: 'Accessories', path: '/accessories' },
        { name: 'Sale', path: '/sale' },
    ];

    return (
        <header className="w-full flex flex-col font-sans">
            {/* Top Bar */}
            <div className="bg-black text-white text-xs py-2 text-center tracking-widest uppercase">
                Free shipping for orders over $99
            </div>

            {/* Main Navigation */}
            <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm relative z-50">
                {/* Logo */}
                <div className="flex-1">
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

                {/* Icons */}
                <div className="flex-1 flex justify-end gap-6 items-center text-gray-700">
                    <motion.button whileHover={{ scale: 1.1 }}>
                        <Search size={20} />
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.1 }}>
                        <User size={20} />
                    </motion.button>

                    <motion.div className="relative cursor-pointer" whileHover={{ scale: 1.1 }}>
                        <ShoppingBag size={20} />
                        <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                            0
                        </span>
                    </motion.div>
                </div>
            </nav>
        </header>
    );
};

export default Header;