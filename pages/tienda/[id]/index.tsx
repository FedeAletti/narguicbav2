import { ProductDetail } from "@/components/Products/ProductDetail"
import { ProductList } from "@/components/Products/ProductList"
import { InfiniteHero } from "@/components/ui/InfiniteHero"
import { courage } from "@/config/fonts"
import { useProductsContext } from "@/context/ProductsContext"
import DefaultLayout from "@/layouts/default"
import { Product } from "@/types"
import { seleccionarNumerosAzar } from "@/utils/randomProducts"
import { Skeleton } from "@nextui-org/react"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"

const ProductDetailPage = () => {
	const [product, setProduct] = useState<null | Product>(null)
	const [relatedProducts, setRelatedProducts] = useState<null | Product[]>(null)

	const { id } = useRouter().query

	const { products } = useProductsContext()

	useEffect(() => {
		if (products) {
			if (products && id) {
				setProduct(products.find((product: any) => product.id === id))
			}
			const randomNums = seleccionarNumerosAzar(products, 3)

			const productosSeleccionados: Product[] = randomNums.map(
				(num) => products[num]
			)
			setRelatedProducts(productosSeleccionados)
		}
	}, [id, products])

	return (
		<DefaultLayout>
			<div className="md:w-[60vw] mx-auto px-8 grid grid-cols-12 place-content-center">
				{product ? (
					<ProductDetail product={product} />
				) : (
					<div>
						<Skeleton />
					</div>
				)}
			</div>
			<div className="mx-auto max-w-[70vw]">
				<InfiniteHero />
				<h2
					className={`${courage.className} text-xl font-bold text-center my-4`}>
					PRODUCTOS RELACIONADOS
				</h2>
				{relatedProducts && <ProductList products={relatedProducts} />}
			</div>
		</DefaultLayout>
	)
}

export default ProductDetailPage
