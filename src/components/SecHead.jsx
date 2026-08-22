import React from 'react'
const SecHead = ({ heading, title, compact = false }) => {


  return (
    <>
      <div>
          <div className='flex items-center gap-2 font-semibold md:gap-4'>
          <div className={`w-3 rounded-sm bg-primary md:w-5 ${compact ? 'h-7 md:h-10' : 'h-10'}`}></div>
          <h4 className={`text-primary ${compact ? 'text-xs md:text-base' : ''}`}>{title}</h4>
        </div>
        <h2 className={`font-semibold mt-3 md:mt-6 ${compact ? 'text-xl md:text-[36px]' : 'text-[36px]'}`}>{heading}</h2>
      </div>
    </>
  )
}

export default SecHead