import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

const RequireAuth = ({children}) => {
  const location = useLocation();
  const {isAuth} = useAuth();

  if (!isAuth) return <Navigate replace to='/login' state={{from: location}} />

  return children;
};

export default RequireAuth;
// youtube.com/watch?v=jv0ckzkKYzU&list=PLiZoB8JBsdznY1XwBcBhHL9L7S_shPGVE&t=724s (Михаил Непомнящий, 2021)