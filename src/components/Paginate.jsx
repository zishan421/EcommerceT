import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import Card from '../components/Card'
import { useSelector } from 'react-redux';



const Paginate = ({ itemsPerPage, products: productsProp }) => {
    const storeProducts = useSelector(state => state.Products.value)

    const items = (productsProp || storeProducts) || []
    const PaginateComponent = ReactPaginate?.default || ReactPaginate

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (
                        <div key={item.id || item.title}>
                            <Card
                                id={item.id}
                                productDetails={item}
                                imgSrc={item.thumbnail}
                                percent={item.discountPercentage}
                                title={item.title}
                                price={item.price}
                                disPrice={(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}
                                review={item.reviews?.length ?? 0}
                                rating={item.rating}
                            />
                        </div>
                    ))}
            </>
        );
    }

    const [itemOffset, setItemOffset] = useState(0);

    const pp = Number(itemsPerPage) || 1;
    const endOffset = itemOffset + pp;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = items.length ? Math.ceil(items.length / pp) : 0;

    useEffect(() => {
        // reset to first page whenever the items array or page size changes
        setItemOffset(0);
    }, [items.length, pp]);

    const handlePageClick = (event) => {
        if (!items.length) {
            setItemOffset(0);
            return;
        }
        const newOffset = (event.selected * pp) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <div className='w-full'>
            <div className='flex flex-wrap gap-x-10 gap-y-7.5'>
                <Items currentItems={currentItems} />
            </div>
            <PaginateComponent
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel=""
                renderOnZeroPageCount={null}
                containerClassName="mt-8 flex w-full justify-start gap-2 items-center"
                pageClassName=""
                pageLinkClassName="inline-block bg-black px-4 py-1 text-white text-sm rounded cursor-pointer"
                activeClassName="opacity-90"
                breakClassName="px-2"
                previousClassName=""
                nextClassName="px-2"
            />
        </div>
    )
}

export default Paginate