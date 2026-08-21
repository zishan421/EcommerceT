import React from 'react'
import Container from './Container'
import BreadCrumbs from './BreadCrumbs'
import { useDispatch, useSelector } from 'react-redux'
import { CartReducer, WishlistReducer } from '../Slices/ProductSlice'

const Wishlist = () => {
    const dispatch = useDispatch()
    const wishlist = useSelector((state) => state.Products.Wishlist)
    const cart = useSelector((state) => state.Products.Cart)

    const handleAddToCart = (item) => {
        if (!cart.some((cartItem) => cartItem.id === item.id)) {
            dispatch(CartReducer(item))
        }
    }

    return (
        <div className='mt-20 mb-35'>
            <Container>
                <BreadCrumbs />
                <div className='mt-20 flex items-center justify-between'>
                    <h2 className='text-2xl font-semibold'>Wishlist ({wishlist.length})</h2>
                </div>
                {wishlist.length === 0 ? (
                    <p className='mt-15 text-center text-secondary'>Your wishlist is empty.</p>
                ) : (
                    <div className='mt-10 grid grid-cols-4 gap-7.5'>
                        {wishlist.map((item) => (
                            <div key={item.id} className='group'>
                                <div className='relative bg-[#F5F5F5] overflow-hidden'>
                                    <img
                                        src={item.thumbnail || item.imgSrc}
                                        className='w-full h-55 object-contain px-8 py-5'
                                        alt={item.title}
                                    />
                                    <button
                                        onClick={() => dispatch(WishlistReducer(item))}
                                        className='absolute top-3 right-3 size-8.5 rounded-full bg-white text-primary cursor-pointer'
                                        aria-label={`Remove ${item.title} from wishlist`}
                                    >
                                        x
                                    </button>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className='bg-black text-white font-medium w-full py-2.25 cursor-pointer'
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                <h3 className='mt-4 mb-2'>{item.title}</h3>
                                <h4 className='text-primary font-medium'>${item.disPrice || item.price}</h4>
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Wishlist
