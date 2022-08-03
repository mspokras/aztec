import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <div>
            <nav className='navbar'>
                <div className="container jsb_flex">
                    <div className="categories jsb_flex">
                        <i className="fa-solid fa-border-all"></i>
                        <h4>Categories <i className="fa-solid fa-chevron-down"></i></h4>
                    </div>
                    <div className="navlink">
                        <ul className={mobileMenu ? 'nav-links-mobileMenu' : 'link jsb_flex capitalize'}>
                            <li>
                                <Link to="/">home</Link>
                            </li>
                            <li>
                                <Link to="/pages">pages</Link>
                            </li>
                            <li>
                                <Link to="/user">user account</Link>
                            </li>
                            <li>
                                <Link to="/vendor">vendor account</Link>
                            </li>
                            <li>
                                <Link to="/track">track my order</Link>
                            </li>
                            <li>
                                <Link to="/contact">contact</Link>
                            </li>
                        </ul>

                        <button className='toggle' onClick={()=>{setMobileMenu(!mobileMenu)}}>
                            {mobileMenu ? <i className="fa-solid fa-xmark close home-btn"></i> : <i className="fa-solid fa-bars open"></i>}
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;