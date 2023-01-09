import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
	return (
		<a className="card" id={props.name} href={props.link} target="_blank">
			<div className="cardBand">{props.mainTech}</div>
			<div className="techsContainer">
				{props.allTechs.map((tech) => {
					return <div className="techs">{tech}</div>;
				})}
			</div>
		</a>
	);
}

export default ProjectCard;
