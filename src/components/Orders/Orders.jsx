import React from 'react';
import "./Orders.css" ;
const Orders = ({cartData , removeItem}) => {

    const {name , picture , quantity , price   ,specialFeatures} = cartData ;
    return (
        <div className='order-div'>
      <div className="image-div">
      <img src={picture} alt="product" className='image'/>
      </div>
<div className="text-div">
           <p> {name} </p>
            <p>Quantity : {quantity} </p>
            <p>Price : ${price*quantity} </p>
            <p>Special Features : {specialFeatures} </p>
</div>
<div className="delete-div">
    <button className='btn deleteButton' onClick={() => removeItem(cartData)}>  Delete</button>
</div>
        </div>
    );
};

export default Orders;