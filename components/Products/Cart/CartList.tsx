import { Product, ProductInCard } from "@/types"
import {
	Chip,
	Divider,
	Image,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	Tooltip,
	User,
} from "@nextui-org/react"
import React from "react"
import { ItemCount } from "../ItemCount"
import { useCartContext } from "@/context/CartContext"
import { useProductsContext } from "@/context/ProductsContext"

// MOCK

const columns = [
	{ name: "IMAGEN", uid: "image" },
	{ name: "PRODUCTO", uid: "product" },
	{ name: "CANTIDAD", uid: "quantity" },
	{ name: "PRECIO", uid: "price" },
]

export const CartList = () => {
	// const { cart: products } = useCartContext()

	const products: ProductInCard[] = [
		{
			id: 2,
			title: "Strong Lemon",
			brand: "Zomo",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/zomo-stronglemon.jpeg",
			price: 2300,
			isAvailable: true,
			quantity: 1,
		},
		{
			id: 3,
			title: "Lemon Pie",
			brand: "Adalya",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/adalya-lemonpie.jpeg",
			price: 2300,
			isAvailable: true,
			quantity: 4,
		},
		{
			id: 4,
			title: "Baku Nights",
			brand: "Blue Horse",
			category: "tabaco",
			description: "rico",
			thumbnail: "/productos/tabaco/bluehorse-bakunights.jpeg",
			price: 2300,
			isAvailable: true,
			quantity: 2,
		},
	]

	const renderCell = React.useCallback(
		(prod: ProductInCard, columnKey: string | number) => {
		// (prod, columnKey: string | number) => {
			const cellValue = prod[columnKey as number]

			switch (columnKey) {
				case "image":
					return (
						<Image
							src={prod.thumbnail}
							alt={prod.title}
							aria-label="product image"
							className="w-32"
						/>
					)
				case "product":
					return (
						<div className="flex flex-col">
							<p className="font-bold text-xl text-primary capitalize">
								{prod.brand} | {prod.title}
							</p>
							<p className="text-bold text-primary text-sm capitalize">
								{prod.description}
							</p>
						</div>
					)
				case "quantity":
					return (
						<>
							<ItemCount
								onAdd={console.log}
								id={prod.id}
								qty={prod.quantity || 1}
								stock={100}
							/>
						</>
					)
				case "price":
					return (
						<div className="relative flex items-center gap-2">
							<p className="text-lg font-bold">
								{prod.price.toLocaleString("es-AR", {
									style: "currency",
									currency: "ARS",
									maximumFractionDigits: 1,
								})}
							</p>
						</div>
					)
				default:
					return cellValue
			}
		},
		[]
	)

	const classNames = React.useMemo(
		() => ({
			wrapper: ["max-h-[80vh]", "bg-white"],
			th: ["bg-transparent", "text-jaguar-950"],
			tr: ["border-b", "border-gray-200"],
			td: [
				// changing the rows border radius
				// first
				"group-data-[first=true]:first:before:rounded-none",
				"group-data-[first=true]:last:before:rounded-none",
				// middle
				"group-data-[middle=true]:before:rounded-none",
				"group-data-[middle=true]:before:border-b",
				"group-data-[middle=true]:before:border-divider",
				// last
				"group-data-[last=true]:first:before:rounded-none",
				"group-data-[last=true]:first:before:border-0",
				"group-data-[last=true]:last:before:rounded-none",
				"group-data-[last=true]:last:before:border-0",
			],
		}),
		[]
	)

	return (
		<Table classNames={classNames}>
			<TableHeader columns={columns}>
				{(column) => (
					<TableColumn
						key={column.uid}
						align={column.uid === "actions" ? "center" : "start"}>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody
				items={products}
				className="bg-white"
				emptyContent="No hay productos">
				{(item) => (
					<TableRow key={item.id}>
						{(columnKey) => (
							<TableCell>{renderCell(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	)
}
