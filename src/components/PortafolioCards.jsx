import React from "react";

export default function PortafolioCards({imagen, description, link}){

    return(
        <div className='portafolio-items'>
            <div className='portafolio-items__left'>
                <img src={imagen} alt="portafolio"/>
            </div>
            <div className='portafolio-items__right'>
                <p>{description}</p>
                <a href={link} className="btn" target="_black">Ver Proyecto</a>
            </div>
        </div>
    )
}
