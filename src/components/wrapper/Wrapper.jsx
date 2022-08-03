import React from 'react';
import './Wrapper.css';

const Wrapper = () => {
    const data = [
        {
            cover: <i className='fa-solid fa-truck-fast'></i>,
            title: "Worldwide Delivery",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam pariatur consectetur porro",
        },
        {
            cover: <i className='fa-solid fa-id-card'></i>,
            title: "Safe Payment",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam pariatur consectetur porro",
        },
        {
            cover: <i className='fa-solid fa-headset'></i>,
            title: "24/7 Support ",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam pariatur consectetur porro",
        },
    ];
    return (
        <>
            <section className='wrapper background'>
                <div className='container grid'>
                {data.map((val, index) => {
                    return (
                    <div className='product' key={index}>
                        <div className='img icon-circle'>
                            <i>{val.cover}</i>
                        </div>
                        <h3>{val.title}</h3>
                        <p>{val.desc}</p>
                    </div>
                    )
                })}
                </div>
            </section>
        </>
    );
};

export default Wrapper;