import React, { use } from 'react';
import ItalianCard from './ItalianCard';

const ItalianFood = ({italianFoodPromise}) => {
    const italianFoodData = use(italianFoodPromise)
    const italianData = italianFoodData.meals

    return (
        <div className='w-10/12 mx-auto grid grid-cols-4 gap-6'>
            {
                italianData.map(eCard=> <ItalianCard eCard={eCard}></ItalianCard>)
            }
        </div>
    );
};

export default ItalianFood;