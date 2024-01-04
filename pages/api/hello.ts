// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@/types"
import type { NextApiRequest, NextApiResponse } from "next"



export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Product[]>
) {
	const obj: Product[] = [
		{
			id: 0,
			title: "My mint",
			brand: "Zomo",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/zomo-mymint.jpeg",
			price: 2300,
			isAvailable: true,
		},
		{
			id: 1,
			title: "My Strawberry",
			brand: "Zomo",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/zomo-mystrawberry.jpeg",
			price: 2300,
			isAvailable: true,
		},
		{
			id: 2,
			title: "Strong Lemon",
			brand: "Zomo",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/zomo-stronglemon.jpeg",
			price: 2300,
			isAvailable: true,
		},
		{
			id: 3,
			title: "Lemon Pie",
			brand: "Adalya",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/adalya-lemonpie.jpeg",
			price: 2300,
			isAvailable: true,
		},
		{
			id: 4,
			title: "Baku Nights",
			brand: "Blue Horse",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/bluehorse-bakunights.jpeg",
			price: 2300,
			isAvailable: true,
		},
		{
			id: 5,
			title: "Blue Melon",
			brand: "Adalya",
			category: "tabaco",
			description: "200g",
			thumbnail: "/productos/tabaco/adalya-bluemelon.jpeg",
			price: 2300,
			isAvailable: true,
		},
		{
			id: 6,
			title: "Love 66",
			brand: "Adalya",
			category: "tabaco",
			description: "50g",
			thumbnail: "/productos/tabaco/adalya-love66.jpeg",
			price: 2300,
			isAvailable: true,
		},
		{
			id: 7,
			title: "Narguila ATH",
			brand: "Adalya",
			category: "narguila",
			description: "God nargui",
			thumbnail: "/productos/narguila/nargui-1.jpeg",
			price: 230000,
			isAvailable: true,
		}
	]

	res.status(200).json(obj)
}
