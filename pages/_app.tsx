import React from 'react';
import type { AppProps } from 'next/app';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../sass/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="main">
        <Component { ...pageProps } />
      </main>
      <div id="sentinela" />
      <Footer />
    </>
  );
}

export default MyApp;
