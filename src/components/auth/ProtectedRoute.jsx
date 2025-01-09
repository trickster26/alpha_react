import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SkeletonLoader from '../common/SkeletonLoader';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token');

  if (loading) {
    return <SkeletonLoader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute; 