import { useEffect } from 'react';
import useSWRInfinite from 'swr/infinite';
import api from '../service/api';

const PAGE_SIZE = 10;

async function getProduts(path: string) {
  const { data } = await api.get(path);
  return data.products;
}

function useProducts<Data = any, Error = any>() {
  const {
    data, mutate, error, setSize, size,
  } = useSWRInfinite<Data, Error>(
    (index) => `/products?limit=${index === 0
      ? (size - 1) * PAGE_SIZE : index * PAGE_SIZE}`,
    getProduts,
  );

  const loading = !data && !error;

  useEffect(() => {
    setSize(size);
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setSize((current) => current + 1);
      }
    });
    intersectionObserver.observe(document.querySelector('#sentinela')!);
    return () => intersectionObserver.disconnect();
  }, []);

  return {
    loading,
    data: data ? data[data.length - 1] : [],
    mutate,
  };
}

export default useProducts;
