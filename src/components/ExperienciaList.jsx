import React from 'react';
import ExperienciaCards from './ExperienciaCards'; 

function ExperienceList({ experiences }) {
    return (
        <div className='list container'>
            {experiences.map((experience) => (
                <ExperienciaCards
                    key={experience.key}
                    empresa={experience.empresa}
                    año={experience.año}
                    puesto={experience.puesto}
                    description={experience.descripcion}
                />
            ))}
        </div>
    );
}

export default ExperienceList;
