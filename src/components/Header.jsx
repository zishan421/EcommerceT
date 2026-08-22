import React from 'react'
import Container from './Container'
import { NavLink } from "react-router";


const Header = () => {
  return (
    <>
      <div className='bg-black text-white py-3'>
        <Container>
          <div className='flex items-center justify-between gap-3'>
            <p className='min-w-0 flex-1 text-center text-[11px] leading-4 sm:text-sm sm:leading-5'>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
              <NavLink to="/shop"><span className='ml-2 whitespace-nowrap border-b'>ShopNow</span></NavLink>
            </p>
            <select name="" id="" className='w-18 shrink-0 bg-black text-xs sm:w-auto sm:text-sm'>
              <option value="">English</option>
              <option value="">Bangla</option>
              <option value="">Spanish</option>
              <option value="">Valyrian</option>
            </select>

          </div>
        </Container>
      </div>
    </>
  )
}

export default Header