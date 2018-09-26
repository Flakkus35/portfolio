import React from 'react';
import { Row, Col } from "../Grid";
import "./ContBlock.css";

const ContBlock = props =>
	<a className="contact-link" onClick={props.click} href={props.link ? props.link : "#"}>
		<Row name="cont-border">
			<Col size="md-3" name="col-auto mr-auto">
				<h3>{props.title}</h3>
			</Col>
			<Col size="md-4" name="col-auto">
				<img src={props.img} alt={props.title} width="80" />
			</Col>
		</Row>
	</a> 

export default ContBlock;