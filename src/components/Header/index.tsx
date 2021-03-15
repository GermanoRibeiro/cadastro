import React from 'react';
import './style.css';

const Header = () => {
    return(
        <div className="logo">
            <span className="logo-text green">Task</span>
            <span className="logo-text purple-dark">.</span>
            <span className="logo-text purple-light">ME</span>
        </div>
    );
}

export default Header;