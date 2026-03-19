import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div className="bg-[url('/bg.png')] bg-cover bg-center h-screen mt-1">
              <div className='grid grid-cols-1 lg:flex items-center w-10/12 mx-auto pt-6 '>
                 <div className='space-y-5'>
                    <h2 className='text-2xl text-red-500 font-bold'>Fastest Delivery & Easy Pickup</h2>
                    <h1 className='text-5xl text-[#FFD40D] font-extrabold'>Kings Burger</h1>
                    <p className=' text-white'>Good food starts with good ingredients. We only bring you the best.</p>

                    <button className='btn btn-error  bg-red-500 text-white'>Visit Out Menu</button>
                 </div>
                 <div className='border-2 relative border-white pt-20 pl-10'>
                    <img className='w-[80%]' src={'bg-image.png'} alt="" />
                    <div>
                        <span className='absolute left-3 top-80'><img className='w-[80%]' src={'discount.png'} alt="" /></span>
                    </div>
                 </div>
              </div>
            </div>
        </div>
    );
};

export default HeroSection;