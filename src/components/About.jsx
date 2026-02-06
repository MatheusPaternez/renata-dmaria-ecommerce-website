import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png';
import BrazilianCulture from '../assets/brazilian-culture.avif'
import BackgroundAbout from '../assets/background-about.avif'

const About = () => {
  // Animation variants for scroll reveals
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-white font-sans w-full overflow-hidden">

      <section className="relative w-full h-[60vh] md:h-[70vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundAbout})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="uppercase tracking-[0.3em] text-xs md:text-sm mb-4"
          >
            Since 2015
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif tracking-wide"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            className="md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">
              Brazilian Soul, Global Spirit
            </h2>
            <div className="w-12 h-0.5 bg-black mb-8"></div>
            <p className="text-gray-600 font-light leading-relaxed mb-6 text-lg">
              Born in the vibrant heart of São Paulo, <strong>Renata Dmaria</strong> embodies the dual nature of the modern woman: strong yet delicate, classic yet contemporary.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              We draw inspiration from the effortless elegance of Brazilian tropical modernism and the sharp lines of metropolitan architecture. While our roots are deeply planted in Brazil, our vision knows no borders. We design for the woman who walks the streets of Paris, works in the skyscrapers of New York, and relaxes on the beaches of Rio.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={BrazilianCulture}
              alt="Model in Brazilian setting"
              className="w-full h-auto object-cover shadow-xl"
            />
            <div className="absolute -z-10 top-8 -right-8 w-full h-full border border-gray-200 hidden md:block" />
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <motion.div
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-900">
                The Atelier
              </h2>
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
                In-House Manufacturing
              </h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6 text-lg">
                In an era of fast fashion, we choose the path of patience and precision. Every piece bearing the Renata Dmaria label is created in our own atelier.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                By controlling every step of the manufacturing process—from the initial sketch to the final stitch—we guarantee superior quality and ethical labor practices. Our seamstresses are artisans, and our fabrics are hand-selected for their touch, drape, and durability.
              </p>
            </motion.div>

            <motion.div
              className="md:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={Logo}
                alt="Fabric texture"
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-8 py-32 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <p className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-8 leading-snug">
            "Fashion is not just about what you wear, but how you live. We create clothes that allow you to live beautifully, wherever you are in the world."
          </p>
          <div className="flex flex-col items-center">
            <span className="text-sm uppercase tracking-[0.2em] font-bold">Renata Dmaria</span>
            <span className="text-xs text-gray-400 mt-2">Founder & Creative Director</span>

          </div>
        </motion.div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-serif mb-2">Contact</h2>
            <p className="text-gray-600">Have a question or want to collaborate? Send us a message and we'll get back to you shortly.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input aria-label="Your name" type="text" placeholder="Your name" className="p-3 border border-gray-200 bg-white" />
            <input aria-label="Your email" type="email" placeholder="Your email" className="p-3 border border-gray-200 bg-white" />
            <textarea aria-label="Message" placeholder="Message" className="md:col-span-2 p-3 border border-gray-200 bg-white h-32" />
            <button type="submit" className="md:col-span-2 bg-black text-white py-3 px-6 hover:bg-gray-800">Send Message</button>
          </motion.form>
        </div>
      </section>

    </div>
  );
};

export default About;