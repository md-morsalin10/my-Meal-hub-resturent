
import { HeartPlus, SmartphoneIcon } from 'lucide-react';
import React from 'react';

const AboutSection = () => {
    return (
        <div className='w-10/12 mx-auto mt-2 pt-7'>
            <span className='text-center space-y-2'>
                <h2 className='text-5xl font-extrabold text-[#F5274C]'>Meet The CEO</h2>
                <h1 className='text-3xl font-extrabold text-[#000000]'>Perfect Place For An Exceptional <br /> Experience</h1>
            </span>
            <div className='flex justify-center items-center'>
                <div className=''>
                    <img className='' src={'ceo.png'} alt="" />
                </div>
                <div>
                    <p className='text-[#555555]'>Our restaurant was built on a simple promise: exceptional food and unmatched service. As CEO, I am dedicated to maintaining the highest standards in every bite you take. We don't just serve meals; we serve passion on a plate.</p>
                    <div className='space-y-8 mt-5'>
                        <div className='flex gap-2'>
                            <div className='border-2 hover:bg-green-200 border-amber-500 p-3 rounded-full'>
                                <span className='text-red-600'><SmartphoneIcon></SmartphoneIcon></span>
                            </div>
                            <div>
                                <h3 className='text-xl font-extrabold'>Online Food Ordering</h3>
                                <p className='text-[#555555]'>Easy Food delivery from the best restaurants.</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='border-2 border-yellow-500 p-3 rounded-full'>
                                <span className='text-red-600'><HeartPlus></HeartPlus></span>
                            </div>
                            <div>
                                <h3 className='text-xl font-extrabold'>100% Healthy Food</h3>
                                <p className='text-[#555555]'>Eating a wide variety of nutritious Healthy foods</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;