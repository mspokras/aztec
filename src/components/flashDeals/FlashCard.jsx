import React, { useState } from 'react';
import Slider from "react-slick";

const NextArrow = (props) => {
    const {onClick} = props;
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='next'>
                <i className="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>
    )
};
const PrevArrow = (props) => {
    const {onClick} = props;
    return (
        <div className='control-btn' onClick={onClick}>
            <button className='prev'>
                <i className="fa-solid fa-arrow-left-long"></i>
            </button>
        </div>
    )
};
const FlashCard = ({productItems, addToCart}) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <>
        <Slider {...settings}>
        {productItems.map((productItem)=>{
            return (
                <div className="box" key={productItem.id}>
                <div className="product mtop">
                    <div className="img">
                        <span className="discount">{productItem.discount}% Off</span>
                        <img src={productItem.cover} alt="" />
                        <div className="product-like">
                            <label>{count}</label><br />
                            <i className="fa-solid fa-heart" onClick={increment}></i>
                        </div>
                        <div className="product-details">
                            <h3>{productItem.name}</h3>
                            <div className="rate">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <div className="price">
                                <h4>{productItem.price}.00$</h4>
                                <button onClick={()=>addToCart(productItem)}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            );
        })}
        </Slider>
        </>
    );
};


export default FlashCard;