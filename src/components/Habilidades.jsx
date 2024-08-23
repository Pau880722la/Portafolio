import React from 'react';
import './Habilidades.scss';

const images = require.context('../images/habilidades', true);
const imageList = images.keys().map(image => images(image));

export default function Habilidades() {
    return (
        <div className='habilidades'>
            <div className='container'>
                <h2 className='title animate__animated animate__fadeInDown'>Habilidades</h2>
                <div className='habilidades__logos animate__animated animate__slideInUp'>
                    {imageList.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Habilidad ${index + 1}`} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
