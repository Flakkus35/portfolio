import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contlink({ info : { name, link, image }}) {
  return (
    <a className="contact__container" href={name == 'Email' ? `mailto:${link}` : link}>
      <FontAwesomeIcon size="3x" icon={image == 'envelope' ? image : ['fab', image]} />
      <div className="contact__name">{name}</div>
    </a>
  )
}

export default Contlink;
