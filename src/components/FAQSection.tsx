"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDownOutline } from "react-icons/io5";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "כמה זמן לוקח שטיפת רכב מלאה?",
    answer: "שטיפת רכב מלאה אורכת בין 30 ל-45 דקות, תלוי בגודל הרכב ובמצבו. שטיפה בסיסית יכולה להסתיים תוך 15-20 דקות בלבד.",
  },
  {
    id: 2,
    question: "האם אני צריך לקבוע תור מראש?",
    answer: "לא חובה לקבוע תור מראש, אך מומלץ בימים עמוסים כמו שישי ושבת. ניתן לקבוע תור דרך האתר או בטלפון 03-1234567.",
  },
  {
    id: 3,
    question: "אילו אמצעי תשלום מתקבלים?",
    answer: "אנו מקבלים מזומן, כרטיסי אשראי, אפליקציות תשלום כמו ביט ופייבוקס, וכן תשלום באמצעות אפליקציית העסק שלנו.",
  },
  {
    id: 4,
    question: "האם יש לכם חבילות מנויים?",
    answer: "כן, אנו מציעים מספר חבילות מנויים חודשיים ושנתיים עם הנחות משמעותיות. חבילת הזהב שלנו כוללת שטיפה מלאה פעם בשבוע במחיר מיוחד.",
  },
  {
    id: 5,
    question: "האם אתם משתמשים בחומרים ידידותיים לסביבה?",
    answer: "בהחלט! כל חומרי הניקוי שלנו הם ידידותיים לסביבה ומתכלים. אנו גם ממחזרים את המים בתהליך השטיפה כדי לחסוך במשאבים.",
  },
  {
    id: 6,
    question: "האם אתם מציעים שירות ניקוי פנים לרכב?",
    answer: "כן, אנו מציעים מגוון שירותי ניקוי פנים, החל מניקוי בסיסי ועד לטיפול מקיף הכולל ניקוי ריפודים, שטיחים, לוח מחוונים וטיפול בעור.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="faq-section" 
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50" 
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">שאלות נפוצות</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            התשובות לשאלות הנפוצות ביותר על שירותי שטיפת הרכב שלנו
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full text-right p-5 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={activeIndex === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-600"
                >
                  <IoChevronDownOutline size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 text-right">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="שטיפת רכב" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 text-right">
            <h3 className="text-xl font-bold text-gray-800 mb-2">יש לך שאלה שלא מופיעה כאן?</h3>
            <p className="text-gray-600 mb-4">
              צוות שירות הלקוחות שלנו זמין לענות על כל שאלה נוספת שיש לך.
            </p>
            <button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              צור קשר
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;