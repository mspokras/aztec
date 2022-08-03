import React from 'react';
import Head from './Head';
import './Header.css';
import Navbar from './Navbar';
import Search from './Search';

const Header = ({cartItems}) => {
    return (
        <>
            <Head />
            <Search cartItems={cartItems} />
            <Navbar />
        </>
    );
};

export default Header;