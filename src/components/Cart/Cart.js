import React from 'react';
import './cart.css'

const Cart = ({product, handleAddToCart}) => {
    const {name, price, picture, gender} = product;
    return (
        <div className='cart'>
            <img src={picture} alt="" />
            <h2>Product Name: {name}</h2>
            <h3>Product for: {gender}</h3>
            <p>Price: ${price}</p>
            <button onClick={()=> handleAddToCart(product)}>Buy Now</button>
        </div>
    );
};

export default Cart;