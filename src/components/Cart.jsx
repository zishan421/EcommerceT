import React from 'react'
import Container from './Container'
import BreadCrumbs from './BreadCrumbs'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

    const data = useSelector((state)=> state.Products.Cart)
    

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
                        imgSrc={item.thumbnail}
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
        </Container>
    </div>
  )
}

export default Cart