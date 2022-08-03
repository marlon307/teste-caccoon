import React, { useState, useCallback, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Input from '../components/componentsForm/Input';
import useLogin, { loginUser } from '../hooks/useLogin';
import style from '../sass/style.module.scss';

type TLogin = {
  username: string;
  password: string;
};

function Login() {
  const router = useRouter();
  const { mutate } = useLogin();
  const [stateLogin, setStateLogin] = useState<TLogin>({
    username: 'kminchelle',
    password: '0lelplR',
  });

  const changeLogin = useCallback(({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;
    setStateLogin((curretnState) => ({
      ...curretnState,
      [name]: value,
    }));
  }, []);

  const actionLogin = async () => {
    await loginUser(stateLogin.username, stateLogin.password);
    mutate();
    router.push('/products');
  };

  return (
    <form className={ style.form }>
      <h1>Entrar</h1>
      <Input
        id="username"
        name="username"
        type="text"
        iValue={ stateLogin.username }
        placeholder="Usuário"
        changeEvent={ changeLogin }
        autoComplete="username"
      />
      <Input
        id="psw"
        name="password"
        type="password"
        iValue={ stateLogin.password }
        placeholder="Senha"
        changeEvent={ changeLogin }
        autoComplete="current-password"
      />
      <button type="button" onClick={ actionLogin }>Login</button>
    </form>
  );
}

export default Login;
