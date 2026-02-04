import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CategorySection from './CategorySection';
import FAQ from './FAQ';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
        subtitle: "Dresses",
        title: "New Collection"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
        subtitle: "SUMMER ESSENTIALS",
        title: "Elegant Blouses"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
        subtitle: "LIMITED EDITION",
        title: "Signature Style Acessories"
    }
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 5000); // 5 sec
        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <>
        <section className="relative w-full h-[85vh] overflow-hidden bg-gray-100">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Background Image with Overlay */}
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 drop-shadow-md">
                <motion.p
                    key={`sub-${currentIndex}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium"
                >
                    {slides[currentIndex].subtitle}
                </motion.p>

                <motion.h2
                    key={`title-${currentIndex}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-5xl md:text-7xl font-serif mb-10 tracking-wide"
                >
                    {slides[currentIndex].title}
                </motion.h2>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20"
            >
                <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20"
            >
                <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Pagination Dots for Slides */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </section>
        <CategorySection />
        <FAQ/>
        </>
    );
};

export default Home;