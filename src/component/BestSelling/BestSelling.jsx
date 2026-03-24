import React, { use, useState } from 'react';
import BestSellingCard from './BestSellingCard';
import { ToastContainer, toast } from 'react-toastify';
import Cart from '../Cart/Cart';

const BestSelling = ({ bestSellingPromise }) => {
    const bestSellingData = use(bestSellingPromise)
    const bestSelling = bestSellingData.meals;

    const [cart, setCart] = useState([])
    const handleCart = (foods) => {
        setCart([...cart, foods])
    }

    const handleOrderBtn = () => {
        setCart([])
        toast.success("Order Completed!");
    }

    return (
        <div className='p-3 w-11/12 mx-auto'>
            <h2 className='text-3xl pt-5 font-bold text-center'>Best Selling Product</h2>
            <hr className='w-2/12 mx-auto h-3 rounded-2xl bg-yellow-400 border-0 mt-2' />
            <div className='flex gap-2'>
                <div className='grid grid-cols-4 gap-5 pt-6 w-[80%]'>
                    {
                        bestSelling.map(sData => <BestSellingCard
                            key={sData.idMeal}
                            handleCart={handleCart}
                            sData={sData}></BestSellingCard>)
                    }
                </div>
                <div className='w-[20%] p-2  rounded-xl bg-white'>
                    <Cart cart={cart}></Cart>
                    <button onClick={handleOrderBtn} className='btn btn-success text-white w-full'>Order</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BestSelling;