import React from 'react'
import { Rate } from 'antd'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { CartReducer, WishlistReducer } from '../Slices/ProductSlice';
import { toast, Slide } from 'react-toastify';

const Card = ({ id, imgSrc, percent, title, price, disPrice, review, rating, productDetails }) => {

    let navigate = useNavigate()
    const cartItems = useSelector(state => state.Products.Cart)
    const wishlistItems = useSelector(state => state.Products.Wishlist)
    const wishlistProduct = productDetails ?? { id: id ?? title, imgSrc, title, price, disPrice, review, rating }
    const wishlistId = wishlistProduct.id ?? title

    const notify = (isAlreadyAdded) => {
        if (!isAlreadyAdded) {
            toast.success('Successfully Added!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide
            });
            return;
        }

        toast.warn('Already Added!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
        });
    };

    const handleProductDetails = () => {
        if (id) {
            navigate(`/productDetails/${id}`)
        } else {
            navigate('/productDetails')
        }
    }

    let dispatch = useDispatch()

    const handleCart = () => {
        const matchItem = cartItems.some(item => item.id === id)

        if (matchItem) {
            notify(true)
            return
        }

        dispatch(CartReducer(productDetails))
        notify(false)
    }

    const handleWishlist = () => {
        dispatch(WishlistReducer(wishlistProduct))
    }

    return (
        <>
            <div className='w-full group sm:w-67.5'>
                <div className='relative bg-[#F5F5F5] overflow-hidden'>
                    <span className='absolute left-3 top-3 px-3 py-2 bg-primary rounded-sm text-xs text-white'>{percent}%</span>
                    <img onClick={handleProductDetails} src={imgSrc} className='px-10 py-8.75' alt="" />
                    <div className='absolute top-3 right-3 space-y-2'>
                        <div className=' size-8.5 flex items-center justify-center bg-white rounded-full'>
                            <button onClick={handleWishlist} aria-label='Toggle wishlist' className='cursor-pointer'>
                                {wishlistItems.some(item => item.id === wishlistId) ? (
                                    <FaHeart className='text-2xl text-primary' />
                                ) : (
                                    <CiHeart className='text-2xl' />
                                )}
                            </button>
                        </div>
                        <div className='h-8.5 w-8.5 flex items-center justify-center bg-white rounded-full'>
                            <MdOutlineRemoveRedEye className='text-2xl' />
                        </div>
                    </div>
                    <button onClick={handleCart} className='bg-black text-white font-medium w-full py-2.25 absolute -bottom-11 group-hover:bottom-0 duration-200 ease-linear cursor-pointer'>Add to Cart</button>
                </div>
                <h3 className='mt-4 mb-2'>{title}</h3>
                <div className='flex gap-3'>
                    <h4 className='text-primary font-medium'>${disPrice}</h4>
                    <h4 className='text-[#0000006b] line-through font-medium'>${price}</h4>
                </div>
                <div className='flex gap-4'>
                    <Rate allowHalf value={rating} />
                    <h4 className='text-secondary'>({review})</h4>
                </div>
            </div>
        </>
    )
}

export default Card