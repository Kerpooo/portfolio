import "./components/ProjectCard"
import "./components/ExperienceRow"
import { projectsData, experienceData } from "./data/portfolio"

document.addEventListener("DOMContentLoaded", () => {
	const projectCards = document.querySelectorAll<ProjectCard>("project-card")
	projectCards.forEach((card, index) => {
		if (projectsData[index]) {
			card.data = projectsData[index]
		}
	})

	const experienceRows = document.querySelectorAll<ExperienceRow>("experience-row")
	experienceRows.forEach((row, index) => {
		if (experienceData[index]) {
			row.data = experienceData[index]
		}
	})
})
