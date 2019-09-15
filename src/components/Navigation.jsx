import React from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function Navigation({ history }) {
  Navigation.defaultProps = {
    history: {}
  }

  const changePage = (event) => {
    // console.log(event.target)
    history.push(event.target.getAttribute('value'))
  }

  return (
    <div className="half-container">
      <div onClick={changePage} value="/" className="btn btn__portfolio">
        Portfolio
      </div>
      <div onClick={changePage} value="/contact" className="btn btn__contact">
        Contact
      </div>
    </div>
  )
}

Navigation.propTypes = {
  history: PropTypes.object.isRequired //eslint-disable-line
}

export default withRouter(Navigation);
