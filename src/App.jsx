import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';
import Header from './containers/Header';
import Navigation from './components/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add( fab, faLinkedin, faGithub, faEnvelope );

function App() {
  return (
    <div className="main-container">
      <Router>
        <div className="sub-container">
          <Header />
          <Navigation />
          <Route exact path="/" component={() => <Portfolio />} />
          <Route exact path="/contact" component={() => <Contact />} />
        </div>
      </Router>
    </div>
  );
}

export default App;
