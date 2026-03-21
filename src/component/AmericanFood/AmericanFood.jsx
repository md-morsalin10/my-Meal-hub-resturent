import React, { use } from 'react';
import AmericanCard from './AmericanCard';

const AmericanFood = ({americanFoodPromise}) => {
    const americanFoodData = use(americanFoodPromise)
    const americanData = americanFoodData.meals

    return (
        <div className='w-10/12 mx-auto grid grid-cols-4 gap-6'>
            {
                americanData.map(aCard=> <AmericanCard aCard={aCard}></AmericanCard>)
            }
        </div>
    );
};

export default AmericanFood;