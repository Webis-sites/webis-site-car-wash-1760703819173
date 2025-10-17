'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCarSide, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

const CarWashCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="car-wash-cta" 
      dir="rtl" 
      className="relative w-full min-h-[500px] overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="מכונית נקייה ומבריקה לאחר שטיפה"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-end justify-center h-full">
        <div className="max-w-lg text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              id="cta-heading" 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              הרכב שלך ראוי לטיפול מושלם
            </h2>
            
            <p className="text-lg text-white/90 mb-8">
              שטיפת רכב מקצועית עם תוצאות מבריקות. אנו משתמשים בחומרים איכותיים ביותר לשמירה על צבע הרכב והברק שלו לאורך זמן.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-8 border-r-4 border-[#10b981]">
              <p className="text-white font-medium">
                <span className="text-[#10b981] font-bold">✓</span> מחיר מיוחד לשטיפה ראשונה
                <br />
                <span className="text-[#10b981] font-bold">✓</span> זמינות גבוהה - הזמנה מהירה
                <br />
                <span className="text-[#10b981] font-bold">✓</span> שירות מקצועי ואדיב
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <motion.button
                className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center gap-3 transition-colors duration-300"
                animate={{ 
                  boxShadow: ['0px 0px 0px rgba(59, 130, 246, 0)', '0px 0px 20px rgba(59, 130, 246, 0.5)', '0px 0px 0px rgba(59, 130, 246, 0)'] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                aria-label="הזמן שטיפת רכב עכשיו"
              >
                הזמן עכשיו
                <FaArrowLeft className="text-sm" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Car Icon */}
        <motion.div 
          className="absolute left-8 bottom-8 text-white/80"
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
        >
          <FaCarSide className="text-5xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default CarWashCTA;