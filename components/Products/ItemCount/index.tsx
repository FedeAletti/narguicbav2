import { MinusIcon, PlusIcon } from "@/components/icons"
import { Button } from "@nextui-org/react"
import React, { useEffect, useState } from "react"

type Props = {
	stock: number
	onAdd: Function
	id: string
	qty?: number
	className?: string
}

export const ItemCount = ({ stock, onAdd, id, qty = 1, className }: Props) => {
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
		<div
			className={`flex items-center md:w-auto justify-between gap-5 py-2 rounded-3xl bg-slate-200 px-2 ${className}`}>
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
