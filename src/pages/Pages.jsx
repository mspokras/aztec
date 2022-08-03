import React from 'react';
import Home from '../components/mainpage/Home';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Wrapper from '../components/wrapper/Wrapper';

const Pages = ({productItems, cartItems, addToCart}) => {
    return (
        <div>
            <Home cartItems={cartItems} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <Wrapper />
        </div>
    );
};

export default Pages;