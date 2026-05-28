import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is a Free Online QR Code Generator with Logo?",
    answer: "A Free Online QR Code Generator with Logo is a digital marketing and data encoding tool that lets business owners, content creators, and agencies create custom 2D matrix barcode symbols containing URLs, contact info, Wi-Fi details, and email data. Our generator supports branding by letting you embed high-resolution company logos and custom color schemes to match your corporate identity."
  },
  {
    question: "What is the difference between Static and Dynamic QR codes?",
    answer: "Static QR codes encode data directly into the black and white pixel layout, meaning the destination link or pattern cannot be changed once printed. Dynamic QR codes, on the other hand, utilize a short URL redirect engine that permits you to update the target landing page, trace real-time analytical scan counts, and change information dynamically without ever reprinted physical labels."
  },
  {
    question: "How do I generate QR codes in bulk for free?",
    answer: "You can create hundreds of QR codes at once by utilizing our specialized 'Bulk Engine' mode. Simply paste or upload a raw list of website URLs, text links, serial codes, or numeric records. Select your custom dots or eye designs, then download the entire batch instantly as standardized high-definition PNG files or dynamic SVG images."
  },
  {
    question: "Do these generated QR codes expire or have scan limits?",
    answer: "No, all static QR codes generated through our high-performance portal are 100% free, permanent, and never expire. They have infinite scanning limits and remain valid for as long as your destination link or data matches the encoded information. Our system guarantees unlimited traffic with zero premium paywalls."
  },
  {
    question: "How do I ensure maximum scannability of my custom QR code?",
    answer: "To ensure your QR code scans flawlessly with Apple iOS and Android smartphones, maintain a high contrast ratio between the pattern and background (dark squares on a light background). Additionally, keep a generous padding margin called the 'quiet zone' around the image, download high-resolution outputs for printing, and avoid complex overlay configurations."
  },
  {
    question: "Can I customize the design, colors, and styling of my QR codes?",
    answer: "Yes, our next-generation QR builder offers extensive visual styling controls. You can modify custom eye frame shapes, inner eyeball colors, pattern dot structures, and background transparency. You can also integrate customized logo branding, customize error correction levels to maintain redundancy, and produce enterprise-grade marketing assets."
  }
];

export const QRFAQ: React.FC = () => {
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
          <span>Information Portal</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
          QR Code Generation FAQ
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Explore expert answers regarding scan redundancy levels, custom branding, static vs dynamic configurations, and bulk file downloads.
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
