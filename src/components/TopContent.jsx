import React from 'react';
import './TopContent.scss';
import 'animate.css';

export default function TopContent(){

    return(
        <div className='top-content container'>
            <div className='top-content__text'>
                <h1 className='animate__animated animate__fadeInDown'>Paula Delgado</h1>
                <h2 className='animate__animated animate__fadeInDown'>Front End / Diseñadora Gráfica</h2>
                <p>Desarrollador Front-End con más de cuatro años de experiencia escribiendo código para diversas empresas. 
                    Esto me ha permitido brindar soluciones innovadoras y personalizadas a través de una codificación eficiente. 
                    Combino habilidades avanzadas de diseño gráfico con conocimientos técnicos de front-end, asegurando una 
                    integración perfecta y atractiva en cada proyecto.
                </p>
            </div>
            <div className='top-content__image'></div>
        </div>
    )
}