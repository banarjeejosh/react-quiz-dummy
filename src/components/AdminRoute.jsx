import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

const AdminRoute = () => {
    var { currentUser } = useAuth()
  return (
      <>
      {(currentUser[0].is_admin === true)? <Outlet /> : <Navigate to="/" />}
      </>
  )
}

export default AdminRoute