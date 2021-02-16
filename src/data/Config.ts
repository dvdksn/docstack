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
			"responsive": true,
			"search": true,
			"darkmode": false,
			"comments": false,
			"attachments": true,
			"tabs": true,
			"blog": false,
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
			"responsive": true,
			"search": true,
			"darkmode": true,
			"comments": false,
			"attachments": true,
			"tabs": false,
			"blog": false,
		},
		"developer": {
			"name": "Weru",
			"license": "MIT",
			"url": "https://docs.neuralvibes.com/",
		}
	},
	{
		"name": "Jekyll Documentation Theme",
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
			"responsive": true,
			"search": true,
			"darkmode": false,
			"comments": false,
			"attachments": false,
			"tabs": false,
			"blog": false
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
			"responsive": true,
			"search": true,
			"darkmode": true,
			"comments": false,
			"attachments": true,
			"tabs": true,
			"blog": true
		},
		"developer": {
			"name": "Facebook",
			"license": "MIT",
			"url": "https://v2.docusaurus.io/"
		}
	},
	{
		"name": "Gatsby GitBook Starter",
		"description": "A Gatsby starter template inspired by the popular GitBook site generator.",
		"properties": {
			"markup": ["Markdown, MDX"],
			"templates": ["JSX"],
			"language": "JavaScript",
			"framework": "React"
		},
		"features": {
			"pdf": false,
			"multilang": false,
			"responsive": true,
			"search": true,
			"darkmode": true,
			"comments": false,
			"attachments": true,
			"tabs": false,
			"blog": false
		},
		"developer": {
			"name": "Hasura",
			"license": "MIT",
			"url": "https://github.com/hasura/gatsby-gitbook-starter"
		}
	}
]


// Declare filter state props and defaults
export const filterDefaults: Filters = {
	language: "all",
	features: {
		attachments: false,
		blog: false,
		comments: false,
		darkmode: false,
		multilang: false,
		pdf: false,
		responsive: false,
		search: false,
		tabs: false
	}
}

export const languageOptions: Filters["language"][] = ["all", "js", "python", "go", "other"]