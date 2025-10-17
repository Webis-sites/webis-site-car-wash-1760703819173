'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCarSide, FaSprayCan, FaBrush, FaWater, FaWind, FaClipboardCheck } from 'react-icons/fa';
import Image from 'next/image';

// Define the car wash process steps
interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const CarWashProcess: React.FC = () => {
  // Car wash process steps data
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "שטיפה מקדימה",
      description: "הסרת לכלוך גס ואבק מהרכב באמצעות לחץ מים",
      icon: <FaWater className="text-2xl text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "מריחת סבון",
      description: "כיסוי הרכב בשכבת סבון מיוחד להסרת שומנים וכתמים",
      icon: <FaSprayCan className="text-2xl text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1605618313023-d8b0af2f1f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "קרצוף",
      description: "ניקוי יסודי של כל משטחי הרכב באמצעות מברשות מיוחדות",
      icon: <FaBrush className="text-2xl text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "שטיפה",
      description: "הסרת כל שאריות הסבון מהרכב באמצעות מים נקיים",
      icon: <FaWater className="text-2xl text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "ייבוש",
      description: "ייבוש הרכב באמצעות מפוחים ומגבות מיקרופייבר איכותיות",
      icon: <FaWind className="text-2xl text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "בדיקה סופית",
      description: "בחינה מדוקדקת של הרכב לוודא שהוא נקי ומבריק",
      icon: <FaClipboardCheck className="text-2xl text-primary" />,
      imageUrl: "https://images.unsplash.com/photo-1635770311293-b9f308fb0649?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="car-wash-process" className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            תהליך השטיפה שלנו
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            אנו מקפידים על תהליך שטיפה מקצועי בשישה שלבים להבטיח שהרכב שלך יהיה נקי ומבריק
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step) => (
            <motion.div 
              key={step.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={step.imageUrl}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white">
                        {step.id}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-right flex-1">
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                  <div className="mt-1 text-primary">
                    {step.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block">
            <div className="relative overflow-hidden">
              <motion.div 
                className="bg-primary text-white py-3 px-8 rounded-lg font-medium text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                הזמן שטיפה עכשיו
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-secondary rounded-lg"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ zIndex: -1 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarWashProcess;