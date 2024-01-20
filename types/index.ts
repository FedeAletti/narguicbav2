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

export interface Brand {
	id: number
	name: string
	price: number
	logo: string
	products?: any[] // Adjust this type based on the actual structure of 'products'
}

export interface Subcategory {
	id: number
	name: string
	products?: any[] // Adjust this type based on the actual structure of 'products'
}

export interface Category {
	id: number
	name: string
	subcategory: Subcategory | null
	logo: string
}
