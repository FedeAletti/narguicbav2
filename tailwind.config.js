import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		color: {
			jaguar: {
				50: "#f3f1fc",
				100: "#eae6f9",
				200: "#d9d2f3",
				300: "#c4b7ea",
				400: "#b199e0",
				500: "#a380d4",
				600: "#9567c4",
				700: "#8256ac",
				800: "#69488b",
				900: "#563f70",
				950: "#120d17",
			},
		},
		extend: {
			fontFamily: {
				title: ["var(--font-titles)"],
				manrope: "var(--font-manrope)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
				autoCarousel: {
					"0%": {
						transform: "translateX(0)",
					},
					"100%": { transform: "translateX(calc(-250px * 7))" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				textCarousel: "autoCarousel 30s linear infinite",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			prefix: "nextui", // prefix for themes variables
			addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
			defaultTheme: "dark", // default theme from the themes object
			defaultExtendTheme: "dark", // default theme to extend on custom themes
			layout: {}, // common layout tokens (applied to all themes)
			themes: {
				light: {
					layout: {}, // light theme layout tokens
					colors: {}, // light theme colors
				},
				dark: {
					layout: {}, // dark theme layout tokens
					colors: {
						primary: "#120d17",
						jaguar: {
							50: "#f3f1fc",
							100: "#eae6f9",
							200: "#d9d2f3",
							300: "#c4b7ea",
							400: "#b199e0",
							500: "#a380d4",
							600: "#9567c4",
							700: "#8256ac",
							800: "#69488b",
							900: "#563f70",
						},
					}, // dark theme colors
				},
				// ... custom themes
			},
		}),
	],
}
