'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCarSide, FaSprayCan, FaTools, FaStar } from 'react-icons/fa';
import Image from 'next/image';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  price,
  imageSrc,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 text-right">
        <div className="flex justify-between items-center mb-4">
          <div className="text-3xl text-primary-500">{price}</div>
          <div className="text-3xl text-secondary-500">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <motion.button
          className="mt-4 w-full bg-primary-500 text-white py-2 px-4 rounded-md hover:bg-primary-600 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          הזמן עכשיו
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      icon: <FaCarSide />,
      title: "שטיפה בסיסית",
      description: "שטיפה חיצונית, ניקוי פנימי בסיסי וייבוש ידני. מושלם לניקיון שגרתי.",
      price: "₪49",
      imageSrc: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaSprayCan />,
      title: "שטיפה פרימיום",
      description: "שטיפה חיצונית מקיפה, ניקוי פנימי מעמיק, וקס הגנה וטיפול בצמיגים.",
      price: "₪89",
      imageSrc: "https://images.unsplash.com/photo-1605618313023-d8b0af2f1f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaTools />,
      title: "דיטיילינג דלוקס",
      description: "טיפול מקיף הכולל פוליש, וקס, ניקוי מנוע, ניקוי ריפודים והגנה על עור.",
      price: "₪199",
      imageSrc: "https://images.unsplash.com/photo-1600322305530-45714a0bc945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaStar />,
      title: "חבילת VIP",
      description: "הטיפול המושלם לרכב שלך. כולל דיטיילינג מלא, פוליש קרמי והגנה לשנה.",
      price: "₪349",
      imageSrc: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="services-section" className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">השירותים שלנו</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון רחב של שירותי שטיפת רכב ודיטיילינג כדי לשמור על הרכב שלך במצב מושלם
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;