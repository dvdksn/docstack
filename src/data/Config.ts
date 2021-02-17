import type { Filters } from "$types/filters.type"
import type { StackItem } from "$types/stack.type"

// Declare initial docstack items
export const allStacks: StackItem[] = [
	{
		"name": "MkDocs", 
		"description": "A python-based static site generator for creating documentation.",
		"properties": {
			"markup": [ "Markdown" ],
			"templates": [ "Jinja" ],
			"language": "Python",
			"framework": "None",
		},
		"features": {
			"pdf": true,
			"multilang": true,
			"search": true,
			"darkmode": false,
			"tabs": true,
			"blog": false,
			"ssr": false,
			"themes": true,
		},
		"developer": {
			"name": "ReadTheDocs",
			"license": "MIT",
			"url": "https://www.mkdocs.org/",
		}
	},
	{
		"name": "Compose",
		"description": "Compose is a lean theme for Hugo, inspired by forestry.io.",
		"properties": {
			"markup": [ "Markdown", "AsciiDoc", "reStructuredText", "HTML", "org" ],
			"templates": [ "Go Templates" ],
			"language": "Go",
			"framework": "Hugo",
		},
		"features": {
			"pdf": false,
			"multilang": false,
			"search": true,
			"darkmode": true,
			"tabs": false,
			"blog": false,
			"ssr": false,
			"themes": false,
		},
		"developer": {
			"name": "Weru",
			"license": "MIT",
			"url": "https://docs.neuralvibes.com/",
		}
	},
	{
		"name": "Jekyll Doc Theme",
		"description": "A documentation-focused theme for the Jekyll static site generator.",
		"properties": {
			"markup": ["Markdown"],
			"templates": ["Liquid"],
			"language": "Ruby",
			"framework": "None"
		},
		"features": {
			"pdf": true,
			"multilang": false,
			"search": true,
			"darkmode": false,
			"tabs": false,
			"blog": false,
			"ssr": false,
			"themes": false,
		},
		"developer": {
			"name": "Tom Johnson",
			"license": "MIT",
			"url": "https://idratherbewriting.com/documentation-theme-jekyll/"
		}
	},
	{
		"name": "Docusaurus",
		"description": "A React-based documentation site generator with built-in versioning support.",
		"properties": {
			"markup": ["Markdown", "MDX"],
			"templates": ["JSX"],
			"language": "JavaScript",
			"framework": "React"
		},
		"features": {
			"pdf": false,
			"multilang": true,
			"search": true,
			"darkmode": true,
			"tabs": true,
			"blog": true,
			"ssr": false,
			"themes": true,
		},
		"developer": {
			"name": "Facebook",
			"license": "MIT",
			"url": "https://v2.docusaurus.io/"
		}
	},
	{
		"name": "Gatsby GitBook Starter",
		"description": "A Gatsby starter template inspired by GitBook.",
		"properties": {
			"markup": ["Markdown, MDX"],
			"templates": ["JSX"],
			"language": "JavaScript",
			"framework": "React"
		},
		"features": {
			"pdf": false,
			"multilang": false,
			"search": true,
			"darkmode": true,
			"tabs": false,
			"blog": false,
			"ssr": false,
			"themes": false,
		},
		"developer": {
			"name": "Hasura",
			"license": "MIT",
			"url": "https://github.com/hasura/gatsby-gitbook-starter"
		}
	},
	{
		"name": "docsify",
		"description": "A magical documentation site generator.",
		"properties": {
			"markup": ["Markdown"],
			"templates": ["JavaScript", "Vue"],
			"language": "JavaScript",
			"framework": "Vue"
		},
		"features": {
			"pdf": false,
			"multilang": true,
			"search": true,
			"darkmode": false,
			"tabs": true,
			"blog": false,
			"ssr": true,
			"themes": true,
		},
		"developer": {
			"name": "docsifyjs",
			"license": "MIT",
			"url": "https://docsify.js.org/"
		}
	},
	{
		"name": "mdBook",
		"description": "mdBook is a utility to create modern online books from Markdown files.",
		"properties": {
			"markup": ["Markdown"],
			"templates": ["Custom"],
			"language": "Rust",
			"framework": "None"
		},
		"features": {
			"pdf": true,
			"multilang": false,
			"search": true,
			"darkmode": true,
			"tabs": false,
			"blog": false,
			"ssr": false,
			"themes": true,
		},
		"developer": {
			"name": "Rust Team",
			"license": "MPL-2.0",
			"url": "https://github.com/rust-lang/mdBook"
		}
	}
]


// Declare filter state props and defaults
export const filterDefaults: Filters = {
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
}

export const languageOptions: Filters["language"][] = ["all", "js", "python", "go", "other"]