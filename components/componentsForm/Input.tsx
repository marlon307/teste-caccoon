import React from 'react';
import style from './style.module.scss';

function Input({
  id, name, type, iValue, placeholder, changeEvent, autoComplete,
}: IIpunt) {
  return (
    <label htmlFor={ id } className={ style.input }>
      <input
        type={ type }
        name={ name }
        value={ iValue }
        placeholder={ placeholder }
        onChange={ changeEvent }
        autoComplete={ autoComplete }
      />
    </label>
  );
}

export default Input;
