'use client';

import { useInformation } from '@/store/useInformation';

export default function ObjectivesSection() {
  const { dataSite } = useInformation();

  return (
    <section className='bg-gray-50 py-16 px-6 md:px-12'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        {/* Imagen principal circular */}
        <div className='relative flex justify-center'>
          <div className='w-80 h-80 rounded-full overflow-hidden shadow-lg'>
            <img
              src={dataSite.image_hero}
              alt='Business Laptop'
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* Título y textos */}
        <div>
          <h2 className='text-3xl font-bold text-gray-800 mb-6'>
            {dataSite?.info[2]?.title}
          </h2>
          <div className='space-y-4'>
            <div className='p-4 bg-white shadow-md rounded-lg'>
              <p className='text-gray-600'>{dataSite.info[0]?.description}</p>
            </div>
            <div className='p-4 bg-white shadow-md rounded-lg'>
              <p className='text-gray-600'>{dataSite.info[2]?.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Imágenes inferiores */}
      <div className='max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-12'>
        <div className='w-full h-32 overflow-hidden'>
          <img
            src={dataSite.image_hero2}
            alt='Team'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='w-full h-32 rounded-full overflow-hidden'>
          <img
            src={dataSite?.services[0]?.image}
            alt='Finance'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}
