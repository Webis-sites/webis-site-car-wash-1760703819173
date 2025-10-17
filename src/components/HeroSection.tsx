'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section 
      id="hero-section" 
      className="relative w-full h-[90vh] min-h-[600px] overflow-hidden"
      dir="rtl"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="מכונית נוצצת בשטיפת רכב"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col justify-center h-full text-right"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            מכוניות
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-lg"
            variants={itemVariants}
          >
            השירותים הטובים ביותר
          </motion.p>
          
          <motion.div
            variants={itemVariants}
          >
            <motion.button
              className="flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white py-3 px-8 rounded-lg text-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              aria-label="הזמן עכשיו"
            >
              <FaCalendarAlt className="text-lg" />
              <span>הזמן עכשיו</span>
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-8 right-4 sm:right-6 lg:right-8 flex flex-col items-end"
            variants={itemVariants}
          >
            <span className="text-white/80 text-sm mb-1">שטיפת רכב מקצועית</span>
            <div className="flex gap-2">
              <span className="h-1 w-10 bg-[#10b981] rounded-full"></span>
              <span className="h-1 w-6 bg-[#3b82f6] rounded-full"></span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;