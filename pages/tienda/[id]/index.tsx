import { ItemCount } from "@/components/Products/ItemCount"
import { ProductCard } from "@/components/Products/ProductCard"
import { ProductDetail } from "@/components/Products/ProductDetail"
import { ProductList } from "@/components/Products/ProductList"
import { PriceIcon, SquareIcon } from "@/components/icons"
import { InfiniteHero } from "@/components/ui/InfiniteHero"
import { courage } from "@/config/fonts"
import DefaultLayout from "@/layouts/default"
import { Product } from "@/types"
import { getProduct } from "@/utils/api"
import { Button, Chip, Image, Skeleton } from "@nextui-org/react"
import { Variants, motion } from "framer-motion"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const ProductDetailPage = () => {
	const [product, setProduct] = useState<null | Product>(null)

	const { id } = useRouter().query

	useEffect(() => {
		getProduct(id as string).then((product) => {
			setProduct(product[0])
		})
	}, [id])

	return (
		<DefaultLayout>
			<div className="md:w-[60vw] mx-auto px-8 grid grid-cols-12 place-content-center">
				{product ? <ProductDetail product={product} /> : <div><Skeleton /></div>}
			</div>
			<div className="mx-auto max-w-[70vw]">
				<InfiniteHero />
				<h2 className={`${courage.className} text-xl font-bold text-center my-4`}>
					PRODUCTOS RELACIONADOS
				</h2>
				<ProductList />
			</div>
		</DefaultLayout>
	)
}

export default ProductDetailPage
