import { SquareIcon } from "@/components/icons"
import { Product } from "@/types"
import { Image } from "@nextui-org/react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import React from "react"

type CardCategoryProps = {
	title: string
	subtitle: string
	href: string
}

export const ProductCard = ({ title, subtitle, href }: CardCategoryProps) => {
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
			className={`flex-shrink-0 m-6 relative overflow-hidden bg-[#581c87] rounded-lg max-w-xs shadow-lg group transition-all ease-linear duration-200 hover:cursor-pointer`}>
			<div className="group-hover:scale-50 transition-all ease-linear duration-200">
				<SquareIcon />
			</div>
			<div className="relative bottom-32 flex items-center justify-center">
				<div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 bg-[radial-gradient(black,_transparent_60%)] rotate-[0,_0,_1,_20deg] [scale3d(1,_0.6,_1)] opacity-[0.2]"></div>
				<Image
					className="relative w-full object-cover top-0 "
					src={thumbnail}
					alt=""
				/>
			</div>
			<div className="absolute bottom-0 text-white px-6 pb-6 mt-6 w-full">
				<span className="block opacity-75 -mb-1">{subtitle}</span>
				<div className="flex justify-between">
					<span className="block font-semibold text-xl">{title}</span>
					<span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"></span>
				</div>
			</div>
		</motion.div>
	)
}
