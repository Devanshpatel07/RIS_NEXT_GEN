import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/courses';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-[#EAF5FF]/40 border-[#00A8F0]/50 shadow-md shadow-[#0B3A8C]/5'
                : 'bg-white border-[#D8E8F8] hover:border-[#CBE5FC]'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8F0]"
            >
              <div className="flex items-center gap-3">
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                  isOpen ? 'bg-[#0B3A8C] text-white' : 'bg-[#EAF5FF] text-[#0B3A8C]'
                }`}>
                  0{index + 1}
                </span>
                <span className="font-['Rajdhani'] font-bold text-lg sm:text-xl text-[#0A1A33]">
                  {faq.question}
                </span>
              </div>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? 'rotate-180 bg-[#00A8F0] text-white'
                    : 'bg-[#EAF5FF] text-[#0B3A8C]'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#5B6B82] leading-relaxed animate-in fade-in-50 duration-200">
                <p className="border-t border-[#D8E8F8]/60 pt-3">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
