import useSWR from 'swr';
import { setCookie, getCookie } from 'cookies-next';
import api from '../service/api';

export async function loginUser(username: string, password: string) {
  const cookie = getCookie('token');

  if (username && password) {
    const { data } = await api.post('/auth/login', {
      username,
      password,
      expiresInMins: 60,
    }).catch(({ response }) => ({ data: response.data }));

    setCookie('token', data.token, {
      maxAge: 60 * 60,
      secure: true,
      sameSite: 'strict',
    });

    delete data.token;
    localStorage.setItem('user', JSON.stringify(data));

    return data;
  }

  if (cookie) {
    const jsonInString = localStorage.getItem('user')!;
    return JSON.parse(jsonInString);
  }

  const error: any = new Error('Not authorized!');
  error.status = 401;
  localStorage.removeItem('user');
  throw error;
}

const useLogin = () => {
  const { data, mutate, error } = useSWR('/auth/login', loginUser);

  const loading = !data && !error;
  const loggedOut = error && error.status === 401;

  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
};

export default useLogin;
