import { useCartContext } from "@/context/CartContext"
import DefaultLayout from "@/layouts/default"
import { ProductInCard } from "@/types"
import { Button, Divider, Input, Switch, cn } from "@nextui-org/react"
import React, { useEffect, useState } from "react"

const CheckoutPage = () => {
	const { cart: productsInCart, deleteCart } = useCartContext()
	const [cartTotal, setCartTotal] = useState(0)
	const [envioInterior, setEnvioInterior] = useState(false)

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

	const calcularTotalCarrito = (carrito: ProductInCard[]): number => {
		let total = 0

		carrito.forEach((producto) => {
			if (producto.quantity) {
				total += producto.price * producto.quantity
			}
		})

		return total
	}

	const generarMensajeWhatsApp = (
		nombreCliente: string,
        direccion: string,
		carrito: ProductInCard[]
	): string => {
		let mensaje = `Hola soy ${nombreCliente}, realicé un pedido por el sitio web:\n\n`

		carrito.forEach((producto) => {
			if (producto.quantity) {
				mensaje += `- *${producto.title}* - $${
					producto.price * producto.quantity
				}\n`
			}
		})

		const totalCarrito = calcularTotalCarrito(carrito)
		mensaje += `\n*TOTAL: $${totalCarrito}*\n`

        mensaje += "\nMi dirección es " + direccion + "\n"

        // mensaje += "\n  \n"

        mensaje += "\n_Espero tu respuesta para confirmar mi pedido_"

		// Reemplazar espacios y saltos de línea con sus respectivos códigos en URL
		const mensajeParaWhatsApp = encodeURIComponent(mensaje)

		return mensajeParaWhatsApp
	}

	const handleCheckout = () => {
		const urlBase =
			"https://wa.me/+5493513705773" +
			"?text=" +
			generarMensajeWhatsApp("Pepito", "Soldado Ruiz 2657 - Barrio San Martín", productsInCart)
		
        window.open(urlBase, "_blank")
	}

	return (
		<DefaultLayout>
			<div className="grid grid-cols-12 gap-4 w-[90vw] md:w-[80vw] min-h-screen my-10">
				<form className="col-span-12 md:col-span-7 px-5 space-y-5 items-center">
					<Switch
						isSelected={envioInterior}
						onClick={() => setEnvioInterior(!envioInterior)}
						classNames={{
							base: cn(
								"inline-flex flex-row-reverse w-full mx-auto max-w-md bg-content1 hover:bg-content2 items-center",
								"justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
								"data-[selected=true]:border-primary"
							),
							wrapper: cn(
								"p-0 h-4 overflow-visible",
								"group-data-[selected]:bg-green-500"
							),
							thumb: cn(
								"w-6 h-6 border-2 shadow-lg",
								"group-data-[hover=true]:border-primary",
								//selected
								"group-data-[selected=true]:ml-6",
								// pressed
								"group-data-[pressed=true]:w-7",
								"group-data-[selected]:group-data-[pressed]:ml-4"
							),
						}}>
						<div className="flex flex-col gap-1">
							<p className="text-">Envío al interior</p>
							<p className="text-tiny text-default-400">
								Necesito que me lo envíen fuera de Córdoba.
							</p>
						</div>
					</Switch>
					{envioInterior ? (
						<>
							<div className="flex gap-4">
								<Input type="text" label="Nombre" />
								<Input type="text" label="Apellido" />
							</div>
							<Input type="email" label="Email" />
							<div className="flex gap-4">
								<Input type="number" label="Documento" />
								<Input type="text" label="Teléfono" />
							</div>
							<div className="flex gap-4">
								<Input type="text" label="Ciudad" />
								<Input type="text" label="Código postal" />
							</div>
							<div className="flex gap-4">
								<Input type="text" label="Calle" />
								<Input type="text" label="Entre calles" />
							</div>
							<Input type="text" label="Barrio" />
						</>
					) : (
						<>
							<div className="flex gap-4">
								<Input type="text" label="Nombre" />
								<Input type="text" label="Apellido" />
							</div>
							<div className="flex gap-4">
								<Input type="number" label="Documento" />
								<Input type="text" label="Teléfono" />
							</div>
							<div className="flex gap-4">
								<Input type="text" label="Calle" />
								<Input type="text" label="Entre calles" />
							</div>
							<Input type="text" label="Barrio" />
						</>
					)}
				</form>
				<div className="col-span-12 md:col-span-4 bg-transparent border-2 border-primary-600 w-full rounded-xl h-[55vh] flex flex-col justify-between py-8">
					<ul className="py-4 px-5 space-y-5 ">
						{productsInCart.map((product: ProductInCard) => (
							<li
								className="flex justify-between items-center"
								key={product.id}>
								<p>{product.title}</p>
								<p>
									{(product.price * product.quantity!).toLocaleString("es-AR", {
										style: "currency",
										currency: "ARS",
									})}
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
					<div className="px-4">
						<Button
							className="text-md w-full font-bold text-white bg-white-600 border-2 border-b-jaguar-600 hover:bg-jaguar-600 hover:border-transparent"
							color="default"
							radius="lg"
							size="md"
							onClick={() => handleCheckout()}>
							Finalizar compra
						</Button>
					</div>
				</div>
			</div>
		</DefaultLayout>
	)
}

export default CheckoutPage

/*

Nombre 
Apellido 
Dni 
Teléfono 
Cuidad 
Codigo postal
Calle 
Entre calles 
Barrio 
Mail
*/
