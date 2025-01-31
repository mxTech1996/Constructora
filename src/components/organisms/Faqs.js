'use client';

import { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

const faqs = [
  {
    question: 'What type of consulting services do you offer?',
    answer:
      'We provide advice on design, planning, permits, and project management for single-family home construction.',
  },
  {
    question: 'Do you assist with obtaining construction permits?',
    answer:
      'Yes, we guide our clients through the process of obtaining permits and ensuring regulatory compliance.',
  },
  {
    question: 'Can you recommend contractors and suppliers?',
    answer:
      'Yes, we have a network of reliable contractors and suppliers for each phase of the project.',
  },
  {
    question: 'What is the cost of your services?',
    answer:
      'Our prices vary depending on the complexity of the project. Contact us for a personalized quote.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='max-w-4xl mx-auto py-16 px-6'>
      <h2 className='text-3xl font-bold text-gray-800 text-center mb-8'>
        Frequently Asked Questions
      </h2>
      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <div key={index} className='bg-white shadow-md rounded-lg p-4'>
            <button
              className='flex justify-between items-center w-full text-left text-gray-800 font-semibold'
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <FiX size={24} /> : <FiPlus size={24} />}
            </button>
            {openIndex === index && (
              <p className='mt-2 text-gray-600'>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
