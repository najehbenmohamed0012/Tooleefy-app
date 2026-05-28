import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is an Enterprise Invoice Generator?",
    answer: "An Enterprise Invoice Generator is a specialized digital tool designed for corporations, small businesses, and freelancers to create professional, legally-compliant billing documents. Our free tool automates the invoicing process, ensuring accuracy in tax calculations and providing high-end design templates suitable for enterprise-level transactions."
  },
  {
    question: "How do I create a professional invoice for free?",
    answer: "You can create a professional invoice for free by using our online generator. Simply enter your business details, client information, itemized services, and tax rates. You can then customize the appearance with enterprise-grade themes like 'Luxury Serif' or 'Industrial Mono,' add a brand logo, and download the final document as a high-quality PDF instantly."
  },
  {
    question: "What information should be included on a professional invoice?",
    answer: "A professional enterprise invoice must include your business name and contact info, a unique invoice number, the issue date, client details, an itemized list of services or products with descriptions, subtotal, applicable taxes (VAT/GST), and the grand total. Including payment terms and bank details (like IBAN and SWIFT) is also essential for prompt compensation."
  },
  {
    question: "Are these digital invoices legally binding?",
    answer: "Yes, digital invoices generated with our tool are legally binding provided they contain all required tax information and transaction details mandated by your local jurisdiction. For enhanced legal security, our generator allows you to add authorized signatures, company stamps, and unique tracking identifiers like QR codes and barcodes."
  },
  {
    question: "Can I add my own brand logo and QR codes to invoices?",
    answer: "Absolutely. Our Enterprise Invoice Generator supports full brand customization. You can upload your high-resolution company logo, add digitized signatures, and integrate dynamically generated QR codes or barcodes. This not only reinforces your brand identity but also enables clients to scan and pay more efficiently."
  },
  {
    question: "How does using an online invoice generator improve business efficiency?",
    answer: "Using an online generator significantly reduces administrative overhead by automating repetitive data entry and complex calculations. It eliminates manual errors, ensures a consistent and professional brand image across all communications, and speeds up the 'quote-to-cash' cycle, helping businesses maintain healthier cash flow and better financial records."
  }
];

export const FAQSection: React.FC = () => {
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
          <span>Knowledge Base</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
          Enterprise Invoicing FAQ
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Everything you need to know about professional billing, legal requirements, and streamlining your business financial operations.
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
