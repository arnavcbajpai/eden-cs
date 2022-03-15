import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

export default function Input({
  label,
  name,
  id,
  placehoder,
  value,
  className,
  ...props
}) {
  return (
    <div className="input-container">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`input ${className}`}
        id={name}
        name={name}
        value={value}
        placeholder={placehoder}
        {...props}
      />
    </div>
  )
}

Input.defaultProps = {
  placehoder: 'Please complete this field.',
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  placehoder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
}
