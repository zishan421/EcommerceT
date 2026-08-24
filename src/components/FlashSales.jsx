import React, { useEffect, useState } from 'react'
import Container from './Container'
import SecHead from './SecHead'
import CountDown from './CountDown'
import { countDownDateAndTime } from 'countdown-date-time';
import Card from './Card';
import GamePad from '../assets/gamepad.png'
import KeyBoard from '../assets/keyboard.png'
import Monitor from '../assets/monitor.png'
import Chair from '../assets/chair.png'
import Slider from "react-slick";
import Button from './Button';
import { useNavigate } from 'react-router';

const flashProducts = [
  { imgSrc: GamePad, percent: '-40', title: 'HAVIT HV-G92 Gamepad', price: '160', disPrice: '140', review: '88' },
  { imgSrc: KeyBoard, percent: '-35', title: 'AK-900 Wired Keyboard', price: '1160', disPrice: '960', review: '75' },
  { imgSrc: Monitor, percent: '-30', title: 'IPS LCD Gaming Monitor', price: '400', disPrice: '370', review: '79' },
  { imgSrc: Chair, percent: '-25', title: 'S-Series Comfort Chair', price: '400', disPrice: '375', review: '77' },
  { imgSrc: GamePad, percent: '-40', title: 'HAVIT HV-G92 Gamepad', price: '160', disPrice: '140', review: '90' },
  { imgSrc: KeyBoard, percent: '-35', title: 'AK-900 Wired Keyboard', price: '1160', disPrice: '960', review: '75' },
  { imgSrc: Monitor, percent: '-30', title: 'IPS LCD Gaming Monitor', price: '400', disPrice: '370', review: '99' },
  { imgSrc: Chair, percent: '-25', title: 'S-Series Comfort Chair', price: '400', disPrice: '375', review: '99' },
]

const sliderSettings = {
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    { breakpoint: 770, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 430, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
}

const FlashSales = () => {

  const navigate = useNavigate()
  const conduct_date = '2026-09-30 12:12:12';
  const [count, setCount] = useState({})

  useEffect(() => {
    const updateCountdown = () => {
      const countDown = countDownDateAndTime(conduct_date);
      setCount(countDown)
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='mt-20 md:mt-35'>
      <Container>
        <div className='flex flex-col items-start gap-3 md:flex-row md:items-end md:gap-21.75'>
          <SecHead
            title="Today’s"
            heading="Flash Sales"
            compact
          />
          <CountDown
            Days={count.days}
            Hours={count.hours}
            Minutes={count.minutes}
            Seconds={count.seconds}
            compact
          />
        </div>
        <div className='mt-10'>
          <Slider.default {...sliderSettings}>
            {flashProducts.map((product, index) => (
              <div key={`${product.title}-${index}`}>
                <Card {...product} />
              </div>
            ))}
          </Slider.default>
        </div>
        <Button onClick={() => navigate('/shop')} className='mx-auto block mt-10'>View All Products</Button>
        <div className=' border-b border-secondary mt-15 mb-20'></div>
      </Container>
    </div>
  )
}

export default FlashSales