import React, { useState } from 'react'
import Container from './Container'
import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import BannerImg from '../assets/banner.jpg'
import { useNavigate } from 'react-router';
import { categories } from '../data/categories';

const Banner = () => {

    const navigate = useNavigate()
    const [womenOpen, setWomenOpen] = useState(false)
    const [menOpen, setMenOpen] = useState(false)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        appendDots: dots => (
            <div>
                <ul className='absolute bottom-8 left-1/2 -translate-x-1/2'> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='w-3.5 h-3.5 bg-secondary  rounded-full'>
            </div>
        )
    };

    return (
        <div>
            <Container>
                <div className="flex gap-10">
                    <div className='hidden w-[20%] border-r md:block'>
                        <ul className='text-[16px] pt-10 space-y-4'>
                            {categories.map(({ label: name, slug, subcategories }) => {
                                const isWomen = slug === 'womens-dresses'
                                const isMen = slug === 'mens-shirts'

                                return (
                                    <li key={slug}>
                                        <div className='flex items-center justify-between'>
                                            <button type='button' onClick={() => navigate(`/shop?category=${slug}`)} className='cursor-pointer'>
                                                {name}
                                            </button>
                                            {(isWomen || isMen) && (
                                                <button type='button' onClick={() => isWomen ? setWomenOpen((open) => !open) : setMenOpen((open) => !open)} aria-label={`${name} subcategories`} className='cursor-pointer'>
                                                    <FaAngleRight className={`text-2xl ${(isWomen ? womenOpen : menOpen) ? 'rotate-90' : ''}`} />
                                                </button>
                                            )}
                                        </div>
                                        {isWomen && womenOpen && (
                                            <div className='ml-4 mt-2 space-y-2 text-sm'>
                                                {subcategories.map(([subLabel, subSlug]) => (
                                                    <button type='button' key={subSlug} onClick={() => navigate(`/shop?category=${subSlug}`)} className='block cursor-pointer'>{subLabel}</button>
                                                ))}
                                            </div>
                                        )}
                                        {isMen && menOpen && (
                                            <div className='ml-4 mt-2 space-y-2 text-sm'>
                                                {subcategories.map(([subLabel, subSlug]) => (
                                                    <button type='button' key={subSlug} onClick={() => navigate(`/shop?category=${subSlug}`)} className='block cursor-pointer'>{subLabel}</button>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='mt-4 w-full min-w-0 md:mt-10 md:w-[80%]'>
                        <Slider.default {...settings}>
                            <div>
                                <img src={BannerImg} alt="" />
                            </div>
                            <div>
                                <img src={BannerImg} alt="" />
                            </div>
                            <div>
                                <img src={BannerImg} alt="" />
                            </div>
                            <div>
                                <img src={BannerImg} alt="" />
                            </div>
                        </Slider.default>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner