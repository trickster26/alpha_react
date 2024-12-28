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
    <>
      <div className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center">
        <svg viewBox="0 0 1440 320"><path fill="#0B5ED7" fill-opacity="1" d="M0,96L0,256L68.6,256L68.6,32L137.1,32L137.1,224L205.7,224L205.7,256L274.3,256L274.3,128L342.9,128L342.9,224L411.4,224L411.4,32L480,32L480,288L548.6,288L548.6,128L617.1,128L617.1,96L685.7,96L685.7,96L754.3,96L754.3,160L822.9,160L822.9,224L891.4,224L891.4,128L960,128L960,32L1028.6,32L1028.6,96L1097.1,96L1097.1,96L1165.7,96L1165.7,288L1234.3,288L1234.3,64L1302.9,64L1302.9,192L1371.4,192L1371.4,160L1440,160L1440,0L1371.4,0L1371.4,0L1302.9,0L1302.9,0L1234.3,0L1234.3,0L1165.7,0L1165.7,0L1097.1,0L1097.1,0L1028.6,0L1028.6,0L960,0L960,0L891.4,0L891.4,0L822.9,0L822.9,0L754.3,0L754.3,0L685.7,0L685.7,0L617.1,0L617.1,0L548.6,0L548.6,0L480,0L480,0L411.4,0L411.4,0L342.9,0L342.9,0L274.3,0L274.3,0L205.7,0L205.7,0L137.1,0L137.1,0L68.6,0L68.6,0L0,0L0,0Z"></path></svg>
        <div className="text-center">
          <h1 className="display-1 fw-bold m-0 primary-text-color">404</h1>
          <h2 className="display-4 m-0">Oops! Page Not Found</h2>
          <p className="lead ">It seems the page you're looking for doesn't exist.</p>
          <button onClick={handleGoBack} className="btn btn-primary btn-lg mt-3">
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Error404;
