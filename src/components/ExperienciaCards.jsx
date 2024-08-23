import React from 'react';
import './ExperienciaCards.scss';

export default function ExperienciaCards({ empresa, año, puesto, description }) {
    return (
        
        <div className='list-items'>
            <div className='list-items__left'>
                <h3>{empresa}</h3>
                <p>{año}</p>
            </div>
            <div className='list-items__right'>
                <h3>{puesto}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
