import "./components/ProjectCard"
import "./components/ExperienceRow"
import { projectsData, experienceData } from "./data/portfolio"
import { translations, type Language } from "./i18n/translations"

// SEO meta tags content per language
const seoContent: Record<Language, { title: string; description: string }> = {
	en: {
		title: "Kevin Rincón - Full Stack Developer & Systems Engineer",
		description:
			"Full Stack Developer and Systems Engineer from Colombia. Specializing in high-performance applications and systems design.",
	},
	es: {
		title: "Kevin Rincón - Desarrollador Full Stack e Ingeniero de Sistemas",
		description:
			"Desarrollador Full Stack e Ingeniero de Sistemas de Colombia. Especializado en aplicaciones de alto rendimiento y diseño de sistemas.",
	},
}

const setLanguage = (lang: Language) => {
	document.documentElement.lang = lang

	// Update SEO meta tags
	const titleElement = document.querySelector("title")
	if (titleElement) titleElement.textContent = seoContent[lang].title

	const descriptionMeta = document.querySelector(
		"meta[name='description']"
	) as HTMLMetaElement
	if (descriptionMeta) descriptionMeta.content = seoContent[lang].description

	const ogTitleMeta = document.querySelector(
		"meta[property='og:title']"
	) as HTMLMetaElement
	if (ogTitleMeta) ogTitleMeta.content = seoContent[lang].title

	const ogDescriptionMeta = document.querySelector(
		"meta[property='og:description']"
	) as HTMLMetaElement
	if (ogDescriptionMeta)
		ogDescriptionMeta.content = seoContent[lang].description

	const twitterTitleMeta = document.querySelector(
		"meta[name='twitter:title']"
	) as HTMLMetaElement
	if (twitterTitleMeta) twitterTitleMeta.content = seoContent[lang].title

	const twitterDescriptionMeta = document.querySelector(
		"meta[name='twitter:description']"
	) as HTMLMetaElement
	if (twitterDescriptionMeta)
		twitterDescriptionMeta.content = seoContent[lang].description

	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.getAttribute("data-i18n")
		if (key && translations[lang][key]) {
			el.textContent = translations[lang][key]
		}
	})

	document.querySelectorAll(".lang-btn").forEach((btn) => {
		btn.classList.toggle("active", btn.getAttribute("data-lang") === lang)
	})

	const cvLink = document.getElementById("download-cv") as HTMLAnchorElement
	if (cvLink) {
		cvLink.href = `/Kevin_Rincon_CV_${lang.toUpperCase()}.pdf`
	}

	localStorage.setItem("lang", lang)
}

// Initialize language
const savedLang = (localStorage.getItem("lang") as Language) || "en"
setLanguage(savedLang)

// Language switcher listeners
document.querySelectorAll(".lang-btn").forEach((btn) => {
	btn.addEventListener("click", () => {
		const lang = btn.getAttribute("data-lang") as Language
		if (lang) setLanguage(lang)
	})
})

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

	document.getElementById("back-to-top")?.addEventListener("click", (e) => {
		e.preventDefault()
		window.scrollTo({ top: 0, behavior: "smooth" })
	})

	// Language toggle
	const savedLang = localStorage.getItem("lang") as Language | null
	if (savedLang) {
		setLanguage(savedLang)
	} else {
		const browserLang = navigator.language.split("-")[0]
		setLanguage(browserLang === "es" ? "es" : "en")
	}

	document.querySelectorAll(".lang-btn").forEach((btn) => {
		btn.addEventListener("click", () => {
			const lang = btn.getAttribute("data-lang") as Language
			if (lang) setLanguage(lang)
		})
	})
})
