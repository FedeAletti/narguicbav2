import { Product } from "@/types"

export const getProducts = async (): Promise<Product[]> => {
	const res = await fetch("/api/products/")
	const data = (await res.json()) as Product[]
	return data
}

export const getProduct = async (id: string): Promise<Product[]> => {
	const res = await fetch("/api/product/" + id)
	const data = (await res.json()) as Product[]
	return data
}
