import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import Cart from '../Cart/Cart';
import { checkDataToGetData, storeDataToLocalDb } from '../LocalDb/LocalDb';
import Product from '../Product/Product';
import "./Products.css" ;
const Products = () => {
const [cart , setCart] = useState([]) ;
const products = useLoaderData() ;
//connection with local storage and api data by the quantity 
useEffect(() => {
const localData = checkDataToGetData() ;
let saveCart = [] ;
for(const id in localData) {
const addedProducts = products.find(data => data._id === id) ; //if data get from local storage 
if(addedProducts) {
const dataQuantity = localData[id] ;
addedProducts.quantity = dataQuantity ; //connected with api and local storage//
saveCart.push(addedProducts) ;//push all object that equal to local storage//
}
}
setCart(saveCart) ;
} , [products]) ;

const addToCart = (selectedProduct) => {
const exist = cart.find(cartProduct => cartProduct._id === selectedProduct._id) ; 
//equal but not exist  = 1 
let newCart = [] ;
if(!exist) {
selectedProduct.quantity = 1  ;
newCart =  [...cart , selectedProduct] ; //cart + params
} else {
const rest = cart.filter(existData => existData._id !== selectedProduct._id) ; //new id but existed before theat +1 
selectedProduct.quantity   =  selectedProduct.quantity + 1 ; 
newCart = [...rest , exist ] //set with exist item // rest + exist 
}
setCart(newCart) ;
storeDataToLocalDb(selectedProduct._id) ;
 
Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Your product successfully added!!',
  showConfirmButton: false,
  timer: 1700
})
}

    return (
        <div className='productAndCart'>
          <div className="all-product">
          {
                products.map(product => <Product key={product._id} addToCart={addToCart} 
                  product={product}></Product>)
            }
          </div>
          <div className="cart-info">
  
         <Cart cart={cart} > 
         <NavLink to="/review">
          <button className='btn btn-success'>Review </button>
          </NavLink>
         </Cart>
          </div>
        </div>
    );
};

export default Products;