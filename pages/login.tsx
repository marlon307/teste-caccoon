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
  const [looginErr, setLoginErr] = useState(false);
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
    setLoginErr(false);
  }, []);

  const actionLogin = async () => {
    const { email } = await loginUser(stateLogin.username, stateLogin.password);

    if (email) {
      mutate();
      router.push('/products');
    } else {
      setLoginErr(true);
    }
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
      <button type="button" onClick={ actionLogin }>Login</button>
    </form>
  );
}

export default Login;
