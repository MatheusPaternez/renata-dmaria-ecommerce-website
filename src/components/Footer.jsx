import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, ArrowRight, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    // Mesmos links do Header para consistência
    const shopLinks = [
        { name: 'Dresses', path: '/dresses' },
        { name: 'Blouses', path: '/blouses' },
        { name: 'Pants', path: '/pants' },
        { name: 'Accessories', path: '/accessories' },
        { name: 'Sale', path: '/sale' },
    ];

    const infoLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Privacy Policy', path: '/privacy' },
    ];

    return (
        <footer className="bg-black text-white pt-16 pb-8 font-sans border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-8">

                {/* Newsletter Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-12 border-b border-gray-800 gap-8">
                    <div className="max-w-md">
                        <h3 className="text-2xl font-serif mb-4 tracking-wide">Join Our Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-6 font-light">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <div className="flex items-center border-b border-white py-2 group focus-within:border-gray-400 transition-colors">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-gray-500 font-light"
                            />
                            <motion.button
                                whileHover={{ x: 5 }}
                                className="flex-shrink-0 text-sm text-white py-1 px-2"
                            >
                                <ArrowRight size={20} strokeWidth={1.5} />
                            </motion.button>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <SocialIcon icon={<Instagram size={20} />} />
                        <SocialIcon icon={<Facebook size={20} />} />
                        <SocialIcon icon={<Twitter size={20} />} />
                        <SocialIcon icon={<Mail size={20} />} />
                    </div>
                </div>

                {/* Main Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-sm">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <h2 className="text-xl font-serif uppercase tracking-[0.2em] mb-6">
                            Renata Dmaria
                        </h2>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Timeless elegance for the modern woman.
                            Designed in Brazil, worn worldwide.
                        </p>
                    </div>

                    {/* Shop Column */}
                    <div>
                        <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-gray-500">Shop</h4>
                        <ul className="space-y-3">
                            {shopLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-white transition-colors font-light"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information Column */}
                    <div>
                        <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-gray-500">Information</h4>
                        <ul className="space-y-3">
                            {infoLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-300 hover:text-white transition-colors font-light"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact / Address */}
                    <div>
                        <h4 className="uppercase tracking-widest text-xs font-bold mb-6 text-gray-500">Customer Care</h4>
                        <p className="text-gray-300 font-light mb-2">Mon - Fri: 9:00 - 18:00</p>
                        <p className="text-gray-300 font-light mb-4">+55 11 99999-9999</p>
                        <p className="text-gray-300 font-light">
                            Av. Paulista, 1000<br />
                            São Paulo - SP, Brasil
                        </p>
                    </div>
                </div>

                {/* Bottom Copyright & Payment */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Renata Dmaria. All rights reserved.
                    </p>

                    <div className="flex gap-2">
                        {/* Payment Placeholders (using text or simple divs for generic cards) */}
                        <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-[10px] tracking-tighter text-gray-400">VISA</div>
                        <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-[10px] tracking-tighter text-gray-400">MC</div>
                        <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-[10px] tracking-tighter text-gray-400">AMEX</div>
                        <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-[10px] tracking-tighter text-gray-400">PIX</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Helper component for Social Icons to reduce repetition
const SocialIcon = ({ icon }) => (
    <motion.a
        href="#"
        whileHover={{ y: -3, color: "#fff" }}
        className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:border-gray-600 transition-colors"
    >
        {icon}
    </motion.a>
);

export default Footer;