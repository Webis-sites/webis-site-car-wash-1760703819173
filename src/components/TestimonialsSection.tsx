'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Image from 'next/image';

// Define testimonial type
interface Testimonial {
  id: number;
  name: string;
  rating: number;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "דוד כהן",
    rating: 5,
    quote: "שירות מעולה! המכונית שלי נראית כמו חדשה אחרי הטיפול. אני ממליץ בחום על שטיפת הרכב הזו לכל מי שמחפש איכות ומקצועיות.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "מיכל לוי",
    rating: 4,
    quote: "צוות אדיב ומקצועי. הרכב שלי קיבל טיפול מסור ויסודי. אחזור בהחלט בפעם הבאה!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "יוסי אברהם",
    rating: 5,
    quote: "מחירים הוגנים ותוצאות מצוינות. הרכב שלי מבריק כמו ביום שקניתי אותו. שירות מהיר ויעיל.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "רונית שמעון",
    rating: 5,
    quote: "אני לקוחה קבועה כבר שנתיים. תמיד יוצאת מרוצה מהשירות והתוצאות. הצוות מקצועי ואכפתי.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const testimonialsPerView = isMobile ? 1 : 3;

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay]);

  // Navigation functions
  const nextSlide = useCallback((): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - testimonialsPerView ? 0 : prevIndex + 1
    );
  }, [testimonialsPerView]);

  const prevSlide = useCallback((): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - testimonialsPerView : prevIndex - 1
    );
  }, [testimonialsPerView]);

  // Pause autoplay on hover
  const handleMouseEnter = (): void => {
    setAutoplay(false);
  };

  const handleMouseLeave = (): void => {
    setAutoplay(true);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">לקוחות מספרים</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">מה לקוחותינו אומרים על השירות שלנו</p>
        </div>
        
        <div className="relative max-w-6xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
            <button 
              onClick={prevSlide}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-primary" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
            <button 
              onClick={nextSlide}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-primary" />
            </button>
          </div>
          
          {/* Testimonials slider */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div 
                className="flex"
                initial={{ opacity: 1 }}
                animate={{ x: -currentIndex * (100 / testimonialsPerView) + '%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full md:w-1/3 flex-shrink-0 px-4"
                    style={{ direction: 'rtl' }}
                  >
                    <motion.div 
                      className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <blockquote className="flex-1 mb-4">
                        <p className="text-gray-600 italic">״{testimonial.quote}״</p>
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;