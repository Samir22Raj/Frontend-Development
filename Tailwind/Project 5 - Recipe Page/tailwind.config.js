/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*"],
	theme: {
		colors: {
			Nutmeg: "hsl(14, 45%, 36%)",
			darkRaspberry: "hsl(332, 51%, 32%)",
			White: "hsl(0, 0%, 100%)",
			roseWhite: "hsl(330, 100%, 98%)",
			Eggshell: "hsl(30, 54%, 90%)",
			lightGrey: "hsl(30, 18%, 87%)",
			wengeBrown: "hsl(30, 10%, 34%)",
			darkCharcoal: "hsl(24, 5%, 18%)",
		},
		extend: {
			screens: {
				mobile: "375px",
			},
			fontFamily: {
				Outfit: "Outfit",
				Young: "Young Serif",
			},
		},
	},
	plugins: [],
};
