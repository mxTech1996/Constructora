'use client';
import { useInformation } from '@/store/useInformation';
import { useCart } from 'ecommerce-mxtech';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // React Icons

const Navbar = () => {
  const router = useRouter();
  const { products } = useCart();
  const { dataSite } = useInformation();
  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* Navbar */}
      <nav className='fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 flex justify-between items-center z-50'>
        <div className='text-lg font-semibold'>Business Consulting</div>
        <div className='hidden md:flex space-x-6'>
          <Link href='/' className='hover:text-gray-500'>
            Home
          </Link>
          <Link href='/#courses' className='hover:text-gray-500'>
            Courses
          </Link>
          <Link href='/#services' className='hover:text-gray-500'>
            Services
          </Link>
        </div>
        <div className='relative flex items-center space-x-4'>
          <a className='relative' href='/my-cart'>
            <FaShoppingCart className='w-6 h-6 text-black hover:text-teal-300' />
            {products.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-500 text-black text-xs font-bold px-2 py-0.5 rounded-full'>
                {products.length}
              </span>
            )}
          </a>
        </div>
        <button
          onClick={() => {
            router.push('/more-information');
          }}
          className='hidden md:block bg-black text-white px-4 py-2 rounded-lg'
        >
          Contact us →
        </button>
      </nav>

      {/* Hero Section */}
      <section className='relative bg-black text-white py-40 mt-36 rounded-3xl shadow-lg max-w-7xl mx-auto overflow-hidden '>
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
          <img
            src={dataSite.image_hero}
            alt='Skyscrapers'
            className='opacity-50 object-cover w-full h-full'
          />
        </div>
        <div className='relative z-10 max-w-4xl mx-auto px-6'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            {dataSite.subtitle}
          </h1>
          <p className='mt-4 text-gray-300 max-w-xl'>{dataSite.description}</p>
          <button className='mt-6 bg-white text-black px-6 py-3 rounded-lg'>
            Start now →
          </button>
        </div>
        <div className='absolute bottom-0 left-0 w-full h-24 bg-black rounded-t-[50%]'></div>
      </section>
    </div>
  );
};

export default Navbar;
