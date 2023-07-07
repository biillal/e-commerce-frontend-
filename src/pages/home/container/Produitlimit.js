import React from 'react'
import ProductCard from '../../../components/ProductCard'

function Produitlimit() {
    return (
        <section className='container mx-auto flex flex-col py-10 mt-14 px-5 '>
            <div className='flex flex-wrap md:gap-x-5 gap-y-6'>
                <ProductCard className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]' />
                <ProductCard className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]' />
                <ProductCard className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]' />
                <ProductCard className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]' />
                <ProductCard className='w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]' />
            </div>
            <button className='mx-auto text-center mt-7 gap-x-3 flex border-2 px-3 py-2 border-primary rounded-lg '>
                <span className='text-primary font-bold'>More Articles</span>
                <i class="ri-arrow-right-line text-primary font-bold"></i>
            </button>
        </section>
    )
}

export default Produitlimit
