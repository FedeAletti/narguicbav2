import { useCartContext } from "@/context/CartContext"
import DefaultLayout from "@/layouts/default"
import { createOrder } from "@/service/products"
import { ProductInCart } from "@/types"
import { aplicarDescuento } from "@/utils/prices"
import { Button, Divider, Input, Switch, cn } from "@nextui-org/react"
import React, { ChangeEvent, useEffect, useState } from "react"
import Swal from "sweetalert2"

interface Comprador {
	envioAlInterior: boolean
	nombre: string
	apellido: string
	documento: string
	telefono: string
	calle: string
	entrecalles: string
	barrio: string
	email?: string
	ciudad?: string
	provincia?: string
	codigoPostal?: string
}

const CheckoutPage = () => {
	const { cart: productsInCart, deleteCart } = useCartContext()
	const [cartTotal, setCartTotal] = useState(0)
	const [envioInterior, setEnvioInterior] = useState(false)

	const [comprador, setComprador] = useState<any>({
		envioAlInterior: envioInterior,
		nombre: "",
		apellido: "",
		documento: "",
		telefono: "",
		calle: "",
		entrecalles: "",
		barrio: "",
		email: "",
		ciudad: "",
		provincia: "",
		codigoPostal: "",
	})

	const precioEnvío = 2600

	const calcularTotalCarrito = (carrito: ProductInCart[]): number => {
		let total = 0

		carrito.forEach((producto) => {
			if (producto.quantity) {
				total +=
					aplicarDescuento(producto.precio, producto.descuento) *
					producto.quantity
			}
		})

		if (envioInterior) {
			total += precioEnvío
		}

		return total
	}

	useEffect(() => {
		setCartTotal(calcularTotalCarrito(productsInCart))
	}, [productsInCart])

	const generarMensajeWhatsApp = (carrito: ProductInCart[]): string => {
		let mensaje = `Hola soy ${comprador.nombre} ${comprador.apellido}, realicé un pedido por el sitio web:\n\n`

		carrito.forEach((producto) => {
			if (producto.quantity) {
				mensaje += `- *${producto.nombre}* - $${
					aplicarDescuento(producto.precio, producto.descuento) *
					producto.quantity
				}\n`
			}
		})

		const totalCarrito = calcularTotalCarrito(carrito)
		if (envioInterior) {
			mensaje += `\*Envío al interior: $${precioEnvío} \n`
		}
		mensaje += `\n*TOTAL: $${totalCarrito}*\n`

		if (envioInterior) {
			mensaje += `\nSoy de ${comprador.ciudad} - ${comprador.provincia}, CP: ${comprador.codigoPostal} \n`
		} else {
			mensaje +=
				"\nMi dirección es " +
				comprador.calle +
				"\n-Barrio: " +
				comprador.barrio +
				"\n-Entrecalles: " +
				comprador.entrecalles +
				"\n"
		}
		// mensaje += "\n  \n"

		mensaje += "\n_Espero tu respuesta para confirmar mi pedido_"

		// Reemplazar espacios y saltos de línea con sus respectivos códigos en URL
		const mensajeParaWhatsApp = encodeURIComponent(mensaje)

		return mensajeParaWhatsApp
	}

	const handleCheckout = async () => {
		if (
			comprador.nombre === "" ||
			comprador.apellido === "" ||
			comprador.barrio === "" ||
			comprador.calle === "" ||
			comprador.entrecalles === "" ||
			comprador.telefono === "" ||
			comprador.documento === ""
		) {
			if (envioInterior) {
				if (
					comprador.email === "" ||
					comprador.ciudad === "" ||
					comprador.provincia === "" ||
					comprador.codigoPostal === ""
				) {
					Swal.fire({
						icon: "error",
						title: "Llene todos los campos!",
						text: "Al parecer hay campos vacíos, por favor revisar.",
					})
					return
				}
			}
			alert(
				"Por favor, complete todos los campos antes de realizar el checkout."
			)
			return
		}

		const urlBase =
			// "https://wa.me/+5493513705773" +
			"https://wa.me/+5493424388638" +
			"?text=" +
			generarMensajeWhatsApp(productsInCart)

		if (productsInCart.length === 0) {
			Swal.fire({
				icon: "error",
				title: "No hay productos en el carrito!",
				text: "Por favor, agregue productos antes de realizar el checkout.",
			})
			return
		}
		await createOrder(comprador, productsInCart, cartTotal)
		window.open(urlBase, "_blank")
	}

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target

		setComprador((prevComprador: any) => ({
			...prevComprador,
			[name]: value,
		}))
	}

	const handleCheckboxChange = () => {
		setEnvioInterior(!envioInterior)
		setComprador((prevComprador: any) => ({
			...prevComprador,
			envioAlInterior: !envioInterior,
		}))
	}

	return (
		<DefaultLayout>
			<div className="grid grid-cols-12 gap-4 w-[90vw] md:w-[80vw] min-h-screen my-10">
				<form className="col-span-12 md:col-span-7 px-5 space-y-5 items-center">
					<Switch
						isSelected={envioInterior}
						onClick={handleCheckboxChange}
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
								<Input
									type="text"
									label="Nombre"
									name="nombre"
									onChange={handleInputChange}
								/>
								<Input
									type="text"
									label="Apellido"
									name="apellido"
									onChange={handleInputChange}
								/>
							</div>
							<Input
								type="email"
								label="Email"
								name="email"
								onChange={handleInputChange}
							/>
							<div className="flex gap-4">
								<Input
									type="number"
									label="Documento"
									name="documento"
									onChange={handleInputChange}
								/>
								<Input
									type="text"
									label="Teléfono"
									name="telefono"
									onChange={handleInputChange}
								/>
							</div>
							<div className="flex gap-4">
								<Input
									type="text"
									label="Ciudad"
									name="ciudad"
									onChange={handleInputChange}
								/>
								<Input
									type="text"
									label="Código postal"
									name="codigoPostal"
									onChange={handleInputChange}
								/>
							</div>
							<Input
								type="text"
								label="Provincia"
								name="provincia"
								onChange={handleInputChange}
							/>
							<div className="flex gap-4">
								<Input
									type="text"
									label="Calle y Número"
									name="calle"
									onChange={handleInputChange}
								/>
								<Input
									type="text"
									label="Entre calles"
									name="entrecalles"
									onChange={handleInputChange}
								/>
							</div>
							<Input
								type="text"
								label="Barrio"
								name="barrio"
								onChange={handleInputChange}
							/>
						</>
					) : (
						<>
							<div className="flex gap-4">
								<Input
									type="text"
									label="Nombre"
									name="nombre"
									onChange={handleInputChange}
								/>
								<Input
									type="text"
									label="Apellido"
									name="apellido"
									onChange={handleInputChange}
								/>
							</div>
							<div className="flex gap-4">
								<Input
									type="number"
									label="Documento"
									name="documento"
									onChange={handleInputChange}
								/>
								<Input
									type="text"
									label="Teléfono"
									name="telefono"
									onChange={handleInputChange}
								/>
							</div>
							<div className="flex gap-4">
								<Input
									type="text"
									label="Calle"
									name="calle"
									onChange={handleInputChange}
								/>
								<Input
									type="text"
									label="Entre calles"
									name="entrecalles"
									onChange={handleInputChange}
								/>
							</div>
							<Input
								type="text"
								label="Barrio"
								name="barrio"
								onChange={handleInputChange}
							/>
						</>
					)}
				</form>
				<div className="col-span-12 md:col-span-4 bg-transparent border-2 border-primary-600 w-full rounded-xl h-[55vh] flex flex-col justify-between py-8">
					<ul className="py-4 px-5 space-y-5 ">
						{productsInCart.map((product: ProductInCart) => (
							<li
								className="flex justify-between items-center"
								key={product.id}>
								<p>{product.nombre}</p>
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
						))}
						<Divider />
						{envioInterior && (
							<li className="flex justify-between items-center">
								<p>Envío</p>
								<p>
									{precioEnvío.toLocaleString("es-AR", {
										style: "currency",
										currency: "ARS",
									})}
								</p>
							</li>
						)}
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
