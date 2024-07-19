// src/components/Carrousel.jsx
import React, { useState } from 'react';
import '../styles/Carrousel.css';

function Carrousel({ pictures }) {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="carrousel">
            <i className="fa-solid fa-chevron-left left-arrow" onClick={prevSlide}></i>
            <i className="fa-solid fa-chevron-right right-arrow" onClick={nextSlide}></i>
            <div className='count'>
            <p><span>{current + 1}</span>/<span>{length}</span></p> 
            </div>
            {pictures.map((picture, index) => (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && <img src={picture} alt={`slide ${index}`} className="carrousel__image" />}
                </div>
            ))}
        </div>
    );
}

export default Carrousel;
