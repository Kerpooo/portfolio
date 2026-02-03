interface ExperienceData {
	role: string
	company: string
	start_date: string
	end_date: string
}

class ExperienceRow extends HTMLElement {
	private _data: ExperienceData | null = null

	constructor() {
		super()
	}

	set data(value: ExperienceData) {
		this._data = value
		this.render()
	}

	get data(): ExperienceData | null {
		return this._data
	}

	private render() {
		if (!this._data) return

		this.classList.add("experience-row")
		this.innerHTML = `
			<span class="experience-cell role">${this._data.role}</span>
			<span class="experience-cell company">${this._data.company}</span>
			<span class="experience-cell date">${this._data.start_date} — ${this._data.end_date}</span>
		`
	}
}
customElements.define("experience-row", ExperienceRow)
