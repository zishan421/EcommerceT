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
import { categories } from '../data/categories';

const navItems = [
  { label: 'Home', to: '/', end: true },
  { label: 'Contact', to: '/contact' },
  { label: 'About', to: '/about' },
  { label: 'Sign Up', to: '/signup' },
]

const SearchBox = ({ mobile = false }) => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const searchTerm = query.trim()
    navigate(searchTerm ? `/shop?q=${encodeURIComponent(searchTerm)}` : '/shop')
  }

  return (
    <form onSubmit={handleSubmit} className={`relative bg-[#F5F5F5] ${mobile ? 'mt-6' : 'py-1.75 pl-5'}`}>
      <input
        type='text'
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className={mobile ? 'w-full py-3 pl-4 pr-11 outline-none' : 'pr-17.5'}
        placeholder='What are you looking for?'
        aria-label='Search products'
      />
      <button type='submit' aria-label='Search products' className={`absolute right-3 ${mobile ? 'top-3' : 'top-2'} cursor-pointer`}>
        <HiOutlineMagnifyingGlass className='text-2xl' />
      </button>
    </form>
  )
}

const NavLinks = ({ mobile = false, onClick }) => {
  const Wrapper = mobile ? 'nav' : 'ul'

  return (
    <Wrapper className={mobile ? 'mt-8 flex flex-col gap-6 text-lg' : 'hidden md:flex items-center gap-12'}>
      {navItems.map(({ label, to, end }) => mobile ? (
        <NavLink key={to} end={end} to={to} onClick={onClick} className='navbar-link'>
          {label}
        </NavLink>
      ) : (
        <li key={to}>
          <NavLink end={end} to={to} onClick={onClick} className='navbar-link'>
            {label}
          </NavLink>
        </li>
      ))}
    </Wrapper>
  )
}

const ActionButton = ({ icon: Icon, label, count, onClick }) => (
  <button type='button' onClick={onClick} aria-label={label} className='relative cursor-pointer'>
    <Icon className='text-[32px]' />
    <span className='absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs text-white'>
      {count}
    </span>
  </button>
)

const Actions = ({ items, onNavigate }) => (
  <div className='flex gap-4 items-center'>
    {items.map((item) => <ActionButton key={item.path} {...item} onClick={() => onNavigate(item.path)} />)}
  </div>
)

const NavBar = () => {
  const navigate = useNavigate()
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

  const actions = [
    { icon: CiHeart, label: 'Open wishlist', count: wishlist.length, path: '/wishlist' },
    { icon: IoCartOutline, label: 'Open cart', count: data.length, path: '/cart' },
  ]

  return (
    <>
      <Container>
        <div className='flex justify-between items-center py-4 md:py-7'>
          <button type='button' onClick={() => goTo('/')} aria-label='Go to home page' className='cursor-pointer'>
            <img src={Logo} alt='Exclusive' />
          </button>
          <NavLinks />
          <div className='hidden md:flex gap-6 items-center'>
            <SearchBox />
            <Actions items={actions} onNavigate={goTo} />
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
            {categories.map(({ label, slug, subcategories }) => (
              <button type='button' key={slug} onClick={() => goTo(`/shop?category=${slug}`)} className='flex w-full items-center justify-between py-1.5 text-left cursor-pointer'>
                {label}
                {subcategories && <RiArrowRightSLine className='text-xl' />}
              </button>
            ))}
          </nav>
        )}
      </div>
      <div className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={closeMenu}>
        <aside
          className={`h-full w-72 max-w-[85vw] bg-white px-6 py-5 shadow-xl transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className='flex items-center justify-between border-b pb-5'>
            <button type='button' onClick={() => goTo('/')} aria-label='Go to home page' className='cursor-pointer'>
              <img src={Logo} alt='Exclusive' />
            </button>
            <button type='button' onClick={closeMenu} aria-label='Close navigation menu' className='text-2xl cursor-pointer'>
              <HiOutlineX />
            </button>
          </div>
          <SearchBox mobile />
          <NavLinks mobile onClick={closeMenu} />
          <div className='mt-10 flex gap-6 border-t pt-6'>
            <Actions items={actions} onNavigate={goTo} />
          </div>
        </aside>
      </div>
    </>
  )
}

export default NavBar