import { api } from "@/pages/api/products"
import { Product } from "@/types"
import React, { createContext, useContext, useEffect, useState } from "react"

const ProductsContext = createContext<any>(null)

export const useProductsContext = () => useContext(ProductsContext)

const ProductsContextProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [products, setProducts] = useState<Product[] | null>(null)
	const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
		null
	)
	const [categories, setCategories] = useState<any>([])
	const [loaded, setLoaded] = useState(false)

	const filterProducts = (category: string, prods: Product[] | null = null) => {
		if (prods) {
			setFilteredProducts(products)
			return
		}

		if (category === "all") {
			setFilteredProducts(products)
		} else if (category !== "ofertas") {
			setFilteredProducts(
				products!.filter((product) => product.categoria === category)
			)
		} else {
			setFilteredProducts(
				products!.filter((producto) => producto.descuento > 0)
			)
		}
	}

	useEffect(() => {
		api.list().then((data: Product[]) => {
			setProducts(data)
			const categorias: string[] = []

			data.forEach((producto) => {
				// Verificar si la categoría ya está en el array
				if (!categorias.includes(producto.categoria)) {
					// Agregar la categoría al array
					categorias.push(producto.categoria)
				}
			})
			setCategories(categorias)
		})
	}, [])

	return (
		<ProductsContext.Provider
			value={{ products, categories, filterProducts, filteredProducts }}>
			{children}
		</ProductsContext.Provider>
	)
}
export default ProductsContextProvider
