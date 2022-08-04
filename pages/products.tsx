import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next/types';
import { useRouter } from 'next/router';
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

  return (
    loading ? (
      <div className={ style.is_loading }>
        <span className="loading" />
      </div>
    ) : (
      <div className={ style.content_products }>
        { data?.products.map((product) => (
          <Card product={ product } key={ product.id } />
        )) }
      </div>
    )
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
