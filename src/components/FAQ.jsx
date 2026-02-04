import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Where is Renata Dmaria based?",
    answer: "We are proudly based in Brazil, a country known for its vibrant culture and rich textile history. All our operations, from design to dispatch, are coordinated from our headquarters in São Paulo."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide. Whether you are in New York, Paris, Tokyo, or anywhere else, we bring Brazilian elegance directly to your doorstep. International shipping times may vary depending on the destination."
  },
  {
    question: "Are your pieces manufactured in-house?",
    answer: "Absolutely. We take pride in our In-house Manufacturing. Every garment is designed and constructed in our own atelier. This allows us to maintain strict quality control, ensure ethical labor practices, and guarantee that every stitch meets our high standards of excellence."
  },
  {
    question: "What creates the unique style of the brand?",
    answer: "Renata Dmaria blends contemporary global trends with the effortless sophistication of Brazilian fashion. Our collections focus on timeless cuts, premium fabrics, and versatility, designed for the modern woman who values both style and substance."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is dispatched, you will receive a tracking number via email. You can use this number on our 'Track Order' page or the carrier's website to monitor your package's journey."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of delivery. Items must be unworn, unwashed, and with all original tags attached. For international returns, please contact our support team to guide you through the process."
  }
];

const FAQ = () => {
  // State to track which question is currently open
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase block mb-4"
          >
            Help Center
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-gray-900"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="border-t border-gray-200">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-10 flex justify-between items-center text-left hover:bg-gray-50 transition-colors px-2 group"
              >
                <span className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors font-serif">
                  {item.question}
                </span>
                <span className="text-gray-400 group-hover:text-black transition-colors ml-4">
                  {activeIndex === index ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-gray-500 font-light leading-relaxed px-2 text-md md:text-base">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;