"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <footer 
      id="main-footer" 
      className="bg-gray-900 text-white w-full" 
      dir="rtl"
      aria-label="פוטר של שטיפת מכוניות"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section with logo and description */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-b border-gray-800 pb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-right">
            <div className="flex items-center justify-end mb-4">
              <div className="mr-4">
                <h2 className="text-2xl font-bold text-white">שטיפת מכוניות</h2>
                <p className="text-gray-400 mt-1">שירות מקצועי ואיכותי</p>
              </div>
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-primary">
                <Image
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
                  alt="לוגו שטיפת מכוניות"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-gray-400 text-right">
              אנו מציעים שירותי שטיפת מכוניות ברמה הגבוהה ביותר, עם דגש על פרטים ושימוש בחומרים איכותיים. 
              הצוות המקצועי שלנו מחויב לספק לכם את השירות הטוב ביותר ולהחזיר את הברק לרכב שלכם.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-xl font-semibold mb-4 text-white">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-end">
                <span className="text-gray-400 mr-2">רח׳ הרצל 123, תל אביב</span>
                <FaMapMarkerAlt className="text-primary" />
              </li>
              <li className="flex items-center justify-end">
                <span className="text-gray-400 mr-2">03-1234567</span>
                <FaPhone className="text-primary" />
              </li>
              <li className="flex items-center justify-end">
                <span className="text-gray-400 mr-2">info@carwash.co.il</span>
                <FaEnvelope className="text-primary" />
              </li>
              <li className="flex items-center justify-end">
                <span className="text-gray-400 mr-2">050-1234567</span>
                <FaWhatsapp className="text-primary" />
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Middle section with links */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 border-b border-gray-800 pb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-lg font-semibold mb-4 text-white">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  שירותים
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-primary transition-colors">
                  מחירון
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  צור קשר
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-lg font-semibold mb-4 text-white">שירותים</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/exterior" className="text-gray-400 hover:text-primary transition-colors">
                  שטיפה חיצונית
                </Link>
              </li>
              <li>
                <Link href="/services/interior" className="text-gray-400 hover:text-primary transition-colors">
                  ניקוי פנימי
                </Link>
              </li>
              <li>
                <Link href="/services/polish" className="text-gray-400 hover:text-primary transition-colors">
                  פוליש וציפוי
                </Link>
              </li>
              <li>
                <Link href="/services/premium" className="text-gray-400 hover:text-primary transition-colors">
                  חבילות פרימיום
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-lg font-semibold mb-4 text-white">שעות פעילות</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">08:00 - 19:00</span>
                <span className="text-gray-400">ראשון - חמישי</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">08:00 - 14:00</span>
                <span className="text-gray-400">שישי</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">סגור</span>
                <span className="text-gray-400">שבת</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="text-right">
            <h3 className="text-lg font-semibold mb-4 text-white">הצטרפו אלינו</h3>
            <p className="text-gray-400 mb-4">עקבו אחרינו ברשתות החברתיות לעדכונים ומבצעים</p>
            <div className="flex space-x-4 space-x-reverse justify-end">
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="עקבו אחרינו באינסטגרם"
              >
                <FaInstagram className="text-white text-xl" />
              </motion.a>
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="עקבו אחרינו בפייסבוק"
              >
                <FaFacebook className="text-white text-xl" />
              </motion.a>
              <motion.a 
                href="https://wa.me/9721234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="צרו איתנו קשר בוואטסאפ"
              >
                <FaWhatsapp className="text-white text-xl" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom section with copyright */}
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <p className="text-gray-500 text-sm">
              © {currentYear} שטיפת מכוניות. כל הזכויות שמורות.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;