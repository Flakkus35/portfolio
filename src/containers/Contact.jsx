import React from 'react';
import ContLink from '../components/ContLink';

function Contact() {
  const profileLinks = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/devon-wood-398397144/',
      image: 'linkedin'
    },
    {
      name: 'Github',
      link: 'https://github.com/Flakkus35',
      image: 'github'
    },
    {
      name: 'Email',
      link: 'wooddv35@gmail.com',
      image: 'envelope'
    }
  ];

  return (
    <div>
      {profileLinks.map((link) => (
        <ContLink info={link} key={link.name} />
      ))}
    </div>
  )
}

export default Contact;
