import React, { use } from 'react';
import BestSellingCard from './BestSellingCard';

const BestSelling = ({bestSellingPromise}) => {
    const bestSellingData = use(bestSellingPromise)
   const bestSelling = bestSellingData.meals;
    
    return (
        <div className='bg-base-200'>
            <h2 className='text-3xl pt-5 font-bold text-center'>Best Selling Product</h2>
             <hr className='w-2/12 mx-auto h-3 rounded-2xl bg-yellow-400 border-0 mt-2' />
            <div className='grid grid-cols-4 gap-6 pt-6 w-10/12 mx-auto'>
            {
                bestSelling.map(sData=> <BestSellingCard sData={sData}></BestSellingCard>)
            }
            </div>
        </div>
    );
};

export default BestSelling;