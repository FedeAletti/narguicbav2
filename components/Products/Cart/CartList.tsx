import { ProductInCart } from "@/types"
import React from "react"
import { useCartContext } from "@/context/CartContext"
import { ProductDetail } from "../ProductDetail"
import Link from "next/link"

export const CartList = () => {
	const { cart: products } = useCartContext()

	return (
		<>
			{products.length > 0 ? (
				products.map((product: ProductInCart) => (
					<ProductDetail
						key={product.id}
						product={product}
						fromCart
						productQuantity={product.quantity}
					/>
				))
			) : (
				<div className="flex flex-col gap-4 items-center justify-center h-screen/2 flex-1">
					<h2 className="text-center text-2xl text-white font-bold">
						No hay productos en el carrito 😞
					</h2>
					<Link href="/tienda" className="text-md  font-bold text-white border-b-1 border-b-jaguar-600">Ir a tienda
					</Link>
				</div>
			)}
		</>
	)
}
