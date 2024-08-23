import React from 'react';

export default function NavButton({ handleClick, children }) {
    return (
        <button className="nav-button" onClick={handleClick}>
            {children}
        </button>
    );
}
