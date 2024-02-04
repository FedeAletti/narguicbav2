import { SVGProps } from "react"

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number
}

export interface Product {
    id:          string;
    nombre:      string;
    imagen:      string;
    stock:       number;
    precio:      number;
    descuento:   number;
    descripcion: string;
    categoria:   string;
    marca:       string;
}


export type ProductInCard = Product & {
	[key: string]: any
	quantity?: number
}

export interface Brand {
	id: string
	name: string
	logo?: string
}

export interface Subcategory {
	id: number
	name: string
}

export interface Category {
	id?: string
	name: string
	logo?: string
}

export interface Order {
	id: string
	products: Product[]
	user: User
	dateOrder: Date
	priceTotal: number
}

export interface User {
	id: string
	isAdmin: boolean
	firstName: string
	lastName: string
	avatar: string
	address: Addresses[] | []
	comnents: Comment[] | []
	orders: Order[] | []
	dni: string
	phone: string
}

export interface Addresses {
	id: string
	ciudad: string
	provincia: string
	zipCode: number
	calle: string
	numeroCalle: string
	referencias: string
	barrio: string
	inCordoba: boolean
}

export interface Comment {
	id: string 
	title: string
	description: string
	date: Date
	rate: number
}
