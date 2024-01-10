import { MinusIcon, PlusIcon } from "@/components/icons"
import { useCartContext } from "@/context/CartContext"
import { useProductsContext } from "@/context/ProductsContext"
import { Product } from "@/types"
import { Button } from "@nextui-org/react"
import React, { useEffect, useState } from "react"

type Props = {
	stock: number
	onAdd: Function
	id: number
	qty?: number
}

export const ItemCount = ({ stock, onAdd, id, qty = 1 }: Props) => {
	const [count, setCount] = useState(qty)

	const handleRemove = () => {
		if (count > 1) {
			onAdd(count - 1)
			setCount(count - 1)
		}
	}

	const handleAdd = () => {
		if (count < stock) {
			onAdd(count + 1)
			setCount(count + 1)
		}
	}

	useEffect(() => {
		setCount(qty)
	}, [qty])

	return (
		<div className="flex items-center justify-between gap-5 py-2 rounded-3xl bg-slate-200 px-2">
			<Button
				variant="bordered"
				size="sm"
				isIconOnly
				className="rounded-full text-tiny"
				aria-label="remove item"
				onClick={handleRemove}>
				<MinusIcon />
			</Button>
			<h6 className="text-lg font-bold">{count}</h6>
			<Button
				variant="flat"
				size="sm"
				isIconOnly
				className="rounded-full text-tiny"
				aria-label="add item"
				onClick={handleAdd}>
				<PlusIcon />
			</Button>
		</div>
	)
}
