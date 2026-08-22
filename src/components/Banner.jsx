import React from 'react'
import Container from './Container'
import { FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import BannerImg from '../assets/banner.jpg'

const Banner = () => {

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
                            <li className='flex gap-12 items-center'>Woman’s Fashion <FaAngleRight className='text-2xl' /> </li>
                            <li className='flex gap-19 items-center'>Men’s Fashion <FaAngleRight className='text-2xl' /> </li>
                            <li>Electronics</li>
                            <li>Home & Lifestyle</li>
                            <li>Medicine</li>
                            <li>Sports & Outdoor</li>
                            <li>Health & Beauty</li>
                            <li>Groceries</li>
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