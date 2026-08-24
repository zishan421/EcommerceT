import React, { useState } from 'react'
import { toast } from 'react-toastify'
import AuthInput from '../components/AuthInput'
import AuthLayout from '../components/AuthLayout'
import PasswordField from '../components/PasswordField'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ contact: '', password: '' })
  const { contact, password } = formData
  const handleChange = ({ target }) => {
    setFormData((currentData) => ({ ...currentData, [target.name]: target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    toast.success('Logged in successfully')
  }

  const togglePassword = () => setShowPassword((visible) => !visible)

  return (
    <AuthLayout>
        <h1 className='text-3xl font-medium leading-tight'>Log in to Exclusive</h1>
        <p className='mt-4 text-base'>Enter your details below</p>
        <form onSubmit={handleSubmit} className='mt-7'>
          <AuthInput type='text' name='contact' value={contact} onChange={handleChange} required placeholder='Email or Phone Number' className='placeholder:text-secondary' />
          <PasswordField value={password} onChange={handleChange} showPassword={showPassword} onToggle={togglePassword} className='signup-password-input placeholder:text-secondary' />
          <div className='mt-7 flex items-center gap-21.75'>
            <button type='submit' className='h-14 w-35.75 shrink-0 rounded-sm bg-primary text-base font-medium text-[#FAFAFA] cursor-pointer'>
              Log in
            </button>
            <button type='button' className='whitespace-nowrap text-base text-primary cursor-pointer'>
              Forget Password?
            </button>
          </div>
        </form>
    </AuthLayout>
  )
}

export default Login
