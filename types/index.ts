import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number
}

export type Product = {
	id: number
	title: string
	category: string
	brand: "Zomo" | "Adalya" | "Blue Horse" | "Blunt Rey" | "ATH"
	description: string
	thumbnail: string
	price: number
	isAvailable: boolean
	brandColor?: string
}

export type ProductInCard = Product & {
	[key: string]: any
	quantity?: number
}
