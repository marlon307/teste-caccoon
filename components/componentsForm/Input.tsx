import React from 'react';
import style from './style.module.scss';

function Input({
  id, name, type, iValue, placeholder, changeEvent, autoComplete, errorActive,
}: IIpunt) {
  return (
    <label htmlFor={ id } className={ style.input }>
      <input
        data-error={ errorActive }
        type={ type }
        name={ name }
        value={ iValue }
        placeholder={ placeholder }
        onChange={ changeEvent }
        autoComplete={ autoComplete }
      />
      <span>{ placeholder }</span>
    </label>
  );
}

export default Input;
