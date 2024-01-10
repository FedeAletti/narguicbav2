import { ItemCount } from "@/components/Products/ItemCount"
import { ProductCard } from "@/components/Products/ProductCard"
import { ProductList } from "@/components/Products/ProductList"
import { PriceIcon, SquareIcon } from "@/components/icons"
import { courage } from "@/config/fonts"
import DefaultLayout from "@/layouts/default"
import { Product } from "@/types"
import { getProduct } from "@/utils/api"
import { Button, Chip, Image, Skeleton } from "@nextui-org/react"
import { Variants, motion } from "framer-motion"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

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

const ProductDetailPage = () => {
	const [product, setProduct] = useState<null | Product>(null)
	const [quantity, setQuantity] = useState(1)
	const { id } = useRouter().query

	useEffect(() => {
		getProduct(id as string).then((product) => {
			setProduct(product[0])
			console.log(product)
		})
	}, [id])

	const handleQuantity = (quantity: number) => {
		setQuantity(quantity)
	}

	return (
		<DefaultLayout>
			<div className="md:w-[60vw] mx-auto px-8 grid grid-cols-12 place-content-center">
				{product ? (
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
							<div className="py-5 px-5">
								<h2 className=" text-3xl font-bold">{product.title}</h2>
								<p className="max-w-sm">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Officia atque sed expedita ullam error commodi, voluptas ex
									aperiam recusandae sunt soluta reprehenderit quod cupiditate
									enim pariatur quidem dolore odio adipisci?
								</p>
								<div className="mt-5 flex flex-row justify-between items-center">
									{/* <span className="bg-white rounded-full w-20 shadow-sm shadow-orange-500 text-orange-500 border-1 border-orange-500 text-xs font-bold text-center py-2 leading-none">
										$ {quantity * product.price}
									</span> */}
									<div className="flex items-center  bg-white border-2 rounded-full border-green-500 text-green-500 h-12 min-w-24 px-2 font-bold">
										<PriceIcon className="w-8 fill-green-500" />
										<span>{quantity * product.price}</span>
									</div>
									<ItemCount
										onAdd={handleQuantity}
										stock={10}
										qty={1}
										id={product.id}
									/>
								</div>
								<Button className="bg-gradient-to-br from-purple-900 via-purple-900 to-violet-900  border-1 w-full mt-2">
									Agregar
								</Button>
							</div>
						</div>
					</article>
				) : (
					<Skeleton />
				)}
			</div>
			<div className="mx-auto max-w-[70vw]">
				<h2 className={`${courage.className} text-xl font-bold`}>
					PRODUCTOS RELACIONADOS
				</h2>
				<ProductList />
			</div>
		</DefaultLayout>
	)
}

export default ProductDetailPage
