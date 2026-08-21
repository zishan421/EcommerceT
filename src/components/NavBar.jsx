import React from 'react'
import Container from './Container'
import Logo from '../assets/Logo.png'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from 'react-redux';

const NavBar = () => {

  let navigate = useNavigate()

  const data = useSelector((state)=> state.Products.Cart)
  const wishlist = useSelector((state)=> state.Products.Wishlist)

  return (
    <>
      <Container>
        <div className='flex justify-between py-7'>
          <div>
            <img src={Logo} alt="" />
          </div>
          <ul className='flex gap-12'>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/signup"><li>Sign Up</li></NavLink>
          </ul>
          <div className='flex gap-6 items-center'>
            <div className='relative py-1.75 pl-5 bg-[#F5F5F5]'>
              <input type="text" className='pr-17.5' placeholder='What are you looking for?' />
              <HiOutlineMagnifyingGlass className='absolute top-2 right-3 text-2xl' />
            </div>
            <div className='flex gap-4 items-center'>
              <div className='relative'>
                <CiHeart className='text-[32px]'/>
                <div className='absolute -right-2 -top-2 text-white bg-primary size-5 rounded-full text-xs flex items-center justify-center'>{wishlist.length}</div>
              </div>
              <div onClick={()=> navigate("/cart")} className='relative'>
                <IoCartOutline className='text-[32px]'/>
                <div className='absolute -right-2 -top-2 text-white bg-primary size-5 rounded-full text-xs flex items-center justify-center'>{data.length}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className='border-b w-screen text-black'></div>
    </>
  )
}

export default NavBar