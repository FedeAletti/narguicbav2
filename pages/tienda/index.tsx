import { ProductList } from "@/components/Products/ProductList"
import { ProductCategory } from "@/components/ui/ProductCategory"
import { courage, manrope } from "@/config/fonts"
import DefaultLayout from "@/layouts/default"
import { Checkbox, Radio, RadioGroup, cn } from "@nextui-org/react"
import React from "react"

const TiendaPage = () => {
	return (
		<DefaultLayout>
			<section className="my-10 flex flex-wrap items-center justify-center px-5">
				<a href="#productos">
					<ProductCategory
						title="OFERTAS"
						subtitle="Mirá los productos en oferta 🔥"
						thumbnail="/productos/oferta/oferta-category.png"
						background="bg-gradient-to-l from-orange-600 to-red-400"
					/>
				</a>
				<a href="#productos">
					<ProductCategory
						title="Narguilas"
						subtitle="Concé nuestro catálogo"
						thumbnail="/productos/narguila/nargui-1.png"
					/>
				</a>
				<a href="#productos">
					<ProductCategory
						title="Tabacos"
						subtitle="La mayor variedad del país"
						thumbnail="/productos/tabaco/adalya-bluemelon.png"
					/>
				</a>
				<a href="#productos">
					<ProductCategory
						title="Accesorios"
						subtitle="Todo lo que necesitas"
						thumbnail="/productos/accesorio/kaloud.png"
					/>
				</a>
			</section>
			<section className="w-screen min-h-screen container" id="productos">
				<h2
					className={`${[courage.className].join(
						" "
					)} text-3xl text-center text-primary-foreground font-semibold px-5 py-4`}>
					Productos
				</h2>
				<ProductList />
			</section>
		</DefaultLayout>
	)
}

export default TiendaPage
