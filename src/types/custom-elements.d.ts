interface ProjectCard extends HTMLElement {
	data: {
		title: string
		year: string
		description: string
		tech: string[]
		href?: string
	}
}

interface ExperienceRow extends HTMLElement {
	data: {
		role: string
		company: string
		start_date: string
		end_date: string
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"project-card": ProjectCard
		"experience-row": ExperienceRow
	}
}
