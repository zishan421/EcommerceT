import React from 'react'

const AuthInput = ({ name, value, onChange, placeholder, className = '', ...props }) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`h-12 w-full border-b border-secondary text-base outline-none ${className}`}
    {...props}
  />
)

export default AuthInput
