// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from "@/types"
import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Product[]>
) {
	const id = req.query.id
	const obj: Product[] = [
		{
			id: 0,
			title: "My mint",
			brand: "Zomo",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/zomo-mymint.png",
			price: 2300,
			isAvailable: true,
			brandColor: "red-600",
		},
		{
			id: 1,
			title: "My Strawberry",
			brand: "Zomo",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/zomo-mystrawberry.png",
			price: 2300,
			isAvailable: true,
			brandColor: "red-600",
		},
		{
			id: 2,
			title: "Strong Lemon",
			brand: "Zomo",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/zomo-stronglemon.png",
			price: 2300,
			isAvailable: true,
			brandColor: "red-600",
		},
		{
			id: 3,
			title: "Lemon Pie",
			brand: "Adalya",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/adalya-lemonpie.png",
			price: 2300,
			isAvailable: true,
			brandColor: "red-600",
		},
		{
			id: 4,
			title: "Baku Nights",
			brand: "Blue Horse",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/bluehorse-bakunights.png",
			price: 2300,
			isAvailable: true,
			brandColor: "red-600",
		},
		{
			id: 5,
			title: "Blue Melon",
			brand: "Adalya",
			category: "tabaco",
			description: "200g",
			thumbnail: "/productos/tabaco/adalya-bluemelon.png",
			price: 2300,
			isAvailable: true,
			brandColor: "red-600",
		},
		{
			id: 6,
			title: "Love 66",
			brand: "Adalya",
			category: "tabaco",
			description: "50g",
			thumbnail: "/productos/tabaco/adalya-love66.png",
			price: 2300,
			isAvailable: true,
			brandColor: "#8b5cf6",
		},
		{
			id: 7,
			title: "Narguila ATH",
			brand: "Adalya",
			category: "narguila",
			description: "God nargui",
			thumbnail: "/productos/narguila/nargui-1.png",
			price: 230000,
			isAvailable: true,
			brandColor: "#8b5cf6",
		},
	]

	const product = obj.filter((product) => product.id == Number(id))

	res.status(200).json(product)
}
