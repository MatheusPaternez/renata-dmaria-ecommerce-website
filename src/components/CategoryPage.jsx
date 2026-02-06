import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Filter } from 'lucide-react';

const CategoryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [sortBy, setSortBy] = useState('featured');
    const [priceFilter, setPriceFilter] = useState('all');

    // Filter products by category
    const filteredProducts = useMemo(() => {
        let items = products.filter(
            p => p.category.toLowerCase() === (category?.toLowerCase() || '')
        );

        // Apply price filter
        if (priceFilter === 'low') {
            items = items.filter(p => p.price < 75);
        } else if (priceFilter === 'mid') {
            items = items.filter(p => p.price >= 75 && p.price < 150);
        } else if (priceFilter === 'high') {
            items = items.filter(p => p.price >= 150);
        }

        // Apply sorting
        if (sortBy === 'price-low') {
            items.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-high') {
            items.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'name') {
            items.sort((a, b) => a.name.localeCompare(b.name));
        }

        return items;
    }, [category, sortBy, priceFilter]);

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-serif uppercase tracking-wide mb-4">
                        {category}
                    </h1>
                    <p className="text-gray-600">
                        Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Filters */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-6 rounded-lg sticky top-20">
                            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                <Filter size={20} />
                                Filters
                            </h3>

                            {/* Price Filter */}
                            <div className="mb-8">
                                <h4 className="font-medium text-gray-900 mb-4">Price</h4>
                                <div className="space-y-3">
                                    {[
                                        { value: 'all', label: 'All Prices' },
                                        { value: 'low', label: 'Under $75' },
                                        { value: 'mid', label: '$75 - $150' },
                                        { value: 'high', label: '$150+' }
                                    ].map(option => (
                                        <label key={option.value} className="flex items-center cursor-pointer">
                                            <input
                                                type="radio"
                                                name="price"
                                                value={option.value}
                                                checked={priceFilter === option.value}
                                                onChange={(e) => setPriceFilter(e.target.value)}
                                                className="w-4 h-4"
                                            />
                                            <span className="ml-3 text-sm text-gray-700">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Sort Options */}
                            <div>
                                <h4 className="font-medium text-gray-900 mb-4">Sort</h4>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="featured">Featured</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="name">Name: A to Z</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="lg:col-span-3">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredProducts.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group"
                                    >
                                        {/* Product Image - Clickable */}
                                        <div
                                            onClick={() => navigate(`/product/${product.id}`)}
                                            className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 h-80 cursor-pointer"
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div
                                            onClick={() => navigate(`/product/${product.id}`)}
                                            className="cursor-pointer"
                                        >
                                            <h3 className="text-lg font-medium text-gray-900 mb-1 hover:text-indigo-600 transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-semibold text-gray-900">
                                                ${product.price.toFixed(2)}
                                            </span>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => addToCart(product)}
                                                className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors"
                                                title="Add to cart"
                                            >
                                                <ShoppingBag size={20} />
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No products found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
