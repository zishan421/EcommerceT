import React, { useState } from 'react'
import Container from './Container'
import BreadCrumbs from './BreadCrumbs'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Cart = () => {

    const data = useSelector((state)=> state.Products.Cart)
    const navigate = useNavigate()
    const [couponCode, setCouponCode] = useState('')
    const [appliedCoupon, setAppliedCoupon] = useState('')

    const subtotal = data.reduce((total, item) => {
        return total + Number(item.price) * (item.quantity ?? 1)
    }, 0)
    const discount = appliedCoupon === 'Zishan420' ? subtotal * 0.2 : 0
    const total = subtotal - discount

    const handleApplyCoupon = () => {
        setAppliedCoupon(couponCode.trim() === 'Zishan420' ? 'Zishan420' : '')
    }

    const handleUpdateCart = () => {
        localStorage.setItem('Cart', JSON.stringify(data))
        toast.success('Cart updated successfully')
    }

  return (
    <div className='mt-20 mb-35'>
        <Container>
            <BreadCrumbs/>
            <div>
                <div className='flex py-6 px-10 rounded-sm shadow-sm'>
                    <h4 className='w-[35%]'>Product</h4>
                    <h4 className='w-[22%] text-right'>Price</h4>
                    <h4 className='w-[25%] text-right'>Quantity</h4>
                    <h4 className='w-[18%] text-right'>Subtotal</h4>
                </div>
                {
                    data.map((item)=>{
                        return <CartItem
                        imgSrc={item.thumbnail || item.imgSrc}
                        id={item.id}
                        title={item.title}
                        selectedColor={item.selectedColor}
                        selectedSize={item.selectedSize}
                        price={item.price}
                        quantity={item.quantity ?? 1}
                        subTotal={item.price * (item.quantity ?? 1)}
                        />
                    })
                }
            </div>
            <div className='mt-6 flex flex-col items-stretch justify-between gap-4 pb-8 sm:flex-row sm:items-center'>
                <button type='button' onClick={() => navigate('/shop')} className='h-14 w-full max-w-58.5 rounded-sm border border-black px-4 text-base font-medium cursor-pointer'>
                    Return To Shop
                </button>
                <button type='button' onClick={handleUpdateCart} className='h-14 w-full max-w-48.75 rounded-sm border border-black px-4 text-base font-medium cursor-pointer'>
                    Update Cart
                </button>
            </div>
            <div className='mt-18 flex flex-col items-stretch justify-between gap-10 lg:flex-row lg:gap-20'>
                <div className='flex w-full max-w-127.75 items-center gap-4'>
                    <input
                        type='text'
                        value={couponCode}
                        onChange={(event) => setCouponCode(event.target.value)}
                        placeholder='Coupon Code'
                        aria-label='Coupon Code'
                        className='h-14 min-w-0 flex-1 rounded-sm border border-black px-5 text-base outline-none placeholder:text-secondary'
                    />
                    <button type='button' onClick={handleApplyCoupon} className='h-14 w-52.75 shrink-0 rounded-sm bg-primary px-4 text-base font-medium text-white cursor-pointer'>
                        Apply Coupon
                    </button>
                </div>
                <div className='h-81 w-full max-w-117.5 rounded-sm border border-black p-5'>
                    <h2 className='text-xl font-medium'>Cart Total</h2>
                    <div className='mt-4 flex h-11 items-center justify-between border-b border-black text-base'>
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && <div className='flex h-11 items-center justify-between border-b border-black text-base'>
                        <span>Discount (20%):</span>
                        <span>-${discount.toFixed(2)}</span>
                    </div>}
                    <div className='flex h-11 items-center justify-between border-b border-black text-base'>
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div className='flex h-11 items-center justify-between text-base'>
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className='mt-2 flex justify-center'>
                        <button type='button' className='h-14 w-65 rounded-sm bg-primary px-4 text-base font-medium text-white cursor-pointer'>
                            Proceed to checkout
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Cart