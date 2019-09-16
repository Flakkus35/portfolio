import React from 'react';
import headShot from '../images/face.jpg';

function Header() {
  return (
    <div className="divide-container">
      <div className="xs-section">
        <img src={headShot} alt="headShot" width="160" />
      </div>
      <div className="xl-section">
        <h1>Devon Wood</h1>
      </div>
    </div>
  )
}

export default Header;
