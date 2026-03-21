import React, { use } from 'react';
import ChineseFoodData from './ChineseFoodData/ChineseFoodData';

const CategoryCard = ({chineseFoodPromise}) => {
    const chineseFoodData = use(chineseFoodPromise)
    const chineseData = chineseFoodData.meals
    
    return (
        <div className='grid grid-cols-4 w-10/12 mx-auto gap-6'>
           {/* <p>name: {chineseFoodData.meals.strMeal}</p>*/}

           {
            chineseData.map(cdata=> <ChineseFoodData key={cdata.idMeal} cdata={cdata}></ChineseFoodData>)
           }
        </div>
    );
};

export default CategoryCard;