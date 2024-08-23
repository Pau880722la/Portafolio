import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import Logo from '../images/Logo.png';
import NavButton from './NavButton.jsx';

export default function Header() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <header className="header">
            <div className='container'>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="navigation">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><NavButton handleClick={() => handleNavigation('/portafolio')}>Portafolio</NavButton></li>
                        <li><NavButton handleClick={() => handleNavigation('/contacto')}>Contacto</NavButton></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
