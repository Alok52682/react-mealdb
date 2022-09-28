import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="navber">
                <h1>Meals</h1>
                <div>
                    <a href="/">Bangladeshi</a>
                    <a href="/">Indian</a>
                    <a href="/">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Header;