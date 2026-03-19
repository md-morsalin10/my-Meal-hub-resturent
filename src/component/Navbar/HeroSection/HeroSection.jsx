import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div className="bg-[url('/bg.png')] bg-cover bg-center h-screen mt-1">
                <div className='flex flex-col gap-3 lg:gap-0  lg:flex-row items-center w-10/12 mx-auto pt-6 '>
                    <div className='space-y-1 lg:space-y-5 order-2 lg:order-1'>
                        <h2 className=' text-white text-xl lg:text-2xl lg:text-red-500 font-bold'>Fastest Delivery & Easy Pickup</h2>
                        <h1 className='text-3xl lg:text-5xl text-[#FFD40D] font-extrabold'>Kings Burger</h1>
                        <p className=' text-white'>Good food starts with good ingredients. We only bring you the best.</p>

                        <button className='btn btn-error  bg-red-500 text-white'>Visit Out Menu</button>
                    </div>
                    <div className='order-1 lg:order-2 relative  pt-40 lg:pt-21 pl-10'>
                        <img className='lg:w-[80%]' src={'bg-image.png'} alt="" />

                        <span className='absolute left-2 lg:left-2 bottom-3 lg:top-82'><img className='w-[50%] lg:w-[80%]' src={'discount.png'} alt="" /></span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;