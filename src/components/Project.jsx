import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import herImg from '../images/heroku.svg';

function Project({
  project: {
    name, description, github, heroku, screenshot, tech
  }
}) {
  Project.propTypes = ({
    project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      heroku: PropTypes.string,
      screenshot: PropTypes.string,
      tech: PropTypes.arrayOf(
        PropTypes.string
      ).isRequired
    })
  });

  return (
    <div className="project">
      <h3 className="project__title">{name}</h3>
      <div className="project__info-container">
        <div className="project__description">
          {description}
        </div>
        <div className="project__tech">
          {tech.map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </div>
        {screenshot
          ? (
            <div className="project__screenshot">
              <img src={screenshot} alt="screenshot" width="100%" />
            </div>
          )
          : null}
      </div>
      <div className="project__link-container">
        <a href={github} className="project__link-github">
          <FontAwesomeIcon size="3x" icon={['fab', 'github']} />
        </a>
        {heroku
          ? (
            <a href={heroku} className="project__link-heroku">
              <img src={herImg} alt="heroku" width="40" />
            </a>
          )
          : null}
      </div>
    </div>
  );
}

Project.defaultProps = {
  project: {
    heroku: '',
    screenshot: ''
  }
};

export default Project;
