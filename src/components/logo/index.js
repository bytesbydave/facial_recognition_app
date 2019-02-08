import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import eye from './eye.png';

const Logo = () => {
  return (
    <div className="logo-background">
      <Tilt
        className="Tilt"
        options={{ max: 45 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner">
          <img src={eye} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
