import React from 'react'
import signupImage from '../assets/signup-image.png'

const AuthImage = () => (
  <div className='hidden h-122.5 w-1/2 overflow-hidden rounded-sm bg-[#d5f3f7] lg:block'>
    <img src={signupImage} alt='Shopping with a mobile phone' className='h-full w-full object-cover object-center' />
  </div>
)

export default AuthImage
