import React from 'react';
import './Cart.css';

const Cart = ({cartItems, addToCart, decreaseQty, deleteCartItem}) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.price * item.qty, 0)
    return (
        <>
            <section className="cart-items">
                <div className="container jsb_flex">
                    <div className="cart-details">
                        {cartItems.length === 0 && <h1 className='no-items product'>No Items Added in Cart</h1>}
                        {cartItems.map((item)=>{
                            const productQty = item.price * item.qty;
                            return (
                                <div className="cart-list product jsb_flex" key={item.id}>
                                    <div className="img">
                                        <img src={item.cover} alt={item.name} />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.name}</h3>
                                        <h4>
                                            ${item.price}.00 x {item.qty}
                                            <span>${productQty}.00</span>
                                        </h4>
                                    </div>
                                    <div className="cart-items-function">
                                        <div className="removeCart">
                                            <button onClick={()=>{deleteCartItem(item)}}>
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                        <div className="cartControl jsb_flex">
                                            <button className='incCart' onClick={()=>{addToCart(item)}}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                            <button className='decCart' onClick={()=>{decreaseQty(item)}}>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='cart-total product'>
                            <h2>Card Summary</h2>
                            <div className='jsb_flex'>
                                <h4>Total Price:</h4>
                                <h3>${totalPrice}.00</h3>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;