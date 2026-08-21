import React from 'react'
import { NavLink, useLocation } from 'react-router'

const BreadCrumbs = () => {

    let location = useLocation()
    let Pathname = location.pathname.split("/")

    return (
        <div>
            <div className='flex gap-4 text-[#D9D9D9]'>
                <NavLink to="/"><h4 className='cursor-pointer'>home</h4></NavLink>
                <h4>/</h4>
                <h4 className='cursor-pointer'>{Pathname}</h4>
            </div>
        </div>
    )
}

export default BreadCrumbs