import React from 'react';
import "./Product.css" ;
const Product = ({product , addToCart}) => {
const {name , price , quantity , picture  } = product ;
    return (
        <div className='product'>
            <img src={picture} alt="product" className='productImage'/>
           <p> Name : {name} </p>
            <p> Price : ${price} </p>
            <p>Quantity : {quantity} </p>
        <button onClick={() => addToCart(product)} className="btn btn-primary"> Add to cart </button>
        </div>
    );
};

export default Product;