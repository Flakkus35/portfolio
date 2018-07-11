import React from 'react';
import "./PortBlock.css";
import ghLogo from "../../images/Github.png";
import herLogo from "../../images/heroku.png";
import { Row, Col } from "../Grid";

const PortBlock = props => 
	<div className="pBlock">
		<Row>
			<Col size="md-9">
				<h2>{props.name}</h2>
				{props.heroku 
					? <p><img className="siteLogo" src={herLogo} alt="heroku"/> Heroku: {props.heroku}</p>
					: <div/>
				}
				<p><img className="siteLogo" src={ghLogo} alt="github"/> Github: {props.github}</p>
			</Col>
			<Col size="md-3">
				<img src="https://raw.githubusercontent.com/Flakkus35/finalproject/master/client/src/util/images/castoff-2.png" alt={props.name}/>
			</Col>
		</Row>
	</div>

export default PortBlock;