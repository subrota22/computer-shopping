import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { deleteSingaleDataFromLocalDb, removeItemAllFromLocalStorage } from '../LocalDb/LocalDb';
import Orders from '../Orders/Orders';
import Swal from 'sweetalert2';
import "./Review.css" ;
const Review = () => {
const {initialCart} = useLoaderData() ;
const [cart ,  setCart] = useState(initialCart) ;
const removeItem = (cartData) => {
const remainingData = cart.filter(product => product._id !== cartData._id ) ; //cart + storage filter 
setCart(remainingData)  ;
deleteSingaleDataFromLocalDb(cartData._id) ; 
Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Your  product successfully deleted!!',
    showConfirmButton: false,
    timer: 1700
  })
}

const replaceItem = () => {
setCart([]) ;
removeItemAllFromLocalStorage() ;
Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Your all product successfully deleted!!',
    showConfirmButton: false,
    timer: 1700
  })
}
    return (
    <div className='reviewDiv'>
            <div>
            <h2 className='text-center text-3xl text-blue-400'> Review page </h2> 
            {
                cart.length === 0 ? <p className='text-center my-44'><NavLink to="/" className="text-center text-2xl text-green-400">Shop now </NavLink></p> : undefined 
            }
            {
                cart.map(cartData => <Orders key={cartData._id} removeItem={removeItem}
                     cartData={cartData} ></Orders> )
            }
        </div>

        <div className="cartInfo-div">
        <Cart cart={cart} >
        <NavLink to="/" className="btn btn-primary">Home</NavLink> 
        <button onClick={() => replaceItem()} className="btn btn-primary ml-4 ">Replace </button> 
        </Cart>
        </div>
    </div>
    );
};

export default Review;