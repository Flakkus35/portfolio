import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import herImg from '../images/heroku.png';

function Project({ project: { name, description, github, heroku, screenshot } }) {
  return (
    <div>
      <h4 className="project__title">{name}</h4>
      <div className="project__container">
        <div className="project__description">
          {description}
        </div>
        {screenshot
          ? <div className="project__screenshot">
              <img src={screenshot} alt="screenshot" width="100%" />
            </div>
          : null
        }
      </div>
      <div className="project__link-container">
        <div className="project__link-github">
          <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
          <a href={github}>Github</a>
        </div>
        {heroku
          ? <div className="project__link-heroku">
              <img src={herImg} alt="heroku" width="50" />
              <a href={heroku}>Heroku</a>
            </div>
          : null
        }
      </div>
    </div>
  )
}

export default Project;