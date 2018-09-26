import React, { Component } from "react";
import ContBlock from "../../components/ContBlock";
import { Row, Col } from "../../components/Grid";
import "./Contact.css";
import View from "../../components/View";
import Git from "../../images/Github.png";
import Linked from "../../images/linkedin.png";
import Gmail from "../../images/gmail.png";

class Contact extends Component {
	state = {
		showEmail: ""
	}

	renderEmail = () => this.setState({showEmail: "wooddv35@gmail.com"})

	render() {
		return (
			<View>
				<h1 className="title">Contact</h1>
				<Row>
					<Col size="md-12 lg-6 xl-4" name="offset-lg-3 offset-xl-0">
						<ContBlock title="Github" link="https://github.com/Flakkus35" img={Git} />
					</Col>
					<Col size="md-12 lg-6 xl-4" name="offset-lg-3 offset-xl-0">
						<ContBlock title="LinkedIn" link="https://www.linkedin.com/in/devon-wood-398397144/" img={Linked} />
					</Col>
					<Col size="md-12 lg-6 xl-4" name="offset-lg-3 offset-xl-0">
						<ContBlock title="Gmail" click={this.renderEmail} img={Gmail} />
					</Col>
				</Row>
				<Row>
					<Col size="md-4" name="offset-md-4">
						<h2>{this.state.showEmail}</h2>
					</Col>
				</Row>
			</View>
		);
	}
}

export default Contact;