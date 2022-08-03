import { GetServerSideProps } from 'next/types';
import React from 'react';
import Image from 'next/image';
import api from '../service/api';
import type IProduct from '../types/products';
import style from '../sass/style.module.scss';

function Products({ products }: IProduct) {
  return (
    <div className={ style.content_products }>
      { products.map((product) => (
        <div className={ style.card } key={ product.id }>
          <div className={ style.content_card }>
            <figure>
              <Image
                src={ product.thumbnail }
                layout="fill"
                quality={ 100 }
                priority
              />
            </figure>
            <div className={ style.primary_line } title={ product.description }>
              <div className={ style.title }>
                <h2>{ product.title }</h2>
              </div>
              <div className={ style.rating } title={ `Avaliações de (${product.rating}) estrelas.` }>
                <span>{ product.rating }</span>
              </div>
            </div>
            <div className={ style.price }>
              <span>
                { (product.price + (product.discountPercentage / 100) * product.price)
                  .toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }) }
              </span>
              <span>
                { product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }) }
              </span>
              <span>
                { product.discountPercentage }
                % OFF
              </span>
            </div>
          </div>
        </div>
      )) }
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.token) {
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
