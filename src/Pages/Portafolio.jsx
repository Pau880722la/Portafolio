import React from 'react';
import PortafolioList from '../components/PortafolioList';
import ContentPortafolio from '../experiencia/ContentPortafolio';  

function Portafolio() {
    return (
        <div>
            <h1>Portafolio</h1>
            <PortafolioList portafolios={ContentPortafolio} />
        </div>
    );
}

export default Portafolio;
