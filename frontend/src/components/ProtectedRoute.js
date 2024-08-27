import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const userRole = localStorage.getItem('userRole');
  console.log('ProtectedRoute userRole:', userRole);
  console.log('ProtectedRoute expected role:', role);
  return userRole === role ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
