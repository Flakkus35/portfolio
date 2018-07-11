import React, { Component } from "react"
import "./Sidebar.css";

class Sidebar extends Component {
	state = {
		height: 0
	}

	componentDidMount() {
		let hgt = window.innerHeight-document.querySelector(".navPort").clientHeight
		this.setState({
			height: hgt
		})
	}

	render() {
		return (
			<div id="sidebar" style={{height: this.state.height}}>
				<h3>Welcome</h3>
			</div>
		);
	}
}

export default Sidebar;