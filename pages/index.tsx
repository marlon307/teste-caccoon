import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import style from '../sass/style.module.scss';
import ImageComp from '../components/ComImage/ImageCom';

function Home() {
  return (
    <div className={ style.main }>
      <Head>
        <title>Buy Shop - Home</title>
      </Head>
      <section>
        <div className={ style.info }>
          <h1>Lorem Ipsum</h1>

          <p>Is simply dummy text of the printing and typesetting industry.</p>

          <Link href="/products">Vejá mais produtos</Link>
        </div>
        <figure>
          <ImageComp src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80" />
        </figure>
      </section>
    </div>
  );
}

export default Home;
