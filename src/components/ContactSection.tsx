'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: 'email@gmail.com',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'נא להזין שם';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'נא להזין אימייל';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'נא להזין כתובת אימייל תקינה';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'נא להזין הודעה';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: 'email@gmail.com',
          message: '',
        });
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        // Reset status after 3 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 3000);
      }
    }
  };

  // Business information
  const businessInfo = {
    phone: '054-123-4567',
    address: 'רחוב הרצל 123, תל אביב',
    hours: 'ראשון-חמישי: 8:00-20:00, שישי: 8:00-14:00',
  };

  return (
    <section id="contact-section" className="py-16 bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">צור קשר</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            יש לך שאלות? אנחנו כאן לעזור. מלא את הטופס או השתמש בפרטי הקשר שלנו.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-right">השאר הודעה</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-700 text-right font-medium">
                  שם מלא
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 text-right ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm text-right mt-1">
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-700 text-right font-medium">
                  אימייל
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 text-right ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm text-right mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-gray-700 text-right font-medium">
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 text-right ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="text-red-500 text-sm text-right mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-l from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    שולח...
                  </span>
                ) : (
                  'שלח הודעה'
                )}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-right"
                  role="alert"
                >
                  <strong className="font-bold">תודה! </strong>
                  <span className="block sm:inline">הודעתך נשלחה בהצלחה.</span>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-right"
                  role="alert"
                >
                  <strong className="font-bold">שגיאה! </strong>
                  <span className="block sm:inline">אירעה שגיאה בשליחת ההודעה. אנא נסה שוב.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            {/* Business Info */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-right">פרטי התקשרות</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-end space-x-4 space-x-reverse">
                  <div className="text-right">
                    <p className="text-gray-700 font-medium">טלפון</p>
                    <p className="text-gray-600">{businessInfo.phone}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaPhone className="text-blue-500 h-5 w-5" />
                  </div>
                </div>
                
                <div className="flex items-center justify-end space-x-4 space-x-reverse">
                  <div className="text-right">
                    <p className="text-gray-700 font-medium">כתובת</p>
                    <p className="text-gray-600">{businessInfo.address}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-green-500 h-5 w-5" />
                  </div>
                </div>
                
                <div className="flex items-center justify-end space-x-4 space-x-reverse">
                  <div className="text-right">
                    <p className="text-gray-700 font-medium">שעות פעילות</p>
                    <p className="text-gray-600">{businessInfo.hours}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaClock className="text-blue-500 h-5 w-5" />
                  </div>
                </div>
                
                <div className="flex items-center justify-end space-x-4 space-x-reverse">
                  <div className="text-right">
                    <p className="text-gray-700 font-medium">אימייל</p>
                    <p className="text-gray-600">info@carwash.co.il</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <FaEnvelope className="text-green-500 h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 h-64 relative overflow-hidden">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-right">המיקום שלנו</h3>
              <div className="relative h-full w-full rounded-md overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1577086664693-894d8405334a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="מפת מיקום שטיפת הרכב"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white text-blue-500 px-4 py-2 rounded-md font-medium cursor-pointer shadow-md"
                  >
                    פתח במפות
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;