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
                <div className='flex justify-between py-6 px-10 rounded-sm  shadow-sm'>
                    <h4>Product</h4>
                    <h4>Price</h4>
                    <h4>Quantity</h4>
                    <h4>Subtotal</h4>
                </div>
                {
                    data.map((item)=>{
                        return <CartItem
                        imgSrc={item.thumbnail}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        subTotal={item.price}
                        />
                    })
                }
            </div>
        </Container>
    </div>
  )
}

export default Cart