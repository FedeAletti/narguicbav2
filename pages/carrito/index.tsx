import { CartList } from "@/components/Products/Cart/CartList"
import { CartTicket } from "@/components/Products/Cart/CartTicket"
import { useCartContext } from "@/context/CartContext"
import DefaultLayout from "@/layouts/default"
import { ProductInCart } from "@/types"
import { aplicarDescuento } from "@/utils/prices"
import { Button, ButtonGroup, Divider } from "@nextui-org/react"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const CartPage = () => {
	const { cart: productsInCart, deleteCart } = useCartContext()
	const [products, setProducts] = useState<ProductInCart[]>([])
	const [cartTotal, setCartTotal] = useState(0)

	useEffect(() => {
		const calcularTotalCarrito = (): number => {
			let total = 0

			productsInCart.forEach((producto: ProductInCart) => {
				if (producto.quantity) {
					total +=
						aplicarDescuento(producto.precio, producto.descuento) *
						producto.quantity
				}
			})

			return total
		}
		setCartTotal(calcularTotalCarrito())

		setProducts([...productsInCart])
	}, [productsInCart])

	return (
		<DefaultLayout>
			<h1 className="my-10 text-3xl font-bold">Carrito</h1>
			<section className="grid grid-cols-12 gap-8 w-[90vw] md:w-[80vw] min-h-screen">
				{products.length > 0 ? (
					<>
						<div className="col-span-12 md:col-span-8 gap-5 bg-transparent text-black rounded-lg min-h-[50vh]">
							<CartList />
						</div>
						<CartTicket
							deleteCart={deleteCart}
							productsInCart={productsInCart}
							cartTotal={cartTotal}
						/>
					</>
				) : (
					<div className="col-span-12 flex flex-col items-center gap-4">
						<h2 className="text-center text-2xl text-white font-bold">
							No hay productos en el carrito 😞
						</h2>
						<Link
							href="/tienda"
							className="text-md  font-bold text-white border-b-1 border-b-jaguar-600">
							Ir a tienda
						</Link>
					</div>
				)}
			</section>
		</DefaultLayout>
	)
}

export default CartPage
