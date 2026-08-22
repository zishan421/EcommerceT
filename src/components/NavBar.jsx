import React, { useEffect, useState } from 'react'
import Container from './Container'
import Logo from '../assets/Logo.png'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineMenuAlt2, HiOutlineX } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router";
import { useSelector } from 'react-redux';

const NavBar = () => {

  let navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)

  const data = useSelector((state)=> state.Products.Cart)
  const wishlist = useSelector((state)=> state.Products.Wishlist)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)
  const goTo = (path) => {
    closeMenu()
    navigate(path)
  }

  return (
    <>
      <Container>
        <div className='flex justify-between items-center py-4 md:py-7'>
          <div>
            <img src={Logo} alt="" />
          </div>
          <ul className='hidden md:flex gap-12'>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/signup"><li>Sign Up</li></NavLink>
          </ul>
          <div className='hidden md:flex gap-6 items-center'>
            <div className='relative py-1.75 pl-5 bg-[#F5F5F5]'>
              <input type="text" className='pr-17.5' placeholder='What are you looking for?' />
              <HiOutlineMagnifyingGlass className='absolute top-2 right-3 text-2xl' />
            </div>
            <div className='flex gap-4 items-center'>
              <div onClick={()=> navigate("/wishlist")} className='relative cursor-pointer'>
                <CiHeart className='text-[32px]'/>
                <div className='absolute -right-2 -top-2 text-white bg-primary size-5 rounded-full text-xs flex items-center justify-center'>{wishlist.length}</div>
              </div>
              <div onClick={()=> navigate("/cart")} className='relative'>
                <IoCartOutline className='text-[32px]'/>
                <div className='absolute -right-2 -top-2 text-white bg-primary size-5 rounded-full text-xs flex items-center justify-center'>{data.length}</div>
              </div>
            </div>
          </div>
          <button
            type='button'
            onClick={() => setIsMenuOpen(true)}
            aria-label='Open navigation menu'
            className='md:hidden text-3xl cursor-pointer'
          >
            <HiOutlineMenuAlt2 />
          </button>
        </div>
      </Container>
      <div className='border-b w-screen text-black'></div>
      <div className='relative border-b md:hidden'>
        <div className='border-b px-4 py-2'>
          <span className='font-medium'>Exclusive</span>
        </div>
        <div className='px-4 py-2'>
          <button
            type='button'
            onClick={() => setIsCategoryOpen((isOpen) => !isOpen)}
            aria-expanded={isCategoryOpen}
            aria-label='Toggle categories'
            className='flex w-full items-center gap-2 text-left text-sm cursor-pointer'
          >
            <BiCategory className='text-base' />
            <span>Categories</span>
          </button>
        </div>
        {isCategoryOpen && (
          <nav className='border-t px-4 py-2 text-sm'>
            <button type='button' className='flex w-full items-center justify-between py-1.5 text-left'>
              Women's Fashion <RiArrowRightSLine className='text-xl' />
            </button>
            <button type='button' className='flex w-full items-center justify-between py-1.5 text-left'>
              Men's Fashion <RiArrowRightSLine className='text-xl' />
            </button>
            <button type='button' className='block w-full py-1.5 text-left'>Electronics</button>
            <button type='button' className='block w-full py-1.5 text-left'>Home & Lifestyle</button>
            <button type='button' className='block w-full py-1.5 text-left'>Medicine</button>
            <button type='button' className='block w-full py-1.5 text-left'>Sports & Outdoor</button>
            <button type='button' className='block w-full py-1.5 text-left'>Health & Beauty</button>
            <button type='button' className='block w-full py-1.5 text-left'>Groceries</button>
          </nav>
        )}
      </div>
      <div className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={closeMenu}>
        <aside
          className={`h-full w-72 max-w-[85vw] bg-white px-6 py-5 shadow-xl transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className='flex items-center justify-between border-b pb-5'>
            <img src={Logo} alt="" />
            <button type='button' onClick={closeMenu} aria-label='Close navigation menu' className='text-2xl cursor-pointer'>
              <HiOutlineX />
            </button>
          </div>
          <div className='relative mt-6 bg-[#F5F5F5]'>
            <input type="text" className='w-full py-3 pl-4 pr-11 outline-none' placeholder='What are you looking for?' />
            <HiOutlineMagnifyingGlass className='absolute top-3 right-3 text-2xl' />
          </div>
          <nav className='mt-8 flex flex-col gap-6 text-lg'>
            <NavLink to='/' onClick={closeMenu}>Home</NavLink>
            <NavLink to='/contact' onClick={closeMenu}>Contact</NavLink>
            <NavLink to='/about' onClick={closeMenu}>About</NavLink>
            <NavLink to='/signup' onClick={closeMenu}>Sign Up</NavLink>
          </nav>
          <div className='mt-10 flex gap-6 border-t pt-6'>
            <button type='button' onClick={() => goTo('/wishlist')} aria-label='Open wishlist' className='relative cursor-pointer'>
              <CiHeart className='text-[32px]' />
              <span className='absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-white'>{wishlist.length}</span>
            </button>
            <button type='button' onClick={() => goTo('/cart')} aria-label='Open cart' className='relative cursor-pointer'>
              <IoCartOutline className='text-[32px]' />
              <span className='absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-white'>{data.length}</span>
            </button>
          </div>
        </aside>
      </div>
    </>
  )
}

export default NavBar