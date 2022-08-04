import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next/types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useLogin from '../hooks/useLogin';
import Card from '../components/Card/Card';
import useProducts from '../hooks/useProducts';
import style from '../sass/style.module.scss';

function Products() {
  const router = useRouter();
  const { loggedOut } = useLogin();
  const { data, loading } = useProducts();

  useEffect(() => {
    router.push('/products');
  }, [loggedOut]);

  const listProducts = data.length ? [].concat(...data) : [];

  return (
    <>
      <Head>
        <title>Buy Shop - Produtos</title>
      </Head>
      <div className={ style.content_products }>
        { listProducts.map((product: IProduct) => (
          <Card product={ product } key={ product.id } />
        )) }
      </div>
      { loading && (
        <div className={ style.is_loading }>
          <span className="loading" />
        </div>
      ) }
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.token) {
    return {
      props: { logged: true },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: '/login',
    },
  };
};

export default Products;
