import React, { Component } from "react";
import View from "../../components/View";
import "./Portfolio.css";
import PortBlock from "../../components/PortBlock";
import projects from "../../util/projects";

class Portfolio extends Component {
	render() {
		return (
			<View>
				<h1 className="title">Portfolio</h1>
				<div className="port-wrap">	
				{projects.project.map(key => (
					<PortBlock key={key.name} desc={key.description} name={key.name} heroku={key.heroku} github={key.github} screenshot={key.screenshot}/>
				))}
				</div>
			</View>
		);
	}
}

export default Portfolio;