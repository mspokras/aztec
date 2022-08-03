import React from 'react';
import { Link } from 'react-router-dom';

const Search = ({cartItems}) => {
    window.addEventListener('scroll', function() {
        const search = document.querySelector('.search');
        search.classList.toggle("active", window.scrollY > 100);
    })
    return (
        <div className='search'>
            <div className="container jsbc_flex">
                <div className="logo width">Aztec</div>
                <div className="search-box d_flex">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Search and press enter...' />
                    <span>All Categories</span>
                </div>
                <div className="icon d_flex width">
                    <i className="fa-solid fa-user icon-circle"></i>
                    <div className="cart">
                        <Link to="/cart">
                            <i className="fa-solid fa-cart-shopping icon-circle"></i>
                            <span>{cartItems.length === 0 ? 0 : cartItems.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;