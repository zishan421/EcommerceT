import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import AuthInput from '../components/AuthInput'
import AuthLayout from '../components/AuthLayout'
import PasswordField from '../components/PasswordField'

const Signup = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    toast.success('Account created successfully')
  }

  return (
    <AuthLayout>
        <h1 className='text-3xl font-medium leading-tight'>Create an account</h1>
        <p className='mt-4 text-base'>Enter your details below</p>
        <form onSubmit={handleSubmit} className='mt-7'>
          <AuthInput type='text' name='name' value={formData.name} onChange={handleChange} pattern='[A-Za-z ]+' title='Name can contain alphabet letters and spaces only' required placeholder='Name' className='placeholder:text-secondary' />
          <AuthInput type='text' name='contact' value={formData.contact} onChange={handleChange} required placeholder='Email or Phone Number' className='mt-3 placeholder:text-black/40' />
          <PasswordField value={formData.password} onChange={handleChange} showPassword={showPassword} onToggle={() => setShowPassword((visible) => !visible)} className='signup-password-input placeholder:text-black/40' />
          <button type='submit' className='mt-7 h-14 w-full rounded-sm bg-primary text-base font-medium text-[#FAFAFA] cursor-pointer'>
            Create Account
          </button>
        </form>
        <button type='button' className='mt-4 flex h-14 w-full items-center justify-center gap-3 rounded-sm border border-black text-base cursor-pointer'>
          <FcGoogle className='text-2xl' />
          Sign up with Google
        </button>
        <p className='mt-6 text-center text-base'>
          Already have account?{' '}
          <button type='button' onClick={() => navigate('/login')} className='border-b border-black cursor-pointer'>Log in</button>
        </p>
    </AuthLayout>
  )
}

export default Signup
