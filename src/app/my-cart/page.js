'use client';
import CartSectionComponent from '@/components/organisms/CartSection';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { useEffect } from 'react';

export default function MyCart() {
  useEffect(() => {
    document.querySelectorAll('*').forEach((element) => {
      element.setAttribute('translate', 'no');
    });
  }, []);
  return (
    <>
      <head>
        <meta http-equiv='Content-Language' content='es' />
        <meta name='google' content='notranslate' />
      </head>
      <main>
        <Navbar />
        <CartSectionComponent />
        <Footer />
      </main>
    </>
  );
}
