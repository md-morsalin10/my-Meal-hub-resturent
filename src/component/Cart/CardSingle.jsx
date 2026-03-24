import React from 'react';

const CardSingle = ({ cartData }) => {
    console.log(cartData);

    const generatedPrice = (parseInt(cartData.idMeal.slice(-2)) + 10).toFixed(2);

    return (
      <div>
           <div className='border  border-green-400 rounded-xl p-4 space-y-1 shadow-xl bg-green-300 transition-transform duration-300 hover:border-amber-400 hover:bg-amber-300 hover:-translate-y-2 hover:shadow-amber-300/50'>
            <img className='rounded-xl' src={cartData.strMealThumb} alt="" />
            <h2 className='font-bold'>Name: {cartData.strMeal}</h2>
            <p className='text-gray-600'>Food Region: {cartData.strArea}</p>
            <h1 className='text-red-600 text-xl font-bold'>${generatedPrice}</h1>
        </div>
      </div>
    );
};

export default CardSingle;