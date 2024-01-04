import React, { useEffect, useState } from "react"
import { ProductCard } from "../ProductCard"
import { Product } from "@/types"
import { Breadcrumbs, BreadcrumbItem, Skeleton, Card } from "@nextui-org/react"

const getProds = async (): Promise<Product[]> => {
	const res = await fetch("/api/hello")
	const data = (await res.json()) as Product[]
	return data
}

export const ProductList = () => {
	const [products, setProducts] = useState([] as Product[])
	const [category, setCategory] = useState("")

	useEffect(() => {
		getProds().then((data) => {
			setTimeout(() => {
				setProducts(data)
			}, 2500)
		})
	}, [])

	return (
		<div className="w-[90%] px-5">
			<Breadcrumbs isDisabled>
				<BreadcrumbItem>Tienda</BreadcrumbItem>
				<BreadcrumbItem>{category}</BreadcrumbItem>
			</Breadcrumbs>
			<article className="gap-5 grid grid-cols-12 mt-5">
				{products.length > 0
					? products.map((item, index) => (
							<ProductCard key={index} item={item} />
					  ))
					: Array.from({ length: 10 }).map((_, i) => (
							<Card
								className="col-span-12 md:col-span-3 space-5 p-4"
								radius="lg"
								key={i}>
								<Skeleton className="rounded-lg">
									<div className="h-24 rounded-lg bg-default-300"></div>
								</Skeleton>
								<div className="space-y-3">
									<Skeleton className="w-3/5 rounded-lg">
										<div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
									</Skeleton>
									<Skeleton className="w-4/5 rounded-lg">
										<div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
									</Skeleton>
									<Skeleton className="w-2/5 rounded-lg">
										<div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
									</Skeleton>
								</div>
							</Card>
					  ))}
			</article>
		</div>
	)
}
