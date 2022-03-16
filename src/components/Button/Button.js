import React from 'react';
import Proptypes from 'prop-types';
import './Button.css';

export default function Button({ label, className, ...props }) {
  return (
    <div className="button-container">
      <button className={`button ${className}`} {...props}>
        {label}
      </button>
    </div>
  );
}

Button.propTypes = {
  label: Proptypes.string.isRequired,
};
