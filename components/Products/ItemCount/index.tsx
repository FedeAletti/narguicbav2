import { MinusIcon, PlusIcon } from "@/components/icons"
import { useCartContext } from "@/context/CartContext"
import { useProductsContext } from "@/context/ProductsContext"
import { Product } from "@/types"
import { Button } from "@nextui-org/react"
import React, { useState } from "react"

type Props = {
	stock: number
	onAdd: Function
	id: number
	qty?: number
}

export const ItemCount = ({ stock, onAdd, id, qty = 0 }: Props) => {
	const [count, setCount] = useState(qty)

	const { addToCart } = useCartContext()
	const products = useProductsContext() as Product[]
	const handleClick = (id: number, cantidad: number, action: string) => {
		// const findProduct = products.find((producto) => producto.id === id)

		// if (!findProduct) {
		// 	alert("Error en la base de datos")
		// 	return
		// }

		if (action === "remove") {
			if (count > 1) {
				setCount(count - 1)
			}
		} else if (action === "add") {
			if (count < stock) {
				setCount(count + 1)
			}
		}

		// addToCart(findProduct, cantidad)
		onAdd(count)
	}

	return (
		<div className="flex items-center justify-between gap-5 py-2 rounded-3xl bg-slate-200 px-2">
			<Button
				variant="bordered"
				size="sm"
				isIconOnly
				className="rounded-full text-tiny"
				aria-label="remove item"
				onClick={() => handleClick(id, count, "remove")}>
				<MinusIcon />
			</Button>
			<h6 className="text-lg font-bold">{count}</h6>
			<Button
				variant="flat"
				size="sm"
				isIconOnly
				className="rounded-full text-tiny"
				aria-label="add item"
				onClick={() => handleClick(id, count, "add")}>
				<PlusIcon />
			</Button>
		</div>
	)
}
