import React, { Component } from "react";
import "./About.css";
import View from "../../components/View";
import face from "../../images/face.jpg";

class About extends Component {
	render() {
		return (
			<View>
				<div>
					<h1 className="title">About Me</h1>
					<div id="about-div">	
						<img id="face" height="300" src={face} alt="Devon Wood"/>
						<p>
						Hello, my name is Devon Wood and I am full stack developer working primarily with Javascript, HTML, and CSS. I have spent most of my life surrounded by computers have enjoyed working with a multitude of different software in many fields. I taught myself several 3D modeling and graphic design software starting from when I was 17 learning programs like Autodesk Maya, Adobe Photoshop, and ZBrush to name a few. I have also worked with several game engines including Unity and the Unreal Engine to make a few small projects.
						</p> 
						<p>
						For about 12 years of my life I played hockey as a goaltender moving from several states to keep advancing and improving. I grew up watching Patrick Roy and the Colorado Avalanche play which got me interested in playing goal. I ended up moving back home to Raleigh from Boston to attend college.
						</p>
						<p>
						I am and have always been a avid gamer ever since I first owned a PC. My very first and favorite game was the original Doom and I could spend hours on end playing. I spent many years learning game design and the intricate roles each member of a development team had which led me to greatly respect the skill and effort of the people involved. I am currently working for Trilogy Education tutoring students in the same class I went through to help them better understand the world of coding.
						</p>
					</div>
				</div>
			</View>
		);
	}
}

export default About;