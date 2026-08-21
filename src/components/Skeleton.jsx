import React from 'react'
import { FaStar } from "react-icons/fa6";

const Skeleton = () => {
    return (
        <div>
            <div className="relative w-67.5 flex flex-col mt-6 text-gray-700 bg-white bg-clip-border rounded-xl animate-pulse">
                <div className="relative grid h-56 my-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z">
                        </path>
                    </svg>
                </div>
                <div className="py-6">
                    <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-[50%] h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="block w-[50%] h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
                        &nbsp;
                    </div>
                    <div className="flex gap-2">
                        <FaStar className="block text-xl mb-2 font-sans antialiased font-light leading-relaxed text-gray-300 " />
                        <FaStar className="block text-xl mb-2 font-sans antialiased font-light leading-relaxed text-gray-300 " />
                        <FaStar className="block text-xl mb-2 font-sans antialiased font-light leading-relaxed text-gray-300 " />
                        <FaStar className="block text-xl mb-2 font-sans antialiased font-light leading-relaxed text-gray-300 " />
                        <FaStar className="block text-xl mb-2 font-sans antialiased font-light leading-relaxed text-gray-300 " />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skeleton