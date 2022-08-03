import useSWR from 'swr';
import { setCookie } from 'cookies-next';
import api from '../service/api';

export async function loginUser(username: string, password: string) {
  if (username && password) {
    const { data } = await api.post('/auth/login', {
      username,
      password,
      expiresInMins: 60,
    }).catch(({ response }) => ({ data: response.data }));

    document.cookie = `token=${data.token}`;
    setCookie('token', data.token, {
      maxAge: 60 * 60,
      secure: true,
      sameSite: 'strict',
    });
    return data;
  }

  const error: any = new Error('Not authorized!');
  error.status = 401;
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
