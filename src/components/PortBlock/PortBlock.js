import React, { Component } from 'react';
import "./PortBlock.css";
import ghLogo from "../../images/Github.png";
import herLogo from "../../images/heroku.png";
import { Row, Col } from "../Grid";

class PortBlock extends Component {

	render() {
		return (
			<div className="pBlock animated bounceInDown faster">
				<Row>
					<Col size="md-8">
						<h2>{this.props.name}</h2>
						<p>{this.props.desc}</p>
					</Col>
					<Col size="md-4">
						<img src={this.props.screenshot} width="100%" alt={this.props.name}/>
					</Col>
				</Row>
				<div>
					<div className="card card-body">
						<h6 className="card-title">Explore below</h6>
						<Row>
							{this.props.heroku 
								? <Col size="md-3" name="proj-link"><a className="site-link" href={this.props.heroku}><img className="siteLogo" src={herLogo} alt="heroku"/>Heroku</a></Col>
								: <div/>
							}
							<Col size="md-3" name="proj-link">
								<a className="site-link" href={this.props.github}><img className="siteLogo" src={ghLogo} alt="github"/>Github</a>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		)
	}
}

export default PortBlock;