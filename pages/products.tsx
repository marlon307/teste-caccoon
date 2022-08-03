import { GetServerSideProps } from 'next/types';
import React from 'react';
import Image from 'next/image';
import api from '../service/api';
import type IProduct from '../types/products';
import style from '../sass/style.module.scss';

function Products({ products }: IProduct) {
  console.log(products);

  return (
    <div className={ style.content_products }>
      { products.map((product) => (
        <div className={ style.card } key={ product.id }>
          <div>{ product.brand }</div>
          <div>{ product.id }</div>
          <div>{ product.price }</div>
          { product.images.map((image) => (
            <Image
              key={ image }
              src={ image }
              layout="fill"
              quality={ 100 }
            />
          )) }
        </div>
      )) }
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // (req.cookies.token)
  if (true) {
    const { data } = await api.get('/products');

    return {
      props: { products: data.products },
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
