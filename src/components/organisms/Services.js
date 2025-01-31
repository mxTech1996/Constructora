'use client';

import { useInformation } from '@/store/useInformation';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function ServicesSection() {
  const { dataSite } = useInformation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleServices = 3;

  const services = dataSite.services;
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - visibleServices : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleServices >= services.length ? 0 : prev + 1
    );
  };

  return (
    <section className='max-w-6xl mx-auto py-16 px-6 relative'>
      <h2 className='text-3xl font-bold text-gray-800 text-center mb-8'>
        Our Services
      </h2>
      <div className='relative w-full overflow-hidden'>
        <div
          className='flex transition-transform duration-300'
          style={{
            transform: `translateX(-${
              currentIndex * (100 / visibleServices)
            }%)`,
            width: `${(services.length / visibleServices) * 100}%`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className='flex-none w-1/4 bg-white shadow-lg rounded-lg p-6 text-center relative z-10 min-h-[350px] flex flex-col justify-between'
            >
              <div className='w-32 h-32 mx-auto rounded-full overflow-hidden mb-4'>
                <img
                  src={service.image}
                  alt={service.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                {service.title}
              </h3>
              <p className='text-gray-600 flex-grow overflow-hidden text-ellipsis break-words'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-30 -translate-x-full'
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-30 translate-x-full'
      >
        <FiChevronRight size={24} />
      </button>
    </section>
  );
}
