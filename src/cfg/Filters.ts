import type { Filters } from "$types/filters.type"

// Declare filter state props and defaults
export const filterDefaults = JSON.stringify(<Filters>{
	language: "all",
	features: {
		blog: false,
		darkmode: false,
		multilang: false,
		pdf: false,
		search: false,
		tabs: false,
		ssr: false,
		themes: false,
	}
})

export const languageOptions: Filters["language"][] = ["all", "js", "python", "go", "other"]