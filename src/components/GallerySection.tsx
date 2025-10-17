'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoExpand } from 'react-icons/io5';

// Types for our gallery items
interface GalleryItem {
  id: string;
  beforeImage: string;
  afterImage: string;
  caption: string;
}

// Sample gallery data with before/after car wash images
const galleryItems: GalleryItem[] = [
  {
    id: '1',
    beforeImage: 'https://images.unsplash.com/photo-1605618313023-d8f0e2e0129b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'רכב ספורט - לפני ואחרי טיפול מקצועי',
  },
  {
    id: '2',
    beforeImage: 'https://images.unsplash.com/photo-1563720223809-b9c9c4f47d76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'רכב משפחתי - ניקוי יסודי',
  },
  {
    id: '3',
    beforeImage: 'https://images.unsplash.com/photo-1583836631333-f7edccc231d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'רכב יוקרה - טיפול פרימיום',
  },
  {
    id: '4',
    beforeImage: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    caption: 'רכב שטח - ניקוי מקצועי',
  },
];

const CarWashGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isViewingAfter, setIsViewingAfter] = useState<boolean>(true);

  const openLightbox = useCallback((item: GalleryItem) => {
    setSelectedItem(item);
    setIsViewingAfter(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const toggleBeforeAfter = useCallback(() => {
    setIsViewingAfter((prev) => !prev);
  }, []);

  return (
    <section id="car-wash-gallery" className="py-16 px-4 md:px-8 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-right mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            התוצאות מדברות בעד עצמן
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mr-auto ml-0">
            הצצה לתהליך הניקוי המקצועי שלנו. גלול כדי לראות את ההבדל המדהים בין לפני ואחרי.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-64 md:h-80 w-full cursor-pointer group" onClick={() => openLightbox(item)}>
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full relative overflow-hidden">
                    <Image
                      src={item.beforeImage}
                      alt={`לפני - ${item.caption}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute top-2 right-2 bg-gray-900 bg-opacity-75 text-white px-2 py-1 text-sm rounded">
                      לפני
                    </div>
                  </div>
                  <div className="w-1/2 h-full relative overflow-hidden">
                    <Image
                      src={item.afterImage}
                      alt={`אחרי - ${item.caption}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute top-2 right-2 bg-[#10b981] text-white px-2 py-1 text-sm rounded">
                      אחרי
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-[#3b82f6] bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="opacity-0 group-hover:opacity-100 bg-white p-2 rounded-full"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <IoExpand className="text-[#3b82f6] text-xl" />
                  </motion.div>
                </motion.div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-right">{item.caption}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[80vh]">
                <Image
                  src={isViewingAfter ? selectedItem.afterImage : selectedItem.beforeImage}
                  alt={selectedItem.caption}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
                <div className="absolute top-4 right-4 bg-gray-900 bg-opacity-75 text-white px-3 py-1 rounded-full text-sm">
                  {isViewingAfter ? 'אחרי' : 'לפני'}
                </div>
              </div>
              
              <div className="absolute top-2 left-2">
                <button
                  onClick={closeLightbox}
                  className="bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors"
                  aria-label="סגור"
                >
                  <IoClose className="text-2xl" />
                </button>
              </div>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={toggleBeforeAfter}
                  className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-2 rounded-full transition-colors"
                >
                  {isViewingAfter ? 'הצג לפני' : 'הצג אחרי'}
                </button>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded text-right">
                <p>{selectedItem.caption}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CarWashGallery;