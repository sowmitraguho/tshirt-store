import React from 'react';
import './shoppingCart.css';

const ShoppingCart = ({cart, handleRemoveCart}) => {
    let total = 0;
    cart.map(shirt => total = total + shirt.price);
    return (
        <div className='orders'>
            <h1>Here are Your Orders!</h1>
            <div className="order-calculation">
                <h2>product: {}</h2>
                <h3>Quantity: {cart.length}</h3>
                {
                    cart.map(shirt => <div className='added_product' key={shirt._id}>
                        <p>{shirt.name}</p>
                        <button onClick={() => handleRemoveCart(shirt)}>x</button>
                    </div>
                    )
                }
                <h3>Price: ${total}</h3>
            </div>
        </div>
    );
};

export default ShoppingCart;