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
		"name": "Doks",
		"description": "Doks is a Hugo theme helping you build modern documentation websites that are secure, fast, and SEO-ready — by default.",
		"properties": {
			"markup": [ "Markdown", "KaTeX" ],
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
			"blog": true,
			"ssr": false,
			"themes": false,
		},
		"developer": {
			"name": "Henk Verlinde",
			"license": "MIT",
			"url": "https://getdoks.org/",
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
			"markup": ["Markdown", "MathJax"],
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
	},
	{
		"name": "Sphinx",
		"description": "Sphinx is a Python-based tool for generating intelligent documentation, and it uses reStructuredText as its markup language.",
		"properties": {
			"markup": ["reStructuredText", "Markdown", "LaTeX"],
			"templates": ["Jinja"],
			"language": "Python",
			"framework": "None"
		},
		"features": {
			"pdf": true,
			"multilang": true,
			"search": true,
			"darkmode": true,
			"tabs": false,
			"blog": false,
			"ssr": false,
			"themes": true
		},
		"developer": {
			"name": "Georg Brandl",
			"license": "BSD",
			"url": "https://www.sphinx-doc.org/en/master/"
		}
	},
	{
		"name": "Docsy",
		"description": "A Hugo theme for technical documentation sites",
		"properties": {
			"markup": ["Markdown"],
			"templates": ["Go Templates"],
			"language": "Go",
			"framework": "Hugo"
		},
		"features": {
			"pdf": false,
			"multilang": true,
			"search": true,
			"darkmode": true,
			"tabs": false,
			"blog": true,
			"ssr": false,
			"themes": false
		},
		"developer": {
			"name": "The Docsy Authors",
			"license": "Apache-2.0",
			"url": "https://www.docsy.dev/"
		}
	},
	{
		"name": "Hugo Book",
		"description": "Hugo documentation theme as simple as a plain book",
		"properties": {
			"markup": ["Markdown"],
			"templates": ["Go Templates"],
			"language": "Go",
			"framework": "Hugo"
		},
		"features": {
			"pdf": false,
			"multilang": true,
			"search": true,
			"darkmode": true,
			"tabs": true,
			"blog": true,
			"ssr": false,
			"themes": false
		},
		"developer": {
			"name": "Alex Shpak",
			"license": "MIT",
			"url": "https://github.com/alex-shpak/hugo-book"
		}
	},
	{
		"name": "Whisper",
		"description": "Whisper is a minimal documentation theme built for Hugo. The design and functionality is intentionally minimal.",
		"properties": {
			"markup": ["Markdown"],
			"templates": ["Go Templates"],
			"language": "Go",
			"framework": "Hugo"
		},
		"features": {
			"pdf": false,
			"multilang": false,
			"search": false,
			"darkmode": false,
			"tabs": false,
			"blog": false,
			"ssr": false,
			"themes": false
		},
		"developer": {
			"name": "Robert Austin",
			"license": "MIT",
			"url": "https://github.com/zerostaticthemes/hugo-whisper-theme"
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