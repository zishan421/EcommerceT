import React from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeReducer } from '../Slices/ProductSlice'
import { toast, Slide } from 'react-toastify';

const CartItem = ({id, imgSrc, title, price, subTotal}) => {

    let dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeReducer(id))
        toast.success('Deleted Successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide
        })
    }

    return (
        <div>
            <div className='flex items-center py-6 px-10 rounded-sm  shadow-sm'>
                <div className='flex gap-5 items-center w-[32%] relative'>
                    <span onClick={handleRemove} className='cursor-pointer bg-primary size-5 rounded-full text-white flex justify-center items-center absolute top-0 left-0'>x</span>
                    <img className='size-13.5' src={imgSrc} alt="" />
                    <h4>{title}</h4>
                </div>
                <div className='w-[30%]'>
                    <h4>{price}</h4>
                </div>
                <div className='w-[33%]'>
                    <div className='flex gap-2 items-center w-18 border rounded-sm py-1.5 px-3'>
                    <h4>01</h4>
                    <div>
                        <MdOutlineKeyboardArrowUp />
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
                </div>
                <h4>${subTotal}</h4>
            </div>
        </div>
    )
}

export default CartItem