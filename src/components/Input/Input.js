import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export default function Input({
  label,
  note,
  prefix,
  name,
  id,
  placehoder,
  value,
  className,
  error,
  ...props
}) {
  return (
    <div className="input-container">
      <label className="label" htmlFor={id}>
        {label}
        {note && <span className="note">({note})</span>}
      </label>
      <div className="input-box">
        {prefix && <p className="prefix">{prefix}</p>}
        <input
          className={`input ${className ? className : ''} ${
            error ? 'error' : ''
          }`}
          id={name}
          name={name}
          value={value}
          placeholder={placehoder}
          {...props}
        />
      </div>
    </div>
  );
}

Input.defaultProps = {
  placehoder: 'Please fill this field.',
  error: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  placehoder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.bool,
};
