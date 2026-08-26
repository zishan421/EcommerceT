import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import CategoryItem from './CategoryItem'
import SlickSlider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { FaCamera, FaDesktop, FaGamepad, FaHeadphones, FaMobileScreenButton, FaStopwatch } from 'react-icons/fa6'

const categories = [
  ['Phones', FaMobileScreenButton],
  ['Computer', FaDesktop],
  ['SmartWatch', FaStopwatch],
  ['Camera', FaCamera],
  ['HeadPhones', FaHeadphones],
  ['Gaming', FaGamepad],
]

const Slider = SlickSlider.default ?? SlickSlider

const arrowStyle = 'absolute -top-12 flex h-11.5 w-11.5 items-center justify-center rounded-full bg-[#F5F5F5] cursor-pointer'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  nextArrow: <button type='button' className={`${arrowStyle} right-4`}><FiArrowRight size={28} strokeWidth={2.25} /></button>,
  prevArrow: <button type='button' className={`${arrowStyle} right-18`}><FiArrowLeft size={28} strokeWidth={2.25} /></button>,
}

const Categories = () => (
  <div>
    <Container>
      <SecHead title='Categories' heading='Browse By Category' />
      <div className='category-slider'>
        <Slider {...settings}>
          {categories.map(([title, Icon]) => (
            <CategoryItem key={title} title={title}>
              <Icon className='mx-auto text-5xl' />
            </CategoryItem>
          ))}
        </Slider>
      </div>
      <div className='mt-15 mb-20 border-b border-secondary' />
    </Container>
  </div>
)

export default Categories