import React from 'react';
import './error404.css';

const Error = () => {
  return (
    <div className="bg-gradient text-center d-flex align-items-center justify-content-center">
      <p className="error-text">
        Houston, we have a problem...
        <br />
        We &apos;ve landed on the planet N°404.
      </p>
    </div>
  );
};

export default Error;
