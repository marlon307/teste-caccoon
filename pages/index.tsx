import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import style from '../sass/style.module.scss';

function Home() {
  return (
    <main className={ style.main }>
      <section>
        <div className={ style.info }>
          <h1>Lorem Ipsum</h1>

          <p>Is simply dummy text of the printing and typesetting industry.</p>

          <Link href="/products">Vejá mais produtos</Link>
        </div>
        <figure>
          <Image
            src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            layout="fill"
            priority
            quality={ 100 }
          />
        </figure>
      </section>
    </main>
  );
}

export default Home;
