import React from 'react';

const CanadianCard = ({caCard}) => {
    return (
        <div>
             <div className='border-2 w-full h-full border-primary p-4 rounded-xl shadow-lg transition-transform duration-300 bg-amber-50/50 hover:border-amber-400 hover:-translate-y-2 hover:shadow-amber-300/50'>
                <img className='rounded-xl' src={caCard.strMealThumb} alt="" />
                <h4 className='font-bold pt-3'>Name: {caCard.strMeal}</h4>
            </div>
        </div>
    );
};

export default CanadianCard;