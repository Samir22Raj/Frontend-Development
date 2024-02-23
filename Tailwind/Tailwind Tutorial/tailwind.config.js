/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*"],
	theme: {
		screens: {
			xsm: "520px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			spacing: {
				13: "3.2rem",
			},
			fontSize: {
				10: ["9rem", { lineHeight: "1.2" }],
			},
		},
	},
	plugins: [],
};
