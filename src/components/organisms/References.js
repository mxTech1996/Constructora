'use client';

import { useInformation } from '@/store/useInformation';
import { useState } from 'react';
import { FiEye, FiX } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

export default function ReferencesSection() {
  const { dataSite } = useInformation();
  const references = dataSite.references;
  const [selectedReference, setSelectedReference] = useState(null);

  return (
    <section className='max-w-4xl mx-auto py-16 px-6'>
      <h2 className='text-3xl font-bold text-gray-800 text-center mb-8'>
        References
      </h2>
      <div className='space-y-4'>
        {references.map((reference, index) => (
          <div
            key={index}
            className='bg-white shadow-md rounded-lg p-4 flex justify-between items-center'
          >
            <div>
              <span className='text-lg font-semibold text-gray-800'>
                {reference.name}
              </span>
              <div className='flex mt-1'>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-${
                      i < reference.rating ? 'yellow-400' : 'gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <button
              className='bg-gray-800 text-white p-2 rounded-full'
              onClick={() => setSelectedReference(index)}
            >
              <FiEye size={20} />
            </button>
          </div>
        ))}
      </div>

      {selectedReference !== null && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-md text-center relative'>
            <button
              className='absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full'
              onClick={() => setSelectedReference(null)}
            >
              <FiX size={20} />
            </button>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>
              {references[selectedReference].name}
            </h3>
            <div className='flex justify-center mb-4'>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-${
                    i < references[selectedReference].rating
                      ? 'yellow-400'
                      : 'gray-300'
                  }`}
                />
              ))}
            </div>
            <p className='text-gray-600'>
              {references[selectedReference].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
