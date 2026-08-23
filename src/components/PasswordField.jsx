import React from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const PasswordField = ({ value, onChange, showPassword, onToggle, className = '' }) => (
  <div className='relative mt-3'>
    <input
      type={showPassword ? 'text' : 'password'}
      name='password'
      value={value}
      onChange={onChange}
      required
      placeholder='Password'
      className={`h-12 w-full border-b border-secondary pr-10 text-base outline-none ${className}`}
    />
    <button type='button' onClick={onToggle} aria-label={showPassword ? 'Hide password' : 'Show password'} className='absolute right-1 top-3 cursor-pointer text-xl'>
      {showPassword ? <FiEyeOff /> : <FiEye />}
    </button>
  </div>
)

export default PasswordField
