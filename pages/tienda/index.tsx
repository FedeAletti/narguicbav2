import { ProductList } from "@/components/Products/ProductList"
import { ProductCategory } from "@/components/ui/ProductCategory"
import { courage, manrope } from "@/config/fonts"
import { useProductsContext } from "@/context/ProductsContext"
import DefaultLayout from "@/layouts/default"
import { Product } from "@/types"
import { Button, Checkbox, Radio, RadioGroup, cn } from "@nextui-org/react"
import React, { useEffect, useState } from "react"

const TiendaPage = () => {
	const [productsToRender, setProductsToRender] = useState([] as Product[])
	const [category, setCategory] = useState("")
	const { categories, products, filteredProducts, filterProducts } =
		useProductsContext()

	useEffect(() => {
		if (category === "") {
			setProductsToRender(products)
		} else {
			setProductsToRender(filteredProducts)
		}
	}, [products, filteredProducts, category])

	const handleFilter = (category: any) => {
		setCategory(category)
		filterProducts(category)
	}

	return (
		<DefaultLayout>
			{productsToRender && (
				<>
					<section className="my-10 flex flex-wrap items-center justify-center px-5">
						<a href="#productos" onClick={() => handleFilter("ofertas")}>
							<ProductCategory
								title="OFERTAS"
								subtitle="Mirá los productos en oferta 🔥"
								thumbnail="/productos/oferta/oferta-category.png"
								background="bg-gradient-to-l from-orange-600 to-red-400"
							/>
						</a>
						<a
							href="#productos"
							onClick={() =>
								handleFilter("narguilas")
							}>
							<ProductCategory
								title="Narguilas"
								subtitle="Concé nuestro catálogo"
								thumbnail="/productos/oferta/narguis-category.png"
							/>
						</a>
						<a
							href="#productos"
							onClick={() =>
								handleFilter("tabacos")
							}>
							<ProductCategory
								title="Tabacos"
								subtitle="La mayor variedad del país"
								thumbnail="/productos/oferta/tabacos-category.png"
							/>
						</a>
						<a
							href="#productos"
							onClick={() =>
								handleFilter("accesorios")
							}>
							<ProductCategory
								title="Accesorios"
								subtitle="Todo lo que necesitas"
								thumbnail="/productos/oferta/accesorios-category.png"
							/>
						</a>
					</section>
					<section
						className="w-screen mx-auto min-h-screen container"
						id="productos">
						<h2
							className={`${[courage.className].join(
								" "
							)} text-3xl text-center text-primary-foreground font-semibold px-5 py-4`}>
							Productos
						</h2>
						<div className="relative">
							<div className="sticky top-[3.9rem] w-full py-5 z-50 flex items-center gap-5 justify-center flex-wrap bg-primary/80">
								{category !== "" && (
									<Button
										onClick={() => handleFilter("")}
										className="bg-primary shadow-lg shadow-purple-900 border-b-1">
										Todos
									</Button>
								)}
								<Button
									onClick={() => handleFilter("ofertas")}
									className={`bg-gradient-to-br from-purple-900 via-purple-900 to-black shadow-lg shadow-purple-700 ${
										category === "ofertas" &&
										"bg-gradient-to-br from-purple-900 via-purple-900 to-black shadow-lg border-1"
									}`}>
									Ofertas
								</Button>
								{categories.map((categoryBtn: any, index: number) => (
									<Button
										key={`${index}-${categoryBtn}`}
										onClick={() => handleFilter(categoryBtn)}
										className={`bg-primary shadow-lg capitalize  shadow-purple-900 border-b-1 ${
											categoryBtn === category &&
											"bg-gradient-to-br from-purple-900 via-purple-900 to-black shadow-lg border-1"
										}`}>
										{categoryBtn}
									</Button>
								))}
							</div>
						</div>
						<ProductList products={productsToRender} />
					</section>
				</>
			)}
		</DefaultLayout>
	)
}

export default TiendaPage
