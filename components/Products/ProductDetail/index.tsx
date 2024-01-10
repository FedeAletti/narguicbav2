import { DeleteIcon, PriceIcon, SquareIcon } from "@/components/icons"
import React, { useEffect, useState } from "react"
import { ItemCount } from "../ItemCount"
import { Button, Image } from "@nextui-org/react"
import { Variants, motion } from "framer-motion"
import { Product } from "@/types"
import { useCartContext } from "@/context/CartContext"
import { useRouter } from "next/router"
import { successToast } from "@/utils/toasts"

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

	const handleQuantity = (qty: number) => {
		setQuantity(qty)
	}

	const handleAdd = () => {
		addToCart(product, quantity)
		successToast(`Agregaste ${quantity} ${quantity > 1 ? `${product.category}s` : `${product.category}`} al carrito`)
		setQuantity(1)
	}

	useEffect(() => {})

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
						src={product.thumbnail}
						alt={product.title}
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
								src={product.thumbnail}
								alt=""
							/>
						</div>
					</div>
				)}
				<div className="py-5 px-5">
					<h2 className=" text-3xl font-bold">{product.title}</h2>
					<p className={`max-w-sm ${fromCart && "hidden"}`}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
						atque sed expedita ullam error commodi, voluptas ex aperiam
						recusandae sunt soluta reprehenderit quod cupiditate enim pariatur
						quidem dolore odio adipisci?
					</p>
					<div className="mt-5 flex flex-row justify-between items-center">
						<div className="bg-white border-2 rounded-full border-green-500 text-green-500 w-32 text-center px-1 py-2 font-bold">
							<span>
								{(product.price * quantity).toLocaleString("es-AR", {
									style: "currency",
									currency: "ARS",
								})}
							</span>
						</div>
						<ItemCount
							onAdd={handleQuantity}
							stock={10}
							qty={quantity}
							id={product.id}
						/>
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
					<Button
						onClick={handleAdd}
						className="bg-gradient-to-br from-purple-900 via-purple-900 to-violet-900  border-1 w-full mt-2">
						Agregar
					</Button>
				</div>
			</div>
		</article>
	)
}
