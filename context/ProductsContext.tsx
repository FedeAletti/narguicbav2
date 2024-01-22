import { getProducts } from "@/service/products"
import { Product } from "@/types"
import React, { createContext, useContext, useEffect, useState } from "react"

const ProductsContext = createContext<any>(null)

export const useProductsContext = () => useContext(ProductsContext)

const ProductsContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [products, setProducts] = useState<any[] | null>(null)

	const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
		null
	)
	const [categories, setCategories] = useState<any>([])
	const [loaded, setLoaded] = useState(false)

	const filterProducts = (category: string) => {
		if (category === "all") {
			setFilteredProducts(products)
		} else {
			setFilteredProducts(
				products!.filter((product) => product.category.name === category)
			)
		}

		console.log(products)
	}

	useEffect(() => {
		if (!loaded) {
			getProducts()
				.then((data) => {
					console.log("Fetched products:", data.productWithCategories) // Add this line to log the fetched data
					setProducts(data.productWithCategories as any[])
					setCategories(data.categories)
					setLoaded(true) // Change this to true after products are loaded
				})
				.catch((error) => {
					console.error("Failed to fetch products:", error) // Add error handling
				})
		}
	}, [loaded])

	return (
		<ProductsContext.Provider
			value={{ products, categories, filteredProducts, filterProducts }}>
			{children}
		</ProductsContext.Provider>
	)
}

export default ProductsContextProvider
