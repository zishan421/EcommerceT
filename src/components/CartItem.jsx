import React from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeReducer } from '../Slices/ProductSlice'
import { toast, Slide } from 'react-toastify';

const CartItem = ({id, imgSrc, title, selectedColor, selectedSize, price, quantity, subTotal}) => {

    let dispatch = useDispatch()

    const handleRemove = () => {
        dispatch(removeReducer(id))
        toast.error('Item is deleted', {
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
                <div className='flex gap-5 items-center w-[35%] min-w-0 relative'>
                    <span onClick={handleRemove} className='cursor-pointer bg-primary size-5 rounded-full text-white flex justify-center items-center absolute top-0 left-0'>x</span>
                    <img className='size-13.5 shrink-0' src={imgSrc} alt="" />
                    <div className='min-w-0'>
                        <h4 className='whitespace-normal break-words'>{title}</h4>
                        {(selectedColor || selectedSize) && (
                            <p className='text-sm text-secondary'>
                                {selectedColor && `Color: ${selectedColor}`}
                                {selectedColor && selectedSize && ' | '}
                                {selectedSize && `Size: ${selectedSize}`}
                            </p>
                        )}
                    </div>
                </div>
                <div className='w-[22%] shrink-0'>
                    <h4 className='text-right'>${Number(price).toFixed(2)}</h4>
                </div>
                <div className='w-[25%] shrink-0'>
                    <div className='flex justify-end'>
                        <div className='flex gap-2 items-center w-18 border rounded-sm py-1.5 px-3'>
                    <h4>{String(quantity).padStart(2, '0')}</h4>
                    <div>
                        <button type='button' onClick={() => dispatch(incrementQuantity(id))} aria-label='Increase quantity' className='cursor-pointer'>
                            <MdOutlineKeyboardArrowUp />
                        </button>
                        <button type='button' onClick={() => dispatch(decrementQuantity(id))} aria-label='Decrease quantity' className='cursor-pointer'>
                            <MdOutlineKeyboardArrowDown />
                        </button>
                    </div>
                </div>
                    </div>
                </div>
                <h4 className='w-[18%] text-right whitespace-nowrap shrink-0'>${Number(subTotal).toFixed(2)}</h4>
            </div>
        </div>
    )
}

export default CartItem