import React from 'react';

const ChineseFoodData = ({ cdata }) => {
    console.log(cdata);

    return (
        <div>

            <div className='border-2 border-green-600 p-4 rounded-xl w-full h-full space-y-2 shadow-2xl'>
                <img className='rounded-xl' src={cdata.strMealThumb} alt="" />
                <h4 className='font-bold'>Name: {cdata.strMeal}</h4>
            </div>
        </div>
    );
};

export default ChineseFoodData;