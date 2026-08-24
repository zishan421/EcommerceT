import React from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeReducer } from '../Slices/ProductSlice'
import { toast, Slide } from 'react-toastify';

const CartItem = ({id, imgSrc, title, selectedColor, selectedSize, price, quantity, subTotal}) => {

    const dispatch = useDispatch()
    const options = [selectedColor && `Color: ${selectedColor}`, selectedSize && `Size: ${selectedSize}`]
        .filter(Boolean)
        .join(' | ')

    const removeItem = () => {
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

    const changeQuantity = (action) => dispatch(action(id))

    return (
        <div className='flex items-center py-6 px-10 rounded-sm shadow-sm'>
                <div className='flex gap-5 items-center w-[35%] min-w-0 relative'>
                    <button type='button' onClick={removeItem} aria-label='Remove item' className='cursor-pointer bg-primary size-5 rounded-full text-white flex justify-center items-center absolute top-0 left-0'>x</button>
                    <img className='size-13.5 shrink-0 object-cover' src={imgSrc || 'https://placehold.co/120x120/eeeeee/666666?text=No+Image'} alt={title || 'Product'} />
                    <div className='min-w-0'>
                        <h4 className='whitespace-normal wrap-break-word'>{title}</h4>
                        {options && <p className='text-sm text-secondary'>{options}</p>}
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
                        <button type='button' onClick={() => changeQuantity(incrementQuantity)} aria-label='Increase quantity' className='cursor-pointer'>
                            <MdOutlineKeyboardArrowUp />
                        </button>
                        <button type='button' onClick={() => changeQuantity(decrementQuantity)} aria-label='Decrease quantity' className='cursor-pointer'>
                            <MdOutlineKeyboardArrowDown />
                        </button>
                    </div>
                </div>
                    </div>
                </div>
                <h4 className='w-[18%] text-right whitespace-nowrap shrink-0'>${Number(subTotal).toFixed(2)}</h4>
        </div>
    )
}

export default CartItem