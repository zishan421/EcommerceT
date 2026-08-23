import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import AuthImage from '../components/AuthImage'
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
    <main className='mx-auto flex min-h-122.5 max-w-360 items-center gap-12 py-16 lg:gap-20 lg:py-20'>
      <AuthImage />
      <div className='mx-auto w-full max-w-92.75 px-5 lg:mx-0 lg:px-0'>
        <h1 className='text-3xl font-medium leading-tight'>Create an account</h1>
        <p className='mt-4 text-base'>Enter your details below</p>
        <form onSubmit={handleSubmit} className='mt-7'>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            pattern='[A-Za-z ]+'
            title='Name can contain alphabet letters and spaces only'
            required
            placeholder='Name'
            className='h-12 w-full border-b border-secondary text-base outline-none placeholder:text-secondary'
          />
          <input
            type='text'
            name='contact'
            value={formData.contact}
            onChange={handleChange}
            required
            placeholder='Email or Phone Number'
            className='mt-3 h-12 w-full border-b border-secondary text-base outline-none placeholder:text-black/40'
          />
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
      </div>
    </main>
  )
}

export default Signup
