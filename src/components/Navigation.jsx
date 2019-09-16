import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: [
        'PORTFOLIO',
        'ABOUT',
        'CONTACT'
      ]
    };
  }

  componentDidMount() {
    const { headers } = this.state;
    const { history } = this.props;

    history.push(headers[1].toLowerCase());
  }

  changePage = (event) => {
    const { headers } = this.state;
    const { history } = this.props;
    const pan = event.target.getAttribute('value');

    if (pan === 'pan-left') {
      const last = headers.pop(0);
      headers.unshift(last);
      history.push(headers[1].toLowerCase());
      this.setState({
        headers
      });
    } else {
      const first = headers.shift(0);
      headers.push(first);
      history.push(headers[1].toLowerCase());
      this.setState({
        headers
      });
    }
  }

  render() {
    const { headers } = this.state;

    return (
      <div className="navigation-container">
        <div className="navigation__left">
          <div>
            {headers[0]}
          </div>
        </div>
        <div onClick={this.changePage} value="pan-left" className="navigation__left-arrow"> { /* eslint-disable-line */ }
          &lt;
        </div>
        <div className="navigation__center">
          {headers[1]}
        </div>
        <div onClick={this.changePage} value="pan-right" className="navigation__right-arrow"> { /* eslint-disable-line */ }
          &gt;
        </div>
        <div className="navigation__right">
          <div>
            {headers[2]}
          </div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  history: PropTypes.object.isRequired // eslint-disable-line
};

export default withRouter(Navigation);
