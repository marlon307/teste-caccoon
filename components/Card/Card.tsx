import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import type { IProduct } from '../../types/products';

type TProduct = {
  product: IProduct
};

function Card({ product }: TProduct) {
  return (
    <div className={ style.card }>
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
  );
}

export default Card;
