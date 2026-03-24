import React from 'react';
import CardSingle from './CardSingle';

const Cart = ({ cart }) => {
    console.log(cart);

    const totalPrice = cart.reduce((sum, item) => {
        const itemPrice = parseInt(item.idMeal.slice(-2)) + 10;
        return sum + itemPrice;
    }, 0);


    return (
        <div className='p-3 space-y-5'>
            <h1 className='text-2xl text-black font-bold text-center'>Total Item: {cart.length}</h1>
            <h2 className="text-lg font-bold text-red-500 text-center">
                Total Cost: ${totalPrice.toFixed(2)}
            </h2>
            {
                cart.map(cartData => <CardSingle cartData={cartData}></CardSingle>)
            }
            
        </div>
    );
};

export default Cart;