import React from "react";
import { useNavigate } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
	const navigate = useNavigate();

	const navToHome = () => {
		navigate("/Portfolio");
	};
	const navToProjects = () => {
		navigate("/Portfolio/projects");
	};
	const navToAboutMe = () => {
		navigate("/Portfolio/about-me");
	};

	return (
		<nav className="nav">
			<input type="radio" name="slider" id="item1" />
			<input type="radio" name="slider" id="item2" defaultChecked />
			<input type="radio" name="slider" id="item3" />
			<ul className="listaLinks">
				<label
					className="link"
					htmlFor="item1"
					id="link1"
					onClick={navToAboutMe}
				>
					About Me
				</label>
				<label className="link" htmlFor="item2" id="link2" onClick={navToHome}>
					Home
				</label>
				<label
					className="link"
					htmlFor="item3"
					id="link3"
					onClick={navToProjects}
				>
					Projects
				</label>
			</ul>
		</nav>
	);
}
