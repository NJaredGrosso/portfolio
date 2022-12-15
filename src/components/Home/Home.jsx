import React from "react";
import Photo from "../Photo/Photo";
import SocialNetwork from "../SocialNetwork/SocialNetwork";
import img from "./circuits.png";
import "./home.css";

function Home() {
	return (
		<main id="Home">
			<Photo id="photo" />
			<div id="tarjetaPresentacion">
				<div id="nombres">
					<h1 id="nombre">NICOLAS JARED</h1>
					<h4 id="apellido">GROSSO HEREDIA</h4>
				</div>
				<div id="webDevs">
					<h6 className="webDev borroso">{"<Web Developer/>"}</h6>
					<h6 className="webDev">{"<Web Developer/>"}</h6>
					<h6 className="webDev borroso">{"<Web Developer/>"}</h6>
				</div>
			</div>
			<div id="shadow"></div>
			<div id="socialNetworks">
				<SocialNetwork />
			</div>
			<img src={img} alt="circuitos" id="circuits" />
		</main>
	);
}

export default Home;
