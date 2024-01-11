import { ProductList } from "@/components/Products/ProductList"
import { ProductCategory } from "@/components/ui/ProductCategory"
import { courage, manrope } from "@/config/fonts"
import DefaultLayout from "@/layouts/default"
import { Checkbox, Radio, RadioGroup, cn } from "@nextui-org/react"
import React from "react"

const TiendaPage = () => {
	return (
		<DefaultLayout>
			<section className="my-10 grid grid-cols-12 gap-5 px-5">
				<ProductCategory
					title="Narguilas"
					subtitle="Cordoba"
					href="/tienda/narguilas"
				/>
				<ProductCategory
					title="Tabacos"
					subtitle="Cordoba"
					href="/tienda/tabacos"
				/>
				<ProductCategory
					title="Accesorios"
					subtitle="Cordoba"
					href="/tienda/accesorios"
				/>
			</section>
			<section className="w-screen min-h-screen container">
				{/* <div className="hidden lg:block lg:col-span-3 bg-white rounded-xl px-5 py-9 h-96 row-span-4">
					<h2 className="text-3xl text-primary font-semibold">Filtros</h2>
					<span className="text-primary">👉 por categoría</span>
					<div className="h-full flex flex-col gap-10 mt-4 ">
						<RadioGroup className="text-primary">
							<CustomRadio value="zomo">Zomo</CustomRadio>
							<CustomRadio value="adalya">Adalya</CustomRadio>
							<CustomRadio value="ziggy">Ziggy</CustomRadio>
							<CustomRadio value="blue-horse">Blue Horse</CustomRadio>
						</RadioGroup>
					</div>
				</div> */}
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
