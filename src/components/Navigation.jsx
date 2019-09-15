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
    const { headers } = this.state;
    const { history } = this.props;
    const pan = event.target.getAttribute('value');

    if (pan == 'pan-left') {
      const last = headers.pop(0);
      headers.unshift(last)
      history.push(headers[1].toLowerCase());
      this.setState({
        headers: headers
      })
    } else {
      const first = headers.shift(0);
      headers.push(first);
      history.push(headers[1].toLowerCase());
      this.setState({
        headers: headers
      })
    }
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
        <div onClick={this.changePage} value="pan-left" className="navigation__left-arrow">
          &lt;
        </div>
        <div className="navigation__center">
          {headers[1]}
        </div>
        <div onClick={this.changePage} value="pan-right" className="navigation__right-arrow">
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

Navigation.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line
}

export default withRouter(Navigation);
