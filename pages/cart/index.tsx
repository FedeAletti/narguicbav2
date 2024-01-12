import { CartList } from "@/components/Products/Cart/CartList"
import { useCartContext } from "@/context/CartContext"
import DefaultLayout from "@/layouts/default"
import { ProductInCard } from "@/types"
import { Button, ButtonGroup, Divider } from "@nextui-org/react"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const CartPage = () => {
	const { cart: productsInCart, deleteCart } = useCartContext()
	const [cartTotal, setCartTotal] = useState(0)

	useEffect(() => {
		const calcularTotalCarrito = (): number => {
			let total = 0

			productsInCart.forEach((producto: ProductInCard) => {
				if (producto.quantity) {
					total += producto.price * producto.quantity
				}
			})

			return total
		}
		setCartTotal(calcularTotalCarrito())
	}, [productsInCart])

	return (
		<DefaultLayout>
			<h1 className="my-10 text-3xl font-bold">Carrito</h1>
			<section className="grid grid-cols-12 gap-8 w-[90vw] md:w-[80vw] min-h-screen">
				<div className="col-span-12 md:col-span-8 bg-transparent text-black rounded-lg min-h-[50vh]">
					<CartList />
				</div>
				{productsInCart.length > 0 && (
					<div className="col-span-12 md:col-span-4 bg-transparent border-2 border-primary-600 rounded-xl h-[55vh] flex flex-col justify-between py-8">
						<ul className="py-4 px-5 space-y-5 ">
							{productsInCart.map((product: ProductInCard) => (
								<li
									className="flex justify-between items-center"
									key={product.id}>
									<p>{product.title}</p>
									<p>
										{(product.price * product.quantity!).toLocaleString(
											"es-AR",
											{
												style: "currency",
												currency: "ARS",
											}
										)}
									</p>
								</li>
							))}
							<Divider />
							<li className="font-bold flex justify-between items-center">
								<p>Total</p>
								<p>
									{cartTotal.toLocaleString("es-AR", {
										style: "currency",
										currency: "ARS",
									})}
								</p>
							</li>
						</ul>

						<div className="self-center flex flex-col md:flex-row flex-wrap justify-center gap-5">
							<Button
								className="text-md  font-bold text-white border-b-1 border-b-jaguar-600"
								variant="light"
								radius="lg"
								size="md"
								onClick={deleteCart}>
								Eliminar carrito
							</Button>
							<Link href={"/tienda"} legacyBehavior>
								<Button
									className="text-md  font-bold text-white border-b-1 border-b-jaguar-600"
									variant="light"
									radius="lg"
									size="md">
									Seguir comprando
								</Button>
							</Link>
							<Link href={"/checkout"} legacyBehavior>
								<Button
									className="text-md  font-bold text-white bg-white-600 border-2 border-b-jaguar-600 hover:bg-jaguar-600 hover:border-transparent"
									color="default"
									radius="lg"
									size="md">
									Finalizar compra
								</Button>
							</Link>
						</div>
					</div>
				)}
			</section>
		</DefaultLayout>
	)
}

export default CartPage
