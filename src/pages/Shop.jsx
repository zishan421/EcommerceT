import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Card from '../components/Card'
import BreadCrumbs from '../components/BreadCrumbs'
import Paginate from '../components/Paginate'
import Skeleton from '../components/Skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { ProductReducer } from '../Slices/ProductSlice'
import { useSearchParams } from 'react-router'

const Shop = () => {

    const [value, setValue] = useState(6)
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category')

        const dispatch = useDispatch()
        const products = useSelector(state => state.Products.value) 

    useEffect(() => {
        setLoading(true)
        const isSpeakerSearch = category === 'speakers'
        const url = category
            ? (isSpeakerSearch
                ? 'https://dummyjson.com/products/search?q=speaker'
                : `https://dummyjson.com/products/category/${category}`)
            : 'https://dummyjson.com/products'

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                const productsList = Array.isArray(data.products) ? data.products : []
                dispatch(ProductReducer(productsList))
                setSelectedCategory(isSpeakerSearch ? null : category)
            })
            .then(()=> setLoading(false))
    }, [category, dispatch])

   
    const uniqueCategory = [...new Set((products || []).map((item)=> item.category))]
    const handleCategory = (item)=>{
        // toggle selection: clicking again clears the filter
        setSelectedCategory(prev => prev === item ? null : item)
    }
    const clearCategory = () => setSelectedCategory(null)
    const displayedProducts = category === 'speakers'
        ? (products || [])
        : selectedCategory ? (products || []).filter(p => p.category === selectedCategory) : (products || [])
   
    return (
        <div className='py-20'>
            <Container>
                <BreadCrumbs />
                <div>
                    <div className='flex justify-between items-center'>
                        <h2 className='font-bold text-xl mt-12.5'>Shop by Category</h2>
                        <div className='flex gap-4 items-center'>
                            <h3>show :</h3>
                            <div>
                                <select value={value} onChange={(e) => setValue(Number(e.target.value))} name="" id="" className='border border-[#D9D9D9] px-10 py-1 rounded-[5px]'>
                                    <option value={6}>6</option>
                                    <option value={9}>9</option>
                                    <option value={12}>12</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[20%]'>
                            <ul className='text-[16px] pt-10 space-y-4'>
                                <li key="all" onClick={clearCategory} role="button" tabIndex={0} onKeyDown={(e)=> e.key==='Enter' && clearCategory()} className={`capitalize cursor-pointer ${selectedCategory===null ? 'font-semibold' : ''}`}>All</li>
                                {
                                    uniqueCategory.map((item)=>{
                                        const active = selectedCategory === item
                                        return (
                                            <li
                                                key={item}
                                                role="button"
                                                tabIndex={0}
                                                onKeyDown={(e)=> e.key==='Enter' && handleCategory(item)}
                                                onClick={()=> handleCategory(item)}
                                                className={`capitalize cursor-pointer ${active ? 'font-semibold underline' : ''}`}
                                            >
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                        <div className='w-[80%]'>
                            <div>
                                {
                                    loading ?
                                    <div className='flex flex-wrap gap-x-10 gap-y-7.5'>
                                        {Array.from({ length: value }, (_, index) => <Skeleton key={index} />)}
                                    </div>
                                    :
                                    <Paginate itemsPerPage={value} products={displayedProducts} />
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Shop
