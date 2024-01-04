import { ProductList } from "@/components/Products/ProductList"
import { ProductCategory } from "@/components/ui/ProductCategory"
import DefaultLayout from "@/layouts/default"
import { Checkbox, Radio, RadioGroup } from "@nextui-org/react"
import React from "react"

const TiendaPage = () => {
	return (
		<DefaultLayout>
			<section className="my-10 grid grid-cols-12 gap-5 px-5">
				<ProductCategory />
				<ProductCategory />
				<ProductCategory />
			</section>
			<section className="w-screen min-h-screen grid grid-cols-12 grid-rows-4 gap-4 px-5">
				<div className="hidden md:block md:col-span-3 bg-white rounded-xl px-5 py-9 h-full row-span-4">
					<h2 className="text-3xl text-primary-50 font-semibold">Filtros</h2>
					<div className="h-full flex flex-col gap-10 ">
						<RadioGroup label="👉 por categoría" className="text-primary-foreground">
							<Radio value="buenos-aires" className="text-black" style={{ color: "black" }}>Buenos Aires</Radio>
							<Radio value="sydney">Sydney</Radio>
							<Radio value="san-francisco">San Francisco</Radio>
							<Radio value="london">London</Radio>
							<Radio value="tokyo">Tokyo</Radio>
						</RadioGroup>
					</div>
				</div>
				<div className="col-span-12 md:col-span-9">
					<h2 className="text-3xl text-primary font-semibold px-5 py-4">
						Productos
					</h2>
					<ProductList />
				</div>
			</section>
		</DefaultLayout>
	)
}

export default TiendaPage
