import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is a Free Online Barcode Generator?",
    answer: "A Free Online Barcode Generator is a digital instrument that allows retail companies, inventory managers, and logistics operators to encode text, numbers, and product IDs into standard vertical black-and-white stripes called barcodes. Our tool supports modern enterprise formats like Code 128, EAN-13, UPC-A, and dynamic QR specifications with instantaneous visual rendering."
  },
  {
    question: "What are the differences between Code 128, EAN-13, and UPC-A formats?",
    answer: "Code 128 is a highly flexible alphanumeric format suitable for industrial supply chains, logistics shipping labels, and internal asset tracking. EAN-13 is the standard international product digit identifier used for retail point-of-sale globally, while UPC-A is the standardized product identification barcode format primarily deployed in North America."
  },
  {
    question: "How do I generate a barcode in bulk free?",
    answer: "You can generate multiple professional barcodes at once by switching our specialized tool to 'Bulk Engine' mode. Simply copy-paste lists of serial keys or scan codes, select your preferred barcode format, and download the finished product line in unified vector designs or individual high-definition PNG files in seconds."
  },
  {
    question: "Do these generated barcodes scan correctly with handheld devices and phones?",
    answer: "Absolutely. Our barcode maker ensures flawless scannability by using high-resolution rendering engines that respect standard quiet-zone margins and crisp vector lines. They are 100% compatible with traditional laser scanner hardware, digital image readers, and mobile smartphone camera scanning applications."
  },
  {
    question: "Can I customize the visual style of my digital barcodes?",
    answer: "Yes, our advanced barcode generator lets you personalize styling aspects to align with your brand packaging. You can adjust horizontal scale width, height parameters, margins, foreground/background colors, and choose whether to display or hide the human-readable text code values directly below the stripes."
  },
  {
    question: "Is there any software download required to use this barcode engine?",
    answer: "No software download or installation is required. This professional billing and tracking tool operates entirely in modern web browsers with lightning-fast cloud response. It is cross-platform, permitting you to format, design, verify, and export business barcode identifiers entirely online from any PC or mobile device."
  }
];

export const BarcodeFAQ: React.FC = () => {
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
          <span>Documentation Center</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
          Barcode Generation FAQ
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Everything you need to know about industrial symbologies, visual customization, scan verification, and generating high-density labels.
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
