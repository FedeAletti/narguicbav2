import { LOGO_URL } from "@/constants"
import { Image } from "@nextui-org/react"
import { motion } from "framer-motion"
import React from "react"

type CardCategoryProps = {
	title: string
	subtitle: string
	thumbnail: string
	background?: string
}

export const ProductCategory = ({
	title,
	subtitle,
	thumbnail,
	background = "bg-gradient-to-r from-violet-800 via-violet-600 to-indigo-700",
}: CardCategoryProps) => {
	const itemAnimation = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	}

	const containerClasses = `flex-shrink-0 m-6 relative overflow-hidden ${background} rounded-xl max-w-xs shadow-lg group transition-all ease-linear duration-200 hover:cursor-pointer`

	return (
		<motion.div
			variants={itemAnimation}
			initial="hidden"
			animate="visible"
			className={containerClasses}>
			<div className="group-hover:scale-50 transition-all ease-linear duration-200">
				<Image
					className="w-full object-cover filter blur-sm relative top-20"
					src={LOGO_URL}
					alt=""
				/>
			</div>
			<div className="relative bottom-32 flex items-center justify-center">
				{/* <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 bg-[radial-gradient(black,_transparent_60%)] rotate-[0,_0,_1,_20deg] [scale3d(1,_0.6,_1)] opacity-[0.2]"></div> */}
				<Image
					className="relative w-full object-cover top-0 drop-shadow-2xl"
					src={thumbnail}
					alt=""
				/>
			</div>
			<div className="absolute bottom-0 text-white px-6 pb-6 mt-6 w-full">
				<span className="block opacity-75 mb-2">{subtitle}</span>
				<div className="flex justify-between">
					<span className="block font-semibold text-xl">{title}</span>
					<span className="bg-white rounded-full text-purple-800 text-xs font-bold px-3 py-2 leading-none flex items-center">
						Ir a {title.toLowerCase()}
					</span>
				</div>
			</div>
		</motion.div>
	)
}
