import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    //console.log(products);
    const [cart, setCart] = useState([]);
    const handleAddToCart = product => {
        const exists = cart.find(ts => ts._id === product._id);
        if (exists) {
            alert('This product is already added!');
        } else {
            const newCart = [...cart, product];
            setCart(newCart);
        }

    }
    const handleRemoveCart = product => {
        const newCart = cart.filter(shirt => shirt._id !== product._id);
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className="products">
                <h1>Here total {products.length} products for you!</h1>
                <div className="sort-product">
                    {
                        products.map(product => <Cart key={product._id} product={product} handleAddToCart={handleAddToCart} ></Cart>)
                    }
                </div>
            </div>
            <div className="shopping-cart">
                <ShoppingCart cart={cart} handleRemoveCart={handleRemoveCart}></ShoppingCart>
            </div>

        </div>
    );
};

export default Shop;