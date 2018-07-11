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
					<img id="face" height="300" src={face} alt="Devon Wood"/>
					<p>
					Hello, my name is Devon Wood and I am currently studying at the UNC Coding Bootcamp for full-stack web development. I have spent most of my life surrounded by computers have enjoyed working with a multitude of different software in many fields. I taught myself several 3D modeling and graphic design software starting from when I was 17 including Autodesk Maya, Adobe Photoshop, and ZBrush to name a few. I have also worked with several game engines including Unity and the Unreal Engine to make a few small projects.
					</p> 
					<p>
					For about 12 years of my life I played hockey as a goaltender moving from several states to keep advancing and improving. I grew up watching Patrick Roy and the Colorado Avalanche play which got me interested in playing goal. Unfortunately, a few injuries and the fact that I would be aging out of junior hockey made me stop short of making it beyond juniors and into a professional league. My final stop landed me in Boston, MA playing for a Junior A team before I ended up moving back to North Carolina to go to college.
					</p>
					<p>
					I am and have always been a avid gamer ever since I first owned a PC. My very first and favorite game was the original Doom and I could spend hours on end playing. Eventually, as time moved on, I ended up owning several game systems and finally my own PC but I never stopped loving Doom. I spent many years learning game design and the intricate roles each member of a development team had which led me to greatly respect the skill and effort these people put in. I hope to one day start my own games company but for now I am learning all I can to prepare myself for it.
					</p>
				</div>
			</View>
		);
	}
}

export default About;