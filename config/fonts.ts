import localFont from "next/font/local"
import {
	Fira_Code as FontMono,
	Inter as FontSans,
	Manrope,
} from "next/font/google"

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})

export const fontMono = FontMono({
	subsets: ["latin"],
	variable: "--font-mono",
})

export const manrope = Manrope({
	subsets: ["latin"],
	weight: ["400", "700", "800"],
	variable: "--font-manrope",
})

export const courage = localFont({
	src: [
		{
			path: "./fonts/Courage.otf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-courage",
})
