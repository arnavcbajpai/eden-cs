import React from 'react'
import Proptypes from 'prop-types'
import './Header.css'

export default function Header({ heading, subheading }) {
  return (
    <header className="header">
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </header>
  )
}

Header.propTypes = {
  heading: Proptypes.string.isRequired,
}
