import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    {
        name: 'Dresses',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
    },
    {
        name: 'Blouses',
        image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80',
    },
    {
        name: 'Pants',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80',
    },
    {
        name: 'Acessories',
        image: 'https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=600&q=80',
    },
    {
        name: 'Sale',
        image: 'https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=600&q=80',
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
                    <motion.a
                        key={category.name}
                        href="#"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative aspect-[3/4] overflow-hidden bg-gray-100"
                    >
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
                    </motion.a>
                ))}
            </div>
        </section>
    );
}