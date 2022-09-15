/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			black: {
				100: "#35393F",
				200: "#2B2D31",
				300: "#1D1F22",
				400: "#151619",
			},
			gray: {
				100: "#F5F5F5",
				200: "#E4E4E4",
				300: "#C1C4CB",
				400: "#7C8187",
				500: "#5A6069",
			},
			white: "#FFFFFF",
			orange: {
				100: "#F39765",
				200: "#E46643",
			},
		},
		fontFamily: {
			body: ["Roboto", "sans-serif"],
			header: ["Roboto Slab", "monospace"],
			markdown: ["Roboto Mono", "serif"],
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
