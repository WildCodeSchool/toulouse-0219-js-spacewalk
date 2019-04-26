import React from 'react';
import './error404.css';

const Error = () => {
  return (
    <div className="bg-purple">
      <div className="stars"></div>
      <div className="central-body">
        <div className="error-text">
          Houston, we have a problem...
          <br />
          We have landed on the Planet 404
        </div>
      </div>
      <div className="objects">
        <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" alt="rocket" />
        <div className="earth-moon">
          <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" alt="earth" />
          <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" alt="moon" />
        </div>
        <div className="box_astronaut">
          <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" alt="astronaut" />
        </div>
      </div>
      <div className="glowing_stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>

      </div>

    </div >

  );
};

export default Error;
