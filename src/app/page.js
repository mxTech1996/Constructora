'use client';
import { ProductSection } from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useInformation } from '@/store/useInformation';
import ObjectivesSection from '@/components/organisms/Objectives';
import FAQSection from '@/components/organisms/Faqs';
import ServicesSection from '@/components/organisms/Services';
import ReferencesSection from '@/components/organisms/References';

export default function Home() {
  const router = useRouter();
  const { dataSite } = useInformation();

  console.log('dataSite');
  console.log(dataSite);
  return (
    <main
      style={{
        backgroundColor: 'rgb(249 250 251)',
      }}
    >
      <Navbar />

      {dataSite.description != '' && <ObjectivesSection />}

      <FAQSection />
      <ServicesSection />
      <div className='container mx-auto flex flex-col gap-20 my-24'>
        <div id='courses'>
          {dataSite.products.length > 1 && (
            <ProductSection
              withCategoryFilter={false}
              title='All Services'
              gridColumns={3}
              variant='carousel'
              productItemVariant='vertical'
              onClickImage={(id) => {
                router.push(`/product/${id}`);
              }}
              productVersion='1'
              carouselOptions={{
                arrowColor: 'black',
                fade: true,
                autoPlay: false,
                direction: 'horizontal',
              }}
              backgroundItemColor='#B0B0B0FF'
              stylesItem={{
                borderRadius: 12,
              }}
            />
          )}
        </div>
      </div>

      <ReferencesSection />
      <Footer />
    </main>
  );
}
