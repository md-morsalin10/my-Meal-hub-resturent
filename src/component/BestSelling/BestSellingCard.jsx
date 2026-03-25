import React from 'react';

const BestSellingCard = ({sData,handleCart}) => {
    // console.log(sData)
    const generatedPrice = (parseInt(sData.idMeal.slice(-2)) + 10).toFixed(2);
    return (
        <div className='border w-full h-full border-green-400 rounded-xl p-4 space-y-1 shadow-xl bg-white transition-transform duration-300 hover:border-amber-400 hover:bg-red-100 hover:-translate-y-2 hover:shadow-amber-300/50'>
            <img className='rounded-xl' src={sData.strMealThumb} alt="" />
            <h2 className='font-bold'>Name: {sData.strMeal}</h2>
            <p className='text-gray-500'>Food Region: {sData.strArea}</p>
            <div className='flex justify-between'>
                <h1 className='text-green-600 text-xl font-bold'>${generatedPrice}</h1>
                <button onClick={()=> handleCart(sData)} className='btn btn-primary'>Add Cart</button>
            </div>

        </div>
    );
};

export default BestSellingCard;