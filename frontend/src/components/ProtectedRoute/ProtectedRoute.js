import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';

const ProtectedRoute = ({ children }) => {
   const { isAuthenticated, loading } = useAuth();
 
   return (loading)? <div>Loading...</div> :
   (isAuthenticated) ? (children) : (<Navigate to="/login" replace />);
 };

export default ProtectedRoute;
