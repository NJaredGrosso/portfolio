import React from "react";
import "./socialNetwork.css";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function SocialNetwork() {
	const toMail = () => {
		window.open("mailto:jaredgrosso2001@gmail.com", "_blank");
	};
	const toGitHub = () => {
		window.open("https://github.com/NJaredGrosso", "_blank");
	};
	const toLinkedin = () => {
		window.open("https://linkedin.com/in/NJaredGrosso", "_blank");
	};

	return (
		<>
			<div className="socialButton" onClick={toMail}>
				<FiMail className="socialIcon" />
			</div>
			<div className="socialButton" onClick={toGitHub}>
				<FiGithub className="socialIcon" />
			</div>
			<div className="socialButton">
				<FiLinkedin className="socialIcon" onClick={toLinkedin} />
			</div>
		</>
	);
}
