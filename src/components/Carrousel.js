import React, { useState } from 'react';
import '../styles/Carrousel.scss';

function Carrousel({ pictures }) {

    const [current, setCurrent] = useState(0);
    const length = pictures.length;
    
    //Slide suivante
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    //précédente
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // Les <i> sont les boutons gauche et droite, y sont attaché l'événement prev et nextSlide

    //pictures.map récupère toutes les images à afficher dans le carrousel.
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
