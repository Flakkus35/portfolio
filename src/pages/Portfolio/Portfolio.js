import React, { Component } from "react";
import View from "../../components/View";
import PortBlock from "../../components/PortBlock";
import projects from "../../util/projects";

class Portfolio extends Component {
	render() {
		return (
			<View>
				<h1>Portfolio</h1>
				{projects.project.map(key => (
					<PortBlock key={key.name} name={key.name} heroku={key.heroku} github={key.github}/>
				))}
			</View>
		);
	}
}

export default Portfolio;