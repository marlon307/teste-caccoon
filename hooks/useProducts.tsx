import useSWR from 'swr';
import api from '../service/api';

async function getProduts(path: string) {
  const { data } = await api.get(path);
  return data;
}

function useProducts() {
  const { data, mutate, error } = useSWR('/products', getProduts);

  const loading = !data && !error;

  return {
    loading,
    data,
    mutate,
  };
}

export default useProducts;
