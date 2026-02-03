export type Language = "en" | "es"

export const translations: Record<Language, Record<string, string>> = {
	en: {
		role: "Systems Engineer",
		bio: "Based in Colombia. Specializing in high-performance Full Stack applications and Systems Design.",
		navWorks: "Selected Works",
		navExperience: "Experience",
		navContact: "Contact",
		status: "Available for freelance",
		sectionWorks: "01 — Selected Works",
		sectionExperience: "02 — Experience",
		backToTop: "Back to top",
	},
	es: {
		role: "Ingeniero de Sistemas",
		bio: "Ubicado en Colombia. Especializado en aplicaciones Full Stack de alto rendimiento y Diseño de Sistemas.",
		navWorks: "Trabajos",
		navExperience: "Experiencia",
		navContact: "Contacto",
		status: "Disponible para freelance",
		sectionWorks: "01 — Trabajos",
		sectionExperience: "02 — Experiencia",
		backToTop: "Volver arriba",
	},
}

export const getTranslation = (lang: Language, key: string): string => {
	return translations[lang][key] || key
}
