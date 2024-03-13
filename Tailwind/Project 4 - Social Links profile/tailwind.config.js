/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*"],
	theme: {
		extend: {
			fontFamily: {
				Inter: "Inter",
			},
			colors: {
				newGreen: "hsl(75, 94%, 57%)",
				newWhite: "hsl(0, 0%, 100%)",
				newGrey: "hsl(0, 0%, 20%)",
				darkGrey: "hsl(0, 0%, 12%)",
				offBlack: "hsl(0, 0%, 8%)",
			},
		},
	},
	plugins: [],
};
