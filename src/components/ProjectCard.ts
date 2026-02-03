interface ProjectData {
	title: string
	year: string
	description: string
	tech: string[]
	href?: string
}

class ProjectCard extends HTMLElement {
	private _data: ProjectData | null = null

	constructor() {
		super()
	}

	set data(value: ProjectData) {
		this._data = value
		this.render()
	}

	get data(): ProjectData | null {
		return this._data
	}

	private render() {
		if (!this._data) return

		this.innerHTML = `        
        <a href="${this._data.href || "#"}" class="project-card">
            <div class="project-visual">
                <div class="visual-content">
                    <div class="ui-abstract" style="border-radius: 4px; background: #0a0a0a;"></div>
                </div>
            </div>
            <div class="project-info">
                <div class="project-header">
                    <span class="project-title">${this._data.title}</span>
                    <span class="project-year">${this._data.year}</span>
                </div>
                <p class="project-desc">${this._data.description}</p>
                <div class="tech-stack">
                    ${this._data.tech.map((t) => `<span class="tech-item">${t}</span>`).join("")}
                </div>
            </div>
        </a>`
	}
}
customElements.define("project-card", ProjectCard)
