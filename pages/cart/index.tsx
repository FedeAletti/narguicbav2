import { CartList } from "@/components/Products/Cart/CartList"
import DefaultLayout from "@/layouts/default"
import { Button, ButtonGroup, Divider } from "@nextui-org/react"
import React from "react"

const CartPage = () => {
	return (
		<DefaultLayout>
			<h1 className="my-10 text-3xl font-bold">Carrito</h1>
			<section className="grid grid-cols-12 gap-8 place-content-center w-[90vw] md:w-[80vw] ">
				<div className="col-span-12 md:col-span-8 bg-transparent text-black rounded-lg h-[50vh]">
					<CartList />
				</div>
				<div className="col-span-12 md:col-span-4 bg-transparent border-2 border-primary-600 rounded-xl h-[55vh] flex flex-col justify-between py-8">
					<ul className="py-4 px-5 space-y-5 ">
						<li className="flex justify-between items-center">
							<p>Carbon</p>
							<p>$100</p>
						</li>
						<li className="flex justify-between items-center">
							<p>Tabaco</p>
							<p>$100</p>
						</li>
						<li className="flex justify-between items-center">
							<p>Tabaco 2</p>
							<p>$100</p>
						</li>
						<Divider />
						<li className="font-bold flex justify-between items-center">
							<p>Total</p>
							<p>$100</p>
						</li>
					</ul>
					<div className="self-center flex flex-col md:flex-row flex-wrap justify-center gap-5">
						<Button
							className="text-md  font-bold text-white border-b-1 border-b-jaguar-600"
							variant="light"
							radius="lg"
							size="md">
							Seguir comprando
						</Button>
						<Button
							className="text-md  font-bold text-white bg-white-600 border-2 border-b-jaguar-600 hover:bg-jaguar-600 hover:border-transparent"
							color="default"
							radius="lg"
							size="md">
							Finalizar compra
						</Button>
					</div>
				</div>
			</section>
		</DefaultLayout>
	)
}

export default CartPage
