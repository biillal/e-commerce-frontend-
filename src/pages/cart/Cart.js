import React from 'react'

function Cart({opanHandler}) {
    return (
        <div className='top-0 left-0 h-screen fixed z-50 w-full '>
            <div className='h-full bg-gray-50 w-[24rem] md:w-[25rem] flex flex-col justify-between'>
                <div className='flex justify-between px-5 items-center h-12 bg-white border-b-2'>
                    <i onClick={opanHandler} class="ri-close-fill text-xl cursor-pointer"></i>
                    <div className=' flex gap-x-3'>
                        <h2 className=''>My cart</h2>
                        <span className=''>0 Da</span>
                    </div>
                </div>
                <div>

                </div>
                <div className=' bg-white border-b-2 flex flex-col items-end'>
                    <div className='flex justify-between px-5 items-center'>
                        <i class="ri-close-fill text-xl"></i>
                        <div className=' flex'>
                            <h2 className=''>My cart</h2>
                            <span className=''>0 Da</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
