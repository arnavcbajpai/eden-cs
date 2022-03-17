import React from 'react';
import './Card.css';

export default function Card({
  isActive,
  icon,
  alt,
  heading,
  description,
  onClick,
  name,
  id,
  ...props
}) {
  return (
    <div
      {...props}
      name={name}
      id={id}
      onClick={onClick}
      className={`card-container ${isActive ? 'active-border' : ''}`}
    >
      <img
        className={`card-icon ${isActive ? 'active-color' : ''}`}
        src={icon}
        alt={alt}
      />
      <label className="card-header">{heading}</label>
      <p className="card-description">{description}</p>
    </div>
  );
}
