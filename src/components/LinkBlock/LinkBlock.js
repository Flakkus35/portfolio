import React from "react";
import { Link } from "react-router-dom";
import "./LinkBlock.css";

const LinkBlock = props =>
	<div className="lBlock">
		<Link to={props.title.toLowerCase()}><button className="btn lb-btn" type="button">{props.title}</button></Link>
	</div>

export default LinkBlock;