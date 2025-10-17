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

  // Render stars based on rating
  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={`inline-block ${index < rating ? 'text-secondary' : 'text-gray-300'}`} 
        aria-hidden="true"
      />
    ));
  };

  // Visible testimonials based on current index and how many we show per view
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + testimonialsPerView
  );

  return (
    <section 
      id="testimonials-section" 
      dir="rtl" 
      className="py-16 bg-gray-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="testimonials-heading" 
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            מה הלקוחות שלנו אומרים
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-md text-primary hover:text-white hover:bg-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            aria-label="הקודם"
          >
            <FaChevronRight className="text-lg" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-md text-primary hover:text-white hover:bg-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            aria-label="הבא"
          >
            <FaChevronLeft className="text-lg" />
          </button>

          {/* Testimonials carousel */}
          <div className="overflow-hidden px-4 md:px-12">
            <AnimatePresence initial={false} mode="wait">
              <motion.div 
                key={currentIndex}
                className="flex flex-wrap -mx-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {visibleTestimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className={`px-4 ${isMobile ? 'w-full' : 'w-1/3'} mb-8`}
                  >
                    <motion.div 
                      className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div className="text-right">
                          <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                          <div className="flex justify-end mt-1" aria-label={`דירוג ${testimonial.rating} מתוך 5 כוכבים`}>
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-gray-600 text-right flex-grow">
                        <p className="before:content-['"'] after:content-['"'] before:text-primary after:text-primary before:text-2xl after:text-2xl">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: testimonials.length - testimonialsPerView + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`mx-1 w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary ${
                  currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`עבור לעדות ${index + 1}`}
                aria-current={currentIndex === index ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;