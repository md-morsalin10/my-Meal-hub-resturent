import React, { use } from 'react';
import CanadianCard from './CanadianCard';

const CanadianFood = ({canadianFoodPromise}) => {
  const  canadianFood = use(canadianFoodPromise)
 const canadianData = canadianFood.meals
    return (
        <div className='grid grid-cols-4 w-10/12 gap-6 mx-auto'>
            {
                canadianData.map(caCard=> <CanadianCard caCard={caCard}></CanadianCard>)
            }
        </div>
    );
};

export default CanadianFood;