import React from 'react'
import Proptypes from 'prop-types'
import './Button.css'

export default function Button({ label, className, ...props }) {
  return (
    <button className={`button ${className}`} {...props}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: Proptypes.string.isRequired,
}
