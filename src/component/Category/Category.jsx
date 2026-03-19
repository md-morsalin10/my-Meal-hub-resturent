import React from 'react';

const Category = () => {
    return (
        <div className='w-10/12 mx-auto my-10'>
            <h1 className='text-center text-3xl font-extrabold  text-slate-900'>Chose Your Category</h1>
            <hr className='w-2/12 mx-auto h-2 rounded-2xl bg-yellow-400 border-0 mt-2' />
            <div className='grid grid-cols-4 gap-5 pt-4'>
                <div className='p-4 rounded-xl shadow-xl/30 ...'>
                    <img className='rounded-xl' src={'chinese2.png'} alt="" />
                    <button className='btn btn-primary w-full mt-4'>Chinese Food</button>
                </div>
                <div className='p-4 rounded-xl shadow-xl/30 ...'>
                    <img className='rounded-xl' src={'canadian.png'} alt="" />
                    <button className='btn btn-primary w-full mt-4'>Canadian Food</button>
                </div>
                <div className='p-4 rounded-xl shadow-xl/30 ...'>
                    <img className='rounded-xl' src={'american.png'} alt="" />
                    <button className='btn btn-primary w-full mt-4'>American Food</button>
                </div>
                <div className='p-4 rounded-xl shadow-xl/30 ...'>
                    <img className='rounded-xl' src={'ja.jpg'} alt="" />
                    <button className='btn btn-primary w-full mt-4'>Japanese Food</button>
                </div>
               

            </div>
        </div>
    );
};

export default Category;