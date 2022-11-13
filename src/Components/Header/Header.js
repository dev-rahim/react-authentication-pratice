import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOutUser } = useAuth()
    const handleSignOut = () => {
        logOutUser()
    }
    return (
        <div>
            <div className='navbar'>
                <NavLink to='/home'>Home</NavLink>
                {!user.displayName ? <NavLink to='/login'>Login</NavLink>
                    : <Link onClick={handleSignOut}> Log Out</Link>
                }
                <NavLink to='/book'>Book</NavLink>
            </div>
        </div>
    );
};

export default Header;