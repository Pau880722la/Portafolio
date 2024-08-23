import React from 'react';
import './Footer.scss';
import Behance from '../images/behance.png'
import Linkedin from '../images/linkedin.png'

export default function Footer(){

    return(
        <div className='footer'>
            <div>2024 By Paula Delgado</div>
            <ul className='logos'>
                <li><a href="https://www.behance.net/Alupad"><img src={Behance} alt="Logo Behance" /></a></li>
                <li><a href="https://www.linkedin.com/in/paula-andrea-delgado-rozo-15a13a60/"><img src={Linkedin} alt="Logo LinkedIn" /></a></li>
            </ul>
        </div>
    )
}