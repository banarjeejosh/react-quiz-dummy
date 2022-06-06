import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
const PrivateRoute = () => {

    var { currentUser } = useAuth()
    return (
        <>
    {(currentUser !== null)? <Outlet /> : <Navigate to="/login" />}
        </>
    )  
  
}

export default PrivateRoute