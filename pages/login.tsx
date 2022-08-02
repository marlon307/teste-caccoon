import React, { useState, useCallback, ChangeEvent } from 'react';
import Input from '../components/componentsForm/Input';

type TLogin = {
  email: string;
  password: string;
};

function Login() {
  const [stateLogin, setStateLogin] = useState<TLogin>({
    email: '',
    password: '',
  });

  const changeLogin = useCallback(({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;
    setStateLogin((curretnState) => ({
      ...curretnState,
      [name]: value,
    }));
  }, []);

  return (
    <form>
      <Input
        id="email"
        name="email"
        type="email"
        iValue={ stateLogin.email }
        placeholder="Email"
        changeEvent={ changeLogin }
        autoComplete="email"
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
    </form>
  );
}

export default Login;
