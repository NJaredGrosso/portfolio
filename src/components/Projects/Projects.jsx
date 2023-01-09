import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

let projectsList = [
	{
		name: "Art",
		link: "https://njaredgrosso.github.io/galeria_arte/",
		mainTech: "SASS",
		allTechs: ["HTML", "CSS"],
	},
	{
		name: "BANG",
		link: "https://njaredgrosso.github.io/BANG/",
		mainTech: "ReactJS",
		allTechs: ["HTML", "CSS", "Javascript"],
	},
	{
		name: "Brewery",
		link: "https://njaredgrosso.github.io/Brewery/",
		mainTech: "Javascript",
		allTechs: ["HTML", "SASS"],
	},
];

function Projects() {
	return (
		<div className="projects">
			{projectsList.map((project) => {
				return (
					<ProjectCard
						name={project.name}
						link={project.link}
						mainTech={project.mainTech}
						allTechs={project.allTechs}
					/>
				);
			})}
		</div>
	);
}

export default Projects;
