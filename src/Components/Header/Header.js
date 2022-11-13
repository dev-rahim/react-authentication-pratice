import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='navbar'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/book'>Book</NavLink>
            </div>
        </div>
    );
};

export default Header;