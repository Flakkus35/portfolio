import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navPort navbar navbar-light bg-light">
				  <Link className="navbar-brand" to="/">Devon Wood</Link>
				</nav>
			</div>
		);
	}
}

export default Navbar;