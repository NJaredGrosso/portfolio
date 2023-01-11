import React from "react";
import "./AboutMe.css";
import Photo from "../Photo/Photo";

function AboutMe() {
	return (
		<div className="aboutMe">
			<div className="mainInfo">
				<Photo></Photo>
				<div className="content">
					<div className="nombre">
						<h1 className="nombres">NICOLAS JARED</h1>
						<h3 className="apellidos">GROSSO HEREDIA</h3>
					</div>
					<div className="info">
						<p>Hello World!</p>
						<p>
							I’m a Web developer from Argentina. My passion for the coding
							started when I was young and started using the computer, all the
							things you could do with the computer amazed me. That's why I
							decided to be the person who can make all this possible so that
							others can enjoy it as I do.
						</p>
						<p>
							I love JavaScript and the things that can be done with it. It’s my
							favorite programming language.
						</p>
						<p>I also like to watch movies, good music and play video games.</p>
					</div>
				</div>
			</div>
			<dvi className="globoTechs">
				<label className="tech lat">HTML5</label>
				<label className="tech">CSS3</label>
				<label className="tech lat">SASS</label>
				<label className="tech lat centl">Javascript</label>
				<label className="tech">Bootstrap</label>
				<label className="tech lat centr">NodeJS</label>
				<label className="tech lat ">Git & GitHub</label>
				<label className="tech">ReactJS</label>
				<label className="tech lat ">npm</label>
				<label className="tech">JSON</label>
			</dvi>
		</div>
	);
}

export default AboutMe;
