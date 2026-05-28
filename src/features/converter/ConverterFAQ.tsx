import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is a Precision Units Converter?",
    answer: "A Precision Units Converter is a sophisticated digital calculation tool designed to translate measurements between different systems of units with extreme mathematical accuracy. Our tool supports both Metric and Imperial systems, covering dimensions like length, weight, temperature, and advanced scientific units for engineering and business needs."
  },
  {
    question: "How do I convert Metric to Imperial units accurately?",
    answer: "To convert Metric to Imperial units accurately, our converter uses high-fidelity scaling factors defined by international standards. Simply select your input category (e.g., Length), choose the Metric unit (like Centimeters) in the 'From' field, and the Imperial unit (like Inches) in the 'To' field. The result is calculated instantly with zero latency."
  },
  {
    question: "Are these unit conversions suitable for engineering projects?",
    answer: "Yes, our Precision Units Converter is engineered with the IEEE 754 standard for floating-point arithmetic, making it ideal for scientific research, engineering designs, and technical documentation. It handles complex conversions like Force, Torque, and Viscosity, ensuring that your enterprise-level calculations remain reliable."
  },
  {
    question: "Can I convert currency and cryptocurrency in real-time?",
    answer: "Absolutely. Our multi-faceted converter integrates real-time exchange rates for global fiat currencies and top-tier cryptocurrencies. By fetching live market data, we provide up-to-the-minute conversion rates for business transactions, digital asset management, and international trade analysis."
  },
  {
    question: "Does this unit converter work offline?",
    answer: "Our tool caches essential conversion algorithms and scaling factors locally, allowing you to perform standard physical unit conversions (like weight, area, and volume) without an active internet connection. Real-time data like currency and crypto rates require a momentary connection to refresh the latest market values."
  },
  {
    question: "Why should I use a professional unit generator instead of basic math?",
    answer: "A professional unit generator eliminates the human error associated with manual calculations and ensures consistency across different measurement standards. It provides a centralized ecosystem for over 40+ unit categories, saves time for professionals, and offers a polished user interface optimized for both desktop and mobile efficiency."
  }
];

export const ConverterFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-24 mb-16 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Technical Support</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
          Precision Conversion FAQ
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Get expert answers about unit systems, mathematical accuracy, and how to optimize your technical workflows with our universal scaling engine.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={cn(
              "border rounded-2xl overflow-hidden transition-all duration-300",
              openIndex === index 
                ? "border-emerald-500 bg-emerald-50/30 dark:bg-emerald-900/10 shadow-lg shadow-emerald-500/5" 
                : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-emerald-200 dark:hover:border-emerald-800"
            )}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className={cn(
                "text-base md:text-lg font-bold tracking-tight transition-colors",
                openIndex === index ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white"
              )}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ChevronDown className={cn(
                  "w-5 h-5 transition-colors",
                  openIndex === index ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"
                )} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};
