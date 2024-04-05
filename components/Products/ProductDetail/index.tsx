import { DeleteIcon, PriceIcon, SquareIcon } from "@/components/icons"
import React, { useEffect, useState } from "react"
import { ItemCount } from "../ItemCount"
import { Button, Image } from "@nextui-org/react"

import { Product } from "@/types"
import { useCartContext } from "@/context/CartContext"
import { useRouter } from "next/router"
import { successToast } from "@/utils/toasts"
import { aplicarDescuento } from "@/utils/prices"

export const ProductDetail = ({
	product,
	fromCart = false,
	productQuantity,
}: {
	product: Product
	fromCart?: boolean
	productQuantity?: number
}) => {
	const [quantity, setQuantity] = useState(productQuantity || 1)

	const { addToCart, deleteFromCart } = useCartContext()
	const [addedCart, setAddedCart] = useState(false)

	const router = useRouter()

	const handleQuantity = (qty: number) => {
		setQuantity(qty)
	}

	const handleAdd = () => {
		addToCart(product, quantity)
		successToast(
			`Agregaste ${quantity} ${
				quantity > 1 ? "productos" : "producto"
			} al carrito`
		)
		setQuantity(1)
		setAddedCart(true)
	}

	useEffect(() => {
		setAddedCart(false)
	}, [product])

	return (
		<article className="col-span-12 place-content-center mt-10">
			<div
				className={`grid grid-cols-12 gap-5 min-h-[50vh] rounded-xl md:rounded-bl-[50px] overflow-hidden bg-white text-primary`}>
				<div className="col-span-12 md:col-span-5 md:rounded-tr-[90px] grid place-content-center bg-gradient-to-r from-violet-800 via-violet-600 to-indigo-700 ">
					<Image src={product.imagen} alt={product.nombre} />
				</div>
				<div className="col-span-12 md:col-span-7 flex flex-col gap-5 justify-around py-10 px-5">
					<div className="flex flex-wrap gap-y-3.5 items-center justify-between">
						<h3 className="text-3xl font-bold">{product.nombre}</h3>
						{product.descuento > 0 && (
							<span>
								<span className="relative inline-block overflow-hidden rounded-full">
									<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#21cc61_0%,#393BB2_50%,#21cc61_100%)]" />
									<div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-green-700 px-3 py-1 text-sm font-bold text-white backdrop-blur-3xl">
										% {product.descuento} OFF!
									</div>
								</span>
							</span>
						)}
					</div>
					<p className="text-lg">{product.descripcion}</p>

					<div className="flex flex-row flex-wrap justify-between">
						{product.descuento > 0 && (
							<div className=" border-2 rounded-full disabled text-gray-400 line-through w-32 scale-80 text-center px-1 py-2 font-bold">
								<span>
									{(product.precio * quantity).toLocaleString("es-AR", {
										style: "currency",
										currency: "ARS",
									})}
								</span>
							</div>
						)}
						<div className="bg-white border-2 rounded-full border-green-500 text-green-500 w-32 text-center px-1 py-2 font-bold">
							<span>
								{aplicarDescuento(
									product.precio,
									product.descuento
								).toLocaleString("es-AR", {
									style: "currency",
									currency: "ARS",
									maximumFractionDigits: 2,
								})}
							</span>
						</div>
					</div>
					<ItemCount
						onAdd={handleQuantity}
						stock={10}
						qty={quantity}
						id={product.id}
						className={fromCart ? "hidden" : "w-full"}
					/>

					<div className="">
						{addedCart ? (
							<>
								<Button
									onClick={() => {
										router.push("/tienda")
										setAddedCart(false)
									}}
									className="bg-gradient-to-br from-purple-900 via-purple-900 to-violet-900  border-1 w-full mt-2">
									Seguir Comprando
								</Button>
								<Button
									onClick={() => router.push("/carrito")}
									className="bg-gradient-to-br from-purple-900 via-purple-900 to-violet-900  border-1 w-full mt-2">
									Ir al Carrito
								</Button>
							</>
						) : (
							<Button
								onClick={handleAdd}
								className="bg-gradient-to-br from-purple-900 via-purple-900 to-violet-900  border-1 w-full mt-2">
								Agregar
							</Button>
						)}
					</div>
				</div>
			</div>
		</article>
	)
}
