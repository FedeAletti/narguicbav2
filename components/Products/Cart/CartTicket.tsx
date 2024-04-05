import { ProductInCart } from "@/types"
import { aplicarDescuento } from "@/utils/prices"
import { Button, Divider } from "@nextui-org/react"
import Link from "next/link"

const Item = ({ product }: { product: ProductInCart }) => {
	return (
		<li className="flex justify-between items-center" key={product.id}>
			<p className="text-sm">
				{product.nombre}{" "}
				<span className="block text-xs">{product.quantity} un.</span>
			</p>
			<p>
				{(
					aplicarDescuento(product.precio, product.descuento) *
					product.quantity!
				).toLocaleString("es-AR", {
					style: "currency",
					currency: "ARS",
				})}
			</p>
		</li>
	)
}
export const CartTicket = ({
	productsInCart,
	cartTotal,
	deleteCart,
}: {
	productsInCart: ProductInCart[]
	cartTotal: number
	deleteCart: () => void
}) => {
	return (
		<div className="col-span-12 md:col-span-4 bg-transparent border-2 border-primary-600 rounded-xl h-[55vh] flex flex-col justify-between py-8">
			<ul className="py-4 px-5 space-y-5 ">
				{productsInCart.map((product: ProductInCart) => (
					<Item key={product.id} product={product} />
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
	)
}
