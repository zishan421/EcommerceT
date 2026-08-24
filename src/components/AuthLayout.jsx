import React from 'react'
import AuthImage from './AuthImage'

const AuthLayout = ({ children }) => (
  <main className='mx-auto flex min-h-122.5 max-w-360 items-center gap-12 py-16 lg:gap-20 lg:py-20'>
    <AuthImage />
    <div className='mx-auto w-full max-w-92.75 px-5 lg:mx-0 lg:px-0'>
      {children}
    </div>
  </main>
)

export default AuthLayout
