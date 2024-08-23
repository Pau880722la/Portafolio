import React from 'react';
import TopContent from '../components/TopContent';
import Habilidades from '../components/Habilidades';
import ExperienciaList from '../components/ExperienciaList'; 
import ContentExperience from '../experiencia/ContentExperience'; 

function HomePage() {
    return (
        <div>
            <TopContent />
            <Habilidades />
            <h2 className='title animate__animated animate__fadeInDown'>Mi Experiencia</h2>
            <ExperienciaList experiences={ContentExperience} />
        </div>
    );
}

export default HomePage;
