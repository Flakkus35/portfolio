import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function Contlink({ info: { name, link, image } }) {
  Contlink.propTypes = ({
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    }).isRequired
  });

  return (
    <a className="contact__container" href={name === 'Email' ? `mailto:${link}` : link}>
      <FontAwesomeIcon size="3x" icon={image === 'envelope' ? image : ['fab', image]} />
      <div className="contact__name">{name}</div>
    </a>
  );
}

export default Contlink;
