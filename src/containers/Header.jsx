import React from 'react';
import headShot from '../images/face.jpg';

function Header() {
  return (
    <div className="divide-container">
      <div className="xs-section">
        <img src={headShot} alt="headShot" width="160" />
      </div>
      <div className="xl-section">
        <p>
          Hello, my name is Devon Wood and I am front end developer working primarily with
          Javascript, HTML, and CSS. I have spent most of my life surrounded by computers have
          enjoyed working with a multitude of different software in many fields. I taught myself
          several 3D modeling and graphic design software starting from when I was 17 learning
          programs like Autodesk Maya, Adobe Photoshop, and ZBrush to name a few. I have also worked
          with several game engines including Unity and the Unreal Engine to make a few small
          projects.
        </p>
        <p>
          I am and have always been a avid gamer ever since I first owned a PC. My very first and
          favorite game was the original Doom and I could spend hours on end playing. I spent many
          years learning game design and the intricate roles each member of a development team had
          which led me to greatly respect the skill and effort of the people involved. I am
          currently working for Trilogy Education tutoring students in the same class I went through
          to help them better understand the world of coding.
        </p>
      </div>
    </div>
  )
}

export default Header;
