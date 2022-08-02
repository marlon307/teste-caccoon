import Link from 'next/link';
import React from 'react';
import style from '../sass/style.module.scss';

function Home() {
  return (
    <main className={ style.main }>
      <section>
        <h1>Lorem Ipsum</h1>

        <p>Is simply dummy text of the printing and typesetting industry.</p>

        <Link href="/">Lorem Ipsum</Link>
      </section>
    </main>
  );
}

export default Home;
