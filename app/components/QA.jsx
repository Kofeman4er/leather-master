'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const questions = [
  {
    question: 'Do you offer worldwide shipping?',
    answer: 'At the moment, services are focused within Canada. For international requests, please contact directly to discuss logistics.'
  },
  {
    question: 'Can I bring my own materials?',
    answer: 'Absolutely. Many clients prefer to bring their own leather, textiles, or parts. Each project is reviewed individually.'
  },
  {
    question: 'How long does a custom saddle or jacket take to make?',
    answer: 'It depends on complexity, but generally between 2–4 weeks for completion.'
  },
  {
    question: 'Do you repair plastic accessories that are not bike-related?',
    answer: 'Yes, plastic welding is offered for a variety of items, not just motorcycle parts.'
  },
  {
    question: 'Can I request a fully custom textile item with embroidery?',
    answer: 'Yes. Textiles can be customized in size, color, material, and embroidered details.'
  }
];

export default function QASection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6" id = "faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium hover:bg-orange-600 transition"
              >
                <span>{item.question}</span>
                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
