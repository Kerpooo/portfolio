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

	const experienceRows =
		document.querySelectorAll<ExperienceRow>("experience-row")
	experienceRows.forEach((row, index) => {
		if (experienceData[index]) {
			row.data = experienceData[index]
		}
	})

	const contentArea = document.querySelector(".content-area")

	document.getElementById("home-link")?.addEventListener("click", (e) => {
		e.preventDefault()
		contentArea?.scrollTo({ top: 0, behavior: "smooth" })
	})

	document.getElementById("projects-link")?.addEventListener("click", (e) => {
		e.preventDefault()
		const target = document.getElementById("projects")
		if (target && contentArea) {
			const top =
				target.getBoundingClientRect().top + contentArea.scrollTop - 60
			contentArea.scrollTo({ top, behavior: "smooth" })
		}
	})
})
