import { DeleteIcon, PriceIcon, SquareIcon } from "@/components/icons"
import React, { useEffect, useState } from "react"
import { ItemCount } from "../ItemCount"
import { Button, Image } from "@nextui-org/react"
import { Variants, motion } from "framer-motion"
import { Product } from "@/types"
import { useCartContext } from "@/context/CartContext"
import { useRouter } from "next/router"
import { successToast } from "@/utils/toasts"
import { aplicarDescuento } from "@/utils/prices"

const cardVariants: Variants = {
	offscreen: {
		y: 300,
	},
	onscreen: {
		y: 0,
		rotate: -10,
		transition: {
			type: "spring",
			bounce: 0.4,
			duration: 0.8,
		},
	},
}
const squareVariants: Variants = {
	offscreen: {
		y: -300,
	},
	onscreen: {
		y: 40,
		x: 50,
		rotate: 360,
		transition: {
			ease: "linear",
			duration: 30,
			repeat: Infinity,
		},
	},
}

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

	return (
		<article className="col-span-12 grid grid-cols-12 bg-white gap-4 my-10 rounded-lg md:rounded-bl-[35%] relative">
			<motion.div
				initial="offscreen"
				whileInView="onscreen"
				viewport={{ once: true, amount: 0.8 }}
				className="col-span-12 md:col-span-4 overflow-hidden rounded-lg md:rounded-tr-[35%] md:rounded-bl-[35%] rounded-br-[0%] bg-gradient-to-br from-purple-900 via-purple-900 to-violet-900 group transition-all ease-linear duration-200 relative">
				<motion.div
					variants={squareVariants}
					className="absolute inset-0 transition-all ease-linear duration-200">
					<SquareIcon />
				</motion.div>
				<motion.div
					variants={cardVariants}
					className="absolute left-1 top-[25%] xl:top-[4%]">
					<Image
						className="w-full/2 overflow-visible"
						src={product.imagen}
						alt={product.nombre}
					/>
				</motion.div>
			</motion.div>
			<div className="col-span-12 md:col-span-8 flex flex-col justify-center gap-3 text-primary">
				{!fromCart && (
					<div className="md:hidden relative flex items-center justify-center overflow-hidden w-full mx-auto bg-[#581c87] rounded-lg max-w-xs shadow-lg transition-all ease-linear duration-200">
						<div className="group-hover:scale-50 transition-all ease-linear duration-200">
							<SquareIcon />
						</div>
						<div className="relative ">
							<div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 bg-[radial-gradient(black,_transparent_60%)] rotate-[0,_0,_1,_20deg] [scale3d(1,_0.6,_1)] opacity-[0.2]"></div>
							<Image
								className="relative w-full object-cover top-0 "
								src={product.imagen}
								alt=""
							/>
						</div>
					</div>
				)}
				<div className="py-5 px-5">
					<div>
						<h2 className=" text-3xl font-bold">{product.nombre}</h2>
						{product.descuento > 0 && (
							<span className="absolute top-5 right-5 z-50">
								<span className="relative inline-block overflow-hidden rounded-full p-[1px]">
									<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#21cc61_0%,#393BB2_50%,#21cc61_100%)]" />
									<div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-green-700 px-3 py-1 text-sm font-bold text-white backdrop-blur-3xl">
										% {product.descuento} OFF!
									</div>
								</span>
							</span>
						)}
					</div>
					<p className={`max-w-sm ${fromCart && "hidden"}`}>
						{product.descripcion || ""}
					</p>
					<div className="mt-5 flex flex-row justify-between items-center">
						<div className="flex flex-col justify-center items-center md:items-start md:justify-start w-full lg:flex-row gap-2 flex-wrap">
							{product.descuento > 0 && (
								<div className="bg-white border-2 rounded-full disabled text-gray-400 line-through w-32 scale-80 text-center px-1 py-2 font-bold">
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
						{!fromCart && (
							<ItemCount
								onAdd={handleQuantity}
								stock={10}
								qty={quantity}
								id={product.id}
							/>
						)}
						{fromCart && (
							<Button
								isIconOnly
								variant="bordered"
								className="border-red-500 transition-all ease-in-out duration-300"
								onClick={() => deleteFromCart(product)}>
								<DeleteIcon className="hover:fill-red-300" />
							</Button>
						)}
					</div>
					{!fromCart && addedCart ? (
						<>
							<Button
								onClick={() => router.push("/tienda")}
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
						!fromCart && (
							<Button
								onClick={handleAdd}
								className="bg-gradient-to-br from-purple-900 via-purple-900 to-violet-900  border-1 w-full mt-2">
								Agregar
							</Button>
						)
					)}
				</div>
			</div>
		</article>
	)
}
