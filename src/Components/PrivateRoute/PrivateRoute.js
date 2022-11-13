import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const PrivateRoute = () => {
    const { user } = useAuth();

    return (
        user.displayName ? <Outlet /> : <Navigate to='/login' />
    );
};

export default PrivateRoute;