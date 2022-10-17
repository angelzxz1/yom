/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			body: {
				margin: 0,
				padding: 0,
				boxSizing: "border-box",
			},
		},
		fontFamily: {
			sans: ["'M PLUS Rounded 1c'", "sans-serif"],
		},
	},
	plugins: [],
};
