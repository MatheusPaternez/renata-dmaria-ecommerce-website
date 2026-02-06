import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import dress from '../assets/floral-wrap-dress.webp'
import pants from '../assets/wide-leg-linen-pants.webp'
import blouses from '../assets/silk-blouse.jpg'
import sale from '../assets/satin-slip-dress-sale.jpg'
import accessories from '../assets/gold-hoop-earrings.webp'

const categories = [
    {
        name: 'Dresses',
        image: dress,
        path: '/dresses'
    },
    {
        name: 'Blouses',
        image: blouses,
        path: '/blouses'
    },
    {
        name: 'Pants',
        image: pants,
        path: '/pants'
    },
    {
        name: 'Accessories',
        image: accessories,
        path: '/accessories'
    },
    {
        name: 'Sale',
        image: sale,
        path: '/sale'
    },
];

export default function CategorySection() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">
                    Categories
                </h2>
                <div className="w-12 h-px bg-black mx-auto mt-6" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative aspect-[3/4] overflow-hidden bg-gray-100"
                    >
                        <Link to={category.path} className="absolute inset-0 w-full h-full">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-lg md:text-xl tracking-[0.2em] uppercase font-light">
                                    {category.name}
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}