import React, { useState } from 'react'
import Cart from '../pages/cart/Cart';

function Header() {
    const [navIsVisible, setNavIsVisible] = useState(false);
    const navIsVisibleHandler = () => {
        setNavIsVisible((curState) => {
            return !curState
        })
    }
    const [open , setOpen]=useState(false)
    const opanHandler = ()=>{
        setOpen((curState)=>{
            return !curState
        })
    }
    return (
        <section className='sticky top-0 left-0 right-0 z-40  bg-white'>
            <header className='container flex mx-auto px-5 justify-between py-4 items-center  '>
                <div className=''>
                    <a href='/' className='font-opensans font-bold text-2xl italic text-dark-soft '>
                        <span className='text-red-500 italic px-1'>AB</span>
                        Shopping
                    </a>
                </div>
                <div className='lg:hidden'>
                    {
                        navIsVisible ? <i onClick={navIsVisibleHandler} class="ri-close-fill text-xl"></i>
                            : <i onClick={navIsVisibleHandler} class="ri-menu-line text-xl"></i>
                    }
                </div>
                <div className={`${navIsVisible ? 'right-0' : '-right-full'} transition-all duration-500 bg-dark-hard mt-16 lg:mt-0 lg:bg-transparent flex flex-col justify-center lg:justify-end lg:static w-full lg:w-auto lg:flex-row gap-y-5 lg:gap-y-0  fixed top-0 bottom-0 gap-x-14 items-center`}>
                    <ul className='flex flex-col lg:flex-row gap-x-5 font-semibold gap-y-6 lg:gap-y-0'>
                        <li className='relative group'>
                            <a href='/' className='hover:text-red-500 px-4 text-base text-white lg:text-dark-soft'>Home</a>
                            <span className='flex ml-4  absolute transition-all duration-500 border-2 border-red-400 rounded-md opacity-0 w-0.5 left-0 -bottom-1 group-hover:w-11 group-hover:opacity-50 '></span>
                        </li>
                        <li className='relative group'>
                            <a href='/' className='hover:text-red-500 px-4 text-base text-white lg:text-dark-soft'>Products</a>
                            <span className='flex ml-4  absolute transition-all duration-500 border-2 border-red-400 rounded-md opacity-0 w-0.5 left-0 -bottom-1 group-hover:w-16 group-hover:opacity-50 '></span>
                        </li>
                        <li className='relative group'>
                            <a href='/' className='hover:text-red-500 px-4 text-base text-white lg:text-dark-soft'>About</a>
                            <span className='flex ml-4  absolute transition-all duration-500 border-2 border-red-400 rounded-md opacity-0 w-0.5 left-0 -bottom-1 group-hover:w-11 group-hover:opacity-50 '></span>
                        </li>
                        <li className='relative group'>
                            <a href='/' className='hover:text-red-500 px-4 text-base text-white lg:text-dark-soft'>Contact</a>
                            <span className='flex ml-4  absolute transition-all duration-500 border-2 border-red-400 rounded-md opacity-0 w-0.5 left-0 -bottom-1 group-hover:w-14 group-hover:opacity-50 '></span>
                        </li>

                    </ul>

                    <div className='flex gap-x-3 border-2 cursor-pointer' onClick={opanHandler}>
                        <i  class="ri-shopping-cart-2-line px-1 py-1 text-xl  text-white lg:text-dark-soft"></i>
                        <span  className='border-l-2 px-1 py-1 text-white lg:text-dark-soft'>0 Da</span>
                    </div>

                </div>
            </header>
            {
                open ? <Cart opanHandler={opanHandler}  /> : ""
            }
        </section>
    )
}

export default Header
