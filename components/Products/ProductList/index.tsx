import React, { useEffect, useState } from "react"
import { ProductCard } from "../ProductCard"
import { Product } from "@/types"
import { motion } from "framer-motion"

export const ProductList = ({ products }: { products: Product[] }) => {
	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	}

	return (
		<motion.article
			variants={container}
			initial="hidden"
			animate="visible"
			className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] grid-rows-[1fr] place-content-center gap-5 px-5">
			{products &&
				products.map((item) => <ProductCard key={item.id} item={item} />)}
		</motion.article>
	)
}
