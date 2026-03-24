import React from 'react';

const OurServices = () => {
    return (
        <div className='w-9/12 mx-auto my-15'>

            <div className='flex justify-center items-center gap-4 p-2'>

                <div>
                    <h2 className='text-[#F3274C] font-extrabold py-3'>Food Services</h2>
                    <h2 className='text-4xl text-[#000000] font-extrabold'>We Provide Best <br />Services</h2>
                    <div className='grid grid-cols-2 gap-8 pt-3'>
                        <div>
                            <img className='bg-[#FFD40D] py-9 px-5 border-2 border-red-500 rounded-[50%]' src="tea-pot.png" alt="" />
                            <h3 className='text-xl font-bold py-3'>Afternoon Tea</h3>
                            <p className='text-[#555555]'>Nisi quam nestibulum ac quam nec arugula Orca various Nisi quam nest.</p>
                        </div>
                        <div>
                            <img className='bg-[#FFD40D] py-5 px-10 border-2 border-red-500 rounded-[50%]' src="juice.png" alt="" />
                            <h3 className='text-xl font-bold py-3'>Refreshing Juice</h3>
                            <p className='text-[#555555]'>Nisi quam nestibulum ac quam nec arugula Orca various Nisi quam nest.</p>
                        </div>
                        <div>
                            <img className='bg-[#FFD40D] py-8 px-6 border-2 border-red-500 rounded-[50%]' src="doughnut.png" alt="" />
                            <h3 className='text-xl font-bold py-3'>Alfresco Dining</h3>
                            <p className='text-[#555555]'>Nisi quam nestibulum ac quam nec arugula Orca various Nisi quam nest.</p>
                        </div>
                        <div>
                            <img className='bg-[#FFD40D] py-10 px-7 border-2 border-red-500 rounded-[50%]' src="coffee-shop.png" alt="" />
                            <h3 className='text-xl font-bold py-3'>Takeaway & Delivery</h3>
                            <p className='text-[#555555]'>Nisi quam nestibulum ac quam nec arugula Orca various Nisi quam nest.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="provite.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurServices;