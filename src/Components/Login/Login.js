import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {
    const { signInWithGoogle, user, logOutUser, } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => navigate(redirect_uri))
    }
    const handleSignOut = () => {
        console.log('SignOUt');
        logOutUser()
    }
    return (
        <div>
            <h2>Login</h2>
            {user?.displayName && <h3>welcome {user.displayName}</h3>}

            <br /><br /><br /><br /><br />

            <button onClick={handleGoogleSignIn}>Google sign in</button>
            <button onClick={handleSignOut}>sign out</button>
        </div>
    );
};

export default Login;