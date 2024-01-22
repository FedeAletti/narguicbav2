// import React from "react"
// import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react"
// import { Product } from "@/types"

// type CardProductProps = {
//     item: Product
// }

// export function ProductCard({ item }: CardProductProps) {

//     const { title, brand, price, category, description, isAvailable, thumbnail } = item

// 	return (
// 		<Card
// 			shadow="sm"
// 			isPressable
// 			onPress={() => console.log("item pressed")}
// 			className="col-span-12 md:col-span-3">
// 			<CardBody className="overflow-visible p-0 transition-all ease-in-out duration-300 bg-white relative h-[280px]">
// 				<Image
// 					shadow="sm"
// 					radius="lg"
// 					width="100%"
// 					alt={title}
// 					className="w-full object-cover hover:object-contain h-[280px]"
// 					src={thumbnail}
// 				/>
// 			</CardBody>
// 			<CardFooter className="text-small bg-[#f6f6f6] text-jaguar-50 h-24 -mt-5 justify-between">
// 				<div className="flex items-center gap-3">
// 					<b>{title}</b>
// 					<Chip color="warning" variant="shadow">{brand}</Chip>
// 				</div>
// 				<p className="text-default-500">{price}</p>
// 			</CardFooter>
// 		</Card>
// 	)
// }

import { SquareIcon } from "@/components/icons"
import { Product } from "@/types"
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
		name,
		brand,
		price,
		category,
		description,
		isAvailable,
		thumbnail,
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
			<div className="group-hover:scale-50 transition-all ease-linear duration-200">
				<SquareIcon className="filter blur-sm"/>
			</div>
			<div className="relative bottom-32 flex items-center justify-center">
				{/* <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 bg-[radial-gradient(black,_transparent_60%)] rotate-[0,_0,_1,_20deg] [scale3d(1,_0.6,_1)] opacity-[0.2]"></div> */}
				<Image
					className="w-full object-cover max-h-52 top-0 drop-shadow-2xl"
					src={thumbnail}
					alt=""
				/>
			</div>
			<div className="absolute bottom-0 text-white px-6 pb-6 mt-6 w-full">
				<span className="block opacity-75 -mb-1">{brand !== "Otro" ? brand : null}</span>
				<div className="flex flex-col gap-5 justify-between">
					<span className="block font-semibold text-lg">{name}</span>
					<span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
						$ {price}
					</span>
				</div>
			</div>
		</motion.div>
	)
}
