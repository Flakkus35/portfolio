import React from "react";
import LinkBlock from "../LinkBlock";
import "./View.css";
import { Row, Col } from "../Grid";

const View = ({children}) =>
	<div id="view">
		<Row>
			<Col size="md-4">
				<LinkBlock title="About"/>
			</Col>
			<Col size="md-4">
				<LinkBlock title="Portfolio"/>
			</Col>
			<Col size="md-4">
				<LinkBlock title="Contact"/>
			</Col>
		</Row>
		{children}
	</div>

export default View;