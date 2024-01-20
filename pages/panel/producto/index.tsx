import { useUserContext } from "@/context/UserContext"
import AdminLayout from "@/layouts/admin"
import { Category } from "@/types"
import { categories, subcategories } from "@/utils/dummy/categories"
import {
	Input,
	Select,
	SelectItem,
	Switch,
	Textarea,
	cn,
} from "@nextui-org/react"
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"

interface FormData {
	name: string
	description: string
	thumbnail: string
	price: number
	brandId: number
	relatedProducts: []
	categoryId: number | null
	subcategoryId: string | null
	isAvailable: boolean
}

const ProductPanel = () => {
	// Estado para almacenar los valores del formulario
	const [formData, setFormData] = useState<FormData>({
		name: "",
		description: "",
		thumbnail: "",
		price: 0,
		isAvailable: true,
		brandId: 0,
		relatedProducts: [],
		subcategoryId: null,
		categoryId: null,
	})

	// Manejador de eventos para los cambios en los campos de entrada
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	// Manejador de eventos para los cambios en los campos select
	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	// Manejador de eventos para enviar el formulario
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		// Aquí puedes realizar acciones como enviar los datos al servidor
		console.log("Datos del formulario:", formData)
	}

	const handleAvailableChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target
		setFormData((prevData) => ({
			...prevData,
			isAvailable: checked,
		}))
	}

	useEffect(() => {
		console.log(formData)
	}, [formData])

	return (
		<AdminLayout>
			<h2 className="text-3xl font-bold uppercase">
				Panel de carga de producto
			</h2>
			<form
				action=""
				onSubmit={handleSubmit}
				className="flex flex-col gap-3 items-center my-10">
				<Input
					isRequired
					label="Nombre del producto"
					defaultValue={formData.name}
					className="max-w-xl"
				/>
				<Textarea
					isRequired
					label="Descripción del producto"
					labelPlacement="inside"
					className="max-w-xl"
				/>
				<div className="w-full max-w-xl py-10 px-10 bg-default-100 hover:bg-default-200 rounded-xl">
					ACA IMAGEN
				</div>
				<Input
					isRequired
					type="number"
					label="Precio del producto"
					defaultValue={formData.name}
					className="max-w-xl"
				/>

				<Select
					isRequired
					label="Categoría del producto"
					placeholder="Categoría"
					name="categoryId"
					defaultSelectedKeys={formData.categoryId ? [formData.categoryId] : []}
					onChange={handleSelectChange}
					className="max-w-xl">
					{categories.map((category) => (
						<SelectItem key={category.id} value={category.id}>
							{category.name}
						</SelectItem>
					))}
				</Select>
				<Select
					isRequired
					label="Subcategoria del producto"
					name="subcategoryId"
					defaultSelectedKeys={
						formData.subcategoryId ? [formData.subcategoryId] : []
					}
					onChange={handleSelectChange}
					className="max-w-xl">
					{subcategories.map((subcategory) => (
						<SelectItem key={subcategory.id} value={subcategory.id}>
							{subcategory.name}
						</SelectItem>
					))}
				</Select>
				<Switch
					isSelected={formData.isAvailable}
					onChange={handleAvailableChange}
					classNames={{
						base: cn(
							"inline-flex flex-row-reverse w-full mx-auto max-w-md bg-content1 hover:bg-content2 items-center",
							"justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
							"data-[selected=true]:border-primary"
						),
						wrapper: cn(
							"p-0 h-4 overflow-visible",
							"group-data-[selected]:bg-green-500"
						),
						thumb: cn(
							"w-6 h-6 border-2 shadow-lg",
							"group-data-[hover=true]:border-primary",
							//selected
							"group-data-[selected=true]:ml-6",
							// pressed
							"group-data-[pressed=true]:w-7",
							"group-data-[selected]:group-data-[pressed]:ml-4"
						),
					}}>
					<div className="flex flex-col gap-1">
						<p className="text-medium">El producto está disponible?</p>
						<p className="text-tiny text-default-400">
							Pondrá al producto sin stock en la tienda.
						</p>
					</div>
				</Switch>
			</form>
		</AdminLayout>
	)
}

export default ProductPanel