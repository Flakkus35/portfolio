import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  state = {
    headers: [
      'Portfolio',
      'About',
      'Contact'
    ]
  }

  changePage = (event) => {
    console.log(event.target)
    // this.history.push(event.target.getAttribute('value'))
  }

  // const test =  (
  //   <div className="half-container">
  //     <div onClick={changePage} value="/" className="btn btn__portfolio">
  //       Portfolio
  //     </div>
  //     <div onClick={changePage} value="/contact" className="btn btn__contact">
  //       Contact
  //     </div>
  //   </div>
  // )

  render() {
    const { headers } = this.state;

    return (
      <div className="navigation-container">
        <div className="navigation__left">
          <div>
            {headers[0]}
          </div>
        </div>
        <div onClick={this.changePage} className="navigation__left-arrow">
          &lt;
        </div>
        <div className="navigation__center">
          {headers[1]}
        </div>
        <div onClick={this.changePage} className="navigation__right-arrow">
          &gt;
        </div>
        <div className="navigation__right">
          <div>
            {headers[2]}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigation);
