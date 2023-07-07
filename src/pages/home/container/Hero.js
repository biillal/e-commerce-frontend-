import React from 'react'
import images from '../../../content/images'
import Typed from 'react-typed';
import Slider from 'react-slick';
function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const settings1 = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className='container mx-auto  flex flex-col lg:flex-row lg:gap-x-10 gap-y-5  px-4 py-6'>
            <div className='flex flex-col gap-y-12 lg:mt-8 lg:gap-y-14 lg:w-2/5  '>
                <div className='w-full text-center'>
                    <Typed
                        strings={[
                            'Welcome to my online store',
                            'مرحبا بكم في متجرنا الالكتروني',
                        ]}
                        typeSpeed={70}
                        backSpeed={70}
                        className='font-roboto font-bold text-2xl text-dark-soft text-center '
                        loop ></Typed>
                </div>
                <div className=''>
                    <Slider {...settings} className=''>
                        <div>
                            <h2 className='font-roboto font-bold text-center  text-xl text-dark-soft '>التوصيل في كل الولايات </h2>
                        </div>
                        <div>
                            <h2 className='font-roboto font-bold text-center  text-xl text-dark-soft '>التوصيل مجااني </h2>
                        </div>

                    </Slider>
                </div>
                <div className='relative '>
                    <div className='relative  md:w-full'>
                        <i class="ri-search-line text-xl absolute left-3 top-1/2 -translate-y-1/2 "></i>
                        <input type='text' placeholder='Recherche un produit' className='pl-12  placeholder:font-bold  py-3 px-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] font-semibold w-full rounded-lg text-dark-soft  focus:outline-none ' />
                    </div>
                    <button type='submit' className='w-full border-2 py-2 px-4 bg-dark-soft text-white rounded-lg text-lg mt-1 md:absolute md:w-fit md:top-0  md:-mt-0 md:right-0' >Rechercher</button>
                </div>
            </div>
            <div className='w-full lg:w-1/2'>

                <Slider className='w-full' {...settings1}>
                    <div>
                        <img src={images.prod} className='h-72 w-full' alt='images prod pub' />
                    </div>
                    <div>
                        <img src={images.prod2} className='h-72 w-full' alt='images prod pub' />
                    </div>
                    <div>
                        <img src={images.prod3} className='h-72 w-full' alt='images prod pub' />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Hero
