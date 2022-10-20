/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
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
			colors: {
				siteBGD: "#0a2a57",
				siteBGL: "#efeefe",
			},
		},
		fontFamily: {
			sans: ["'M PLUS Rounded 1c'", "sans-serif"],
		},
	},
	plugins: [],
};
