import React from 'react'
const Button = ({children,className, onClick, type = 'button'}) => {


  return (
    <>
      <button type={type} onClick={onClick} className={`px-12 py-4 bg-primary text-white rounded-sm cursor-pointer ${className}`}>
        {children}  
      </button>
    </>
  )
}

export default Button