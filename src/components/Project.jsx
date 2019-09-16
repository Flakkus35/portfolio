import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import herImg from '../images/heroku.svg';

function Project({ project: { name, description, github, heroku, screenshot, tech } }) {
  return (
    <div className="project">
      <h3 className="project__title">{name}</h3>
      <div className="project__info-container">
        <div className="project__description">
          {description}
        </div>
        <div className="project__tech">
          {tech.map((ele) => (
            <li>{ele}</li>
          ))}
        </div>
        {screenshot
          ? <div className="project__screenshot">
              <img src={screenshot} alt="screenshot" width="100%" />
            </div>
          : null
        }
      </div>
      <div className="project__link-container">
        <a href={github} className="project__link-github">
          <FontAwesomeIcon size="3x" icon={["fab", "github"]} />
        </a>
        {heroku
          ? <a href={heroku} className="project__link-heroku">
              <img src={herImg} alt="heroku" width="40" />
            </a>
          : null
        }
      </div>
    </div>
  )
}

export default Project;