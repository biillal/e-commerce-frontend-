import React from 'react'
import images from '../content/images'

function ProductCard({ className }) {
    return (

        <div className={`rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] group flex flex-col ${className}`}>

            <div className='overflow-hidden rounded-xl'>
                <img src={images.prod} className='w-full h-72 rounded-xl  group-hover:scale-125' alt='' />
            </div>

            <div className='px-6 py-3 flex flex-col gap-y-3'>
                <h1 className='font-roboto font-bold text-dark-soft text-xl'>Téléphone</h1>
                <h2 className='font-semibold text-lg'>Rp 400.000 Da</h2>
                <h2 className='hidden'>Rp 500.000 <span className='border-2 bg-green-400 px-2 py-1 rounded-lg text-sm text-white '>save 20%</span></h2>
                <div className='flex justify-between gap-x-3'>
                    <button className='font-semibold w-full border-2 bg-dark-hard text-white text-lg border-dark-soft rounded-lg px-4 py-2'>Add to Cart</button>
                    <button className='px-3 py-2 bg-gray-300 rounded-lg'>
                        <i class="ri-heart-line text-2xl"></i>
                    </button>
                    <button className='px-3 py-2 bg-gray-300 rounded-lg'>
                        <i class="ri-eye-fill text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
