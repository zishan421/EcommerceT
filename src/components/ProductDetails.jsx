import React, { useEffect, useState } from 'react'
import Container from './Container'
import BreadCrumbs from './BreadCrumbs'
import img1 from '../assets/Frame1.png'
import img2 from '../assets/Frame2.png'
import GamePad from '../assets/gamepad.png'
import KeyBoard from '../assets/keyboard.png'
import Monitor from '../assets/monitor.png'
import Chair from '../assets/chair.png'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Rate } from 'antd'
import { useParams } from 'react-router'
import delivery from '../assets/delivery.png'
import returns from '../assets/return.png'
import SecHead from './SecHead'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { WishlistReducer } from '../Slices/ProductSlice'

const ProductDetails = () => {

    let { id } = useParams()

    let [product, setProduct] = useState(null)
    let [images, setImages] = useState([])
    let [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const wishlistItems = useSelector((state) => state.Products.Wishlist)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`)
                const data = await response.json()
                setProduct(data)
                setImages(Array.isArray(data.images) ? data.images : [])
            } catch (error) {
                console.error('Failed to load product:', error)
                setProduct(null)
                setImages([])
            } finally {
                setLoading(false)
            }
        }

        if (id) fetchProduct()
    }, [id])

    if (loading) {
        return (
            <div className='pt-20 pb-40'>
                <Container>
                    <BreadCrumbs />
                    <div className='mt-20 text-center'>Loading product...</div>
                </Container>
            </div>
        )
    }

    if (!product) {
        return (
            <div className='pt-20 pb-40'>
                <Container>
                    <BreadCrumbs />
                    <div className='mt-20 text-center'>Product not found.</div>
                </Container>
            </div>
        )
    }

    return (
        <div className='pt-20 pb-40'>
            <Container>
                <BreadCrumbs />
                <div className='mt-20'>
                    <div className='flex gap-7.5'>
                        <div className='space-y-4'>
                            {images.length > 0 ? (
                                images.map((item) => <img className='w-34.5 h-42' key={item} src={item} alt={product?.title || 'Product image'} />)
                            ) : (
                                <img src={img2} alt="Product thumbnail" />
                            )}
                        </div>
                        <div>
                            <img src={product?.thumbnail} alt="Main product" />
                        </div>
                        <div className='w-100'>
                            <h2 className='text-2xl font-semibold font-inter'>{product?.title}</h2>
                            <div className='flex gap-2 py-4'>
                                <Rate allowHalf value={product?.rating} />
                                <h4>({product?.reviews?.length ?? 0} Reviews)</h4>
                                <h4 className='text-green-400 border-l pl-2'>In Stock</h4>
                            </div>
                            <h2 className='text-2xl'>${product?.price}</h2>
                            <p className='py-6 border-b'>{product?.description}</p>
                            <div className='flex gap-6 my-6'>
                                <h2 className='font-inter text-[20px]'>Colours:</h2>
                                <div className='flex gap-2 justify-center items-center'>
                                    <div className='size-5 bg-[#A0BCE0] rounded-full border-black'></div>
                                    <div className='size-5 bg-primary rounded-full'></div>
                                </div>
                            </div>
                            <div className='flex gap-6'>
                                <h2 className='font-inter text-[20px]'>Size:</h2>
                                <div className='flex gap-2'>
                                    <div className='border border-[#979797] rounded-sm size-8 flex items-center justify-center text-[14px] font-medium hover:bg-primary hover:border-none hover:text-white'>XS</div>
                                    <div className='border border-[#979797] rounded-sm size-8 flex items-center justify-center text-[14px] font-medium hover:bg-primary hover:border-none hover:text-white'>S</div>
                                    <div className='border border-[#979797] rounded-sm size-8 flex items-center justify-center text-[14px] font-medium hover:bg-primary hover:border-none hover:text-white'>M</div>
                                    <div className='border border-[#979797] rounded-sm size-8 flex items-center justify-center text-[14px] font-medium hover:bg-primary hover:border-none hover:text-white'>L</div>
                                    <div className='border border-[#979797] rounded-sm size-8 flex items-center justify-center text-[14px] font-medium hover:bg-primary hover:border-none hover:text-white'>XL</div>
                                </div>
                            </div>
                            <div className='mt-6 mb-10 flex gap-4'>
                                <div className='flex'>
                                    <div className='border border-[#979797] size-11 text-2xl flex items-center justify-center hover:bg-primary hover:border-none hover:text-white'>-</div>
                                    <div className='border border-[#979797] w-40 h-11 font-medium text-[20px] flex items-center justify-center hover:bg-primary hover:border-none hover:text-white'>2</div>
                                    <div className='border border-[#979797] size-11 text-2xl flex items-center justify-center hover:bg-primary hover:border-none hover:text-white'>+</div>
                                </div>
                                <div className='w-41.25 h-11 border border-[#979797] flex items-center justify-center hover:bg-primary hover:border-none hover:text-white'>Buy Now</div>
                                <button onClick={() => dispatch(WishlistReducer(product))} aria-label='Toggle wishlist' className='border border-[#979797] flex items-center justify-center cursor-pointer'>
                                    {wishlistItems.some((item) => item.id === product.id) ? (
                                        <FaHeart className='text-[32px] size-10 text-primary' />
                                    ) : (
                                        <CiHeart className='text-[32px] size-10' />
                                    )}
                                </button>
                            </div>
                            <div className='border border-[#979797] rounded-sm '>
                                <div className='pt-6 pr-13 pb-4 pl-4 border-b border-[#979797] flex gap-4'>
                                    <img src={delivery} alt="" />
                                    <div>
                                        <h4 className='text-[16px] font-medium'>Free Delivery</h4>
                                        <p className='border-b border-[#979797] text-[12px] pt-2'>Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>
                                <div className='pt-6 pr-13 pb-4 pl-4 flex gap-4'>
                                    <img src={returns} alt="" />
                                    <div>
                                        <h4 className='text-[16px] font-medium'>Free Delivery</h4>
                                        <p className='border-b border-[#979797] text-[12px] pt-2'>Enter your postal code for Delivery Availability</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-35'>
                    <SecHead
                        title="Related Item"
                    />
                    <div className="mt-15 flex gap-7.5">
                        <Card
                            imgSrc={GamePad}
                            percent="-40"
                            title="HAVIT HV-G92 Gamepad"
                            price="160"
                            disPrice="140"
                            review="88"
                        />
                        <Card
                            imgSrc={KeyBoard}
                            percent="-35"
                            title="AK-900 Wired Keyboard"
                            price="1160"
                            disPrice="960"
                            review="75"
                        />
                        <Card
                            imgSrc={Monitor}
                            percent="-30"
                            title="IPS LCD Gaming Monitor"
                            price="400"
                            disPrice="370"
                            review="79"
                        />
                        <Card
                            imgSrc={Chair}
                            percent="-25"
                            title="S-Series Comfort Chair "
                            price="400"
                            disPrice="375"
                            review="77"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductDetails