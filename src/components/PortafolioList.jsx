import React from 'react';
import PortafolioCards from './PortafolioCards'; 
import './PortafolioList.scss';

function PortafolioList({ portafolios }) {
    return (
        <div className='list-portafolio container'>
            {portafolios.map((portafolio) => (
                <PortafolioCards
                    key={portafolio.key}
                    imagen={portafolio.imagen}
                    link={portafolio.link}
                    description={portafolio.descripcion}
                />
            ))}
        </div>
    );
}

export default PortafolioList;
