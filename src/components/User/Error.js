import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold m-0 primary-text-color">404</h1>
        <h2 className="display-4 m-0">Oops! Page Not Found</h2>
        <p className="lead ">It seems the page you're looking for doesn't exist.</p>
        <button onClick={handleGoBack} className="btn btn-primary btn-lg">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error404;
