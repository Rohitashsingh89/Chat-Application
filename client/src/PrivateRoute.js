import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './context/authContext';

const PrivateRoute = () => {
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Outlet />
    } else {
        return <Navigate to={'/login'} />;
    }

};

export default PrivateRoute;
