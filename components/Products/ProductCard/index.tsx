import { SquareIcon } from "@/components/icons"
import { Product } from "@/types"
import { aplicarDescuento } from "@/utils/prices"
import { Image } from "@nextui-org/react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import React from "react"

type CardProductProps = {
	item: Product
}

export const ProductCard = ({ item }: CardProductProps) => {
	const {
		id,
		nombre,
		imagen,
		stock,
		precio,
		descuento,
		categoria,
		marca,
		descripcion,
	} = item


	const router = useRouter()

	const itemAnimation = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	}

	return (
		<motion.div
			variants={itemAnimation}
			initial="hidden"
			animate="visible"
			onClick={() => router.push(`/tienda/${id}`)}
			className={`flex-shrink-0 h-full w-full m-6 relative overflow-hidden bg-[#581c87] rounded-lg max-w-xl mx-auto shadow-lg group transition-all ease-linear duration-200 hover:cursor-pointer`}>
			<div>
				<div className="group-hover:scale-50 transition-all ease-linear duration-200">
					<SquareIcon className="filter blur-sm" />
				</div>
				{descuento > 0 && (
					<span className="absolute top-5 right-5">
						<span className="relative inline-block overflow-hidden rounded-full p-[1px]">
							<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#21cc61_0%,#393BB2_50%,#21cc61_100%)]" />
							<div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-green-700 px-3 py-1 text-sm font-bold text-white backdrop-blur-3xl">
								% {descuento} OFF!
							</div>
						</span>
					</span>
				)}
				<div className="relative bottom-32 flex items-center justify-center">
					{/* <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 bg-[radial-gradient(black,_transparent_60%)] rotate-[0,_0,_1,_20deg] [scale3d(1,_0.6,_1)] opacity-[0.2]"></div> */}
					<Image
						className="w-full object-cover max-h-52 top-0 drop-shadow-2xl"
						src={imagen}
						alt=""
					/>
				</div>
				<div className="absolute bottom-0 text-white px-6 pb-6 mb-6 w-full">
					<span className="block opacity-75 mb-1 uppercase">
						{marca !== "Otro" ? marca : null}
					</span>
					<div className="flex flex-col gap-5 justify-between">
						<span className="block font-semibold text-3xl">{nombre}</span>
						<PriceChip price={precio} discount={descuento} />
					</div>
				</div>
			</div>
		</motion.div>
	)
}

const PriceChip = ({
	price,
	discount,
}: {
	price: number
	discount: number
}) => {
	return (
		<span
			className={`bg-white rounded-full text-lg font-bold px-5 py-2 leading-none flex items-center w-full text-center ${
				discount > 0 ? "text-green-600" : "text-jaguar-800"
			}`}>
			{discount > 0 && (
				<b className="line-through mr-5 text-jaguar-800/50">
					{price.toLocaleString("es-AR", {
						style: "currency",
						currency: "ARS",
						maximumFractionDigits: 2,
					})}
				</b>
			)}

			{aplicarDescuento(price, discount).toLocaleString("es-AR", {
				style: "currency",
				currency: "ARS",
				maximumFractionDigits: 2,
			})}
		</span>
	)
}
