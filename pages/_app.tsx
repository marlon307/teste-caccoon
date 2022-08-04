import React from 'react';
import '../sass/globals.scss';
import type { AppProps } from 'next/app';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component { ...pageProps } />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
