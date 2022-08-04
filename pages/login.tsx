import React, { useState, useCallback, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
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
  const [looginErr, setLoginErr] = useState(false);
  const [looginLoading, setLoginLoading] = useState(false);

  const [stateLogin, setStateLogin] = useState<TLogin>({
    username: 'kminchelle',
    password: '0lelplR',
  });

  const changeLogin = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setStateLogin((curretnState) => ({
      ...curretnState,
      [name]: value,
    }));
    setLoginErr(false);
  }, []);

  const actionLogin = async () => {
    setLoginLoading(true);
    const { email } = await loginUser(stateLogin.username, stateLogin.password);

    if (email) {
      mutate();
      router.push('/products');
    } else {
      setLoginErr(true);
      setLoginLoading(false);
    }
  };

  return (
    <form className={ style.form }>
      <Head>
        <title>Buy Shop - Login</title>
      </Head>
      <h1>Entrar</h1>
      <Input
        id="username"
        name="username"
        type="text"
        iValue={ stateLogin.username }
        placeholder="Usuário"
        changeEvent={ changeLogin }
        autoComplete="username"
        errorActive={ looginErr }
      />
      <Input
        id="psw"
        name="password"
        type="password"
        iValue={ stateLogin.password }
        placeholder="Senha"
        changeEvent={ changeLogin }
        autoComplete="current-password"
        errorActive={ looginErr }
      />
      { looginErr && <p>Usuário ou senha incorreto.</p> }
      <button
        type="button"
        onClick={ actionLogin }
      >
        Login
        { looginLoading && <span className="loading" /> }
      </button>
    </form>
  );
}

export default Login;
