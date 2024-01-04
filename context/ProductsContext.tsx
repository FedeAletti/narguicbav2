import { Product } from "@/types"
import React, { createContext, useContext, useEffect, useState } from "react"

const getItem = async () => {
	try {
		const res = await fetch("/api/hello")
		const data = await res.json()
		return data
	} catch (error) {
		console.error(error)
		return []
	}
}

const ProductsContext = createContext<Product[] | null>(null)

export const useProductsContext = () => useContext(ProductsContext)

const ProductsContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [products, setProducts] = useState<Product[] | null>(null)

	useEffect(() => {
		getItem().then((resp) => setProducts(resp))
	}, [])
	return (
		<ProductsContext.Provider value={products}>
			{children}
		</ProductsContext.Provider>
	)
}

export default ProductsContextProvider
