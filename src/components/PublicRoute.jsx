import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

const PublicRoute = () => {
  var { currentUser } = useAuth()
  return (
      <>
      {(currentUser === null)? <Outlet /> : (currentUser[0].is_admin === true)?<Navigate to="/questions" /> : <Navigate to="/quiz" />};
      </>
  )
}

export default PublicRoute