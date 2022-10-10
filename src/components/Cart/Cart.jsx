import React from 'react';import Main from '../../Main/Main';
import "./Cart.css" ;
const Cart = ({cart , children}) => {
 let totalQuantity = 0 ;
 let price = 0 ;
 let tax = 0 ;
 let grandTotal = 0 ;
 for(const cartData of cart) {
 totalQuantity = totalQuantity + cartData.quantity ;
 price = price + cartData.price * cartData.quantity ;
 tax = tax + 100/cartData.price *  10 ;
 grandTotal = price + tax ;
 }
    return (
        <div className='cart'>
            <Main totalQuantity={totalQuantity} grandTotal={grandTotal}> </Main>
        <p> Total {totalQuantity} products selected </p>
            <p> Price ${parseInt(price).toFixed(2)} </p>
            <p>Tax${parseInt(tax).toFixed(2)}</p>
            <p>Grand totoal ${parseInt(grandTotal).toFixed(2)}</p>
            <br />
            {children}
        </div>
    );
};

export default Cart;