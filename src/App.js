import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Row, Col } from "./components/Grid";

class App extends Component {
  render() {
    return (
      <Router>
      	<div>
      		<Navbar />
      		<Row>
            <Col size="md-2" name="block-l"/>
		      	<Col size="md-8">
		      		<Route exact path={"/"} component={() => <About/>} />
		      		<Route exact path={"/about"} component={() => <About/>} />
		      		<Route exact path={"/contact"} component={() => <Contact/>} />
		      		<Route exact path={"/portfolio"} component={() => <Portfolio/>} />
		      	</Col>
            <Col size="md-2" name="block-r"/>
      		</Row>
      	</div>
      </Router>
    );
  }
}

export default App;
