import React from 'react';
import usflag from '../../images/usa.jpg';
import euflag from '../../images/eu.png';

const Head = () => {
    return (
        <div className="head">
            <div className="container jsb_flex">
                <div className="left">
                    <i className="fa fa-phone"></i>
                    <label>+38(067)123-45-67</label>
                    <i className="fa-solid fa-envelope"></i>
                    <label>aztec.example@gmail.com</label>
                </div>
                <div className="right jsbc_flex">
                    <img className='us-flag' src={usflag} alt=" " />
                    <img className='eu-flag' src={euflag} alt=" " />
                </div>
            </div>
        </div>
    );
};

export default Head;