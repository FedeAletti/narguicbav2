import { ProductInCart } from "@/types"
import React from "react"
import { useCartContext } from "@/context/CartContext"
import { ProductDetail } from "../ProductDetail"
import Link from "next/link"
import { CartItem } from "./CartItem"

export const CartList = () => {
	const { cart: products } = useCartContext()

	return (
		<>
			{products.length > 0 &&
				products.map((product: ProductInCart) => (
					<CartItem
						key={product.id}
						product={product}
						fromCart
						productQuantity={product.quantity}
					/>
				))}
		</>
	)
}
