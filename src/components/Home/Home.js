import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Shop from '../Shop/Shop';

const Home = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>

            
            <Link to={'/'}>Home</Link>
            <Link to={'/order'}>Order</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
            <h1>This is Home page</h1>
            
        </div>
    );
};

export default Home;