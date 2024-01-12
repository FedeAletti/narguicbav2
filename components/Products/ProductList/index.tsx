import React, { useEffect, useState } from "react"
import { ProductCard } from "../ProductCard"
import { Product } from "@/types"
import {
	Breadcrumbs,
	BreadcrumbItem,
	Skeleton,
	Card,
	Button,
	ButtonGroup,
} from "@nextui-org/react"
import { motion } from "framer-motion"
import { getProducts } from "@/utils/api"
import { usePathname } from "next/navigation"

export const ProductList = () => {
	const pathname = usePathname()
	const [products, setProducts] = useState([] as Product[])
	const [category, setCategory] = useState("")
	const [selectedId, setSelectedId] = useState(null)

	useEffect(() => {
		if (category !== "") {
			getProducts().then((data) => {
				setProducts(data.filter((item) => item.category === category))
			})
		} else {
			getProducts().then((data) => {
				setProducts(data)
			})
		}
	}, [category])

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

	const CATEGORIES = [
		{
			label: "Narguilas",
			value: "narguila",
		},
		{
			label: "Tabacos",
			value: "tabaco",
		},
		{
			label: "Carbones",
			value: "carbon",
		},
		{
			label: "Accesorios",
			value: "accesorio",
		},
	]

	return (
		<div className="relative">
			<div className="sticky top-[3.9rem] w-full py-5 z-50 flex items-center gap-5 justify-center flex-wrap bg-primary/80">
				{category !== "" && (
					<Button
						onClick={() => setCategory("")}
						className="bg-primary shadow-lg shadow-purple-900 border-b-1">
						Todos
					</Button>
				)}
				<Button className="bg-gradient-to-br from-purple-900 via-purple-900 to-black shadow-lg shadow-purple-700 border-1">
					Ofertas
				</Button>
				{CATEGORIES.map((item, index) => (
					<Button
						key={index}
						onClick={() => setCategory(item.value)}
						className="bg-primary shadow-lg shadow-purple-900 border-b-1">
						{item.label}
					</Button>
				))}
			</div>
			<motion.article
				variants={container}
				initial="hidden"
				animate="visible"
				className="flex flex-wrap items-center justify-center px-5">
				{products.map((item) => (
					<ProductCard key={item.id} item={item} />
				))}
			</motion.article>
		</div>
	)
}
