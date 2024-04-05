import { getOrders } from "@/service/products"
import { Pedido } from "@/types"
import {
	Accordion,
	AccordionItem,
	Avatar,
	Button,
	Chip,
	Image,
} from "@nextui-org/react"
import React, { useEffect, useState } from "react"

const AdminPage = () => {
	const [pedidos, setPedidos] = useState<Pedido[] | undefined>([])

	useEffect(() => {
		getOrders().then((data) => setPedidos(data))
	}, [])
	const defaultContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

	return (
		<div className="min-h-screen w-screen py-10 container mx-auto max-w-[1000px]">
			<h1 className="mx-auto w-[80%] text-3xl text-white font-bold uppercase my-10 border-b-2 py-4 border-white">
				Panel de Pedidos
			</h1>

			<div className="w-[80%] mx-auto px-3 py-5 bg-jaguar-800 rounded-lg">
				<Accordion selectionMode="multiple">
					{pedidos!.map((pedido) => (
						<AccordionItem
							key={pedido.id}
							aria-label={"item" + pedido.id}
							startContent={
								<Avatar
									isBordered
									color="primary"
									radius="lg"
									src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
								/>
							}
							subtitle={pedido.total.toLocaleString("es-AR", {
								style: "currency",
								currency: "ARS",
								maximumFractionDigits: 2,
							})}
							title={`${pedido.comprador.nombre} ${pedido.comprador.apellido}`}>
							<div className="bg-white p-2 rounded text-black px-5">
								<div className="flex justify-between items-center my-5">
									<h3 className="text-xl font-bold">
										{pedido.comprador.nombre} {pedido.comprador.apellido}
									</h3>
									<Chip
										color={pedido.estado === "recibido" ? "success" : "danger"}
										className="w-full">
										{pedido.estado.toUpperCase()}
									</Chip>
								</div>
								<div className="">
									<ul className=" md:border-r md:border-black px-2">
										<li className="border-b border-black">
											<b>Tel. :</b> {pedido.comprador.telefono}
										</li>
										<li className="border-b border-black">
											<b>Email :</b> {pedido.comprador.email}
										</li>
										<li className="border-b border-black">
											<b>DNI :</b> {pedido.comprador.documento}
										</li>
										<li className="border-b border-black">
											<b>Calle y Nro :</b> {pedido.comprador.calle}
										</li>
										<li className="border-b border-black">
											<b>Entrecalles :</b> {pedido.comprador.entrecalles}
										</li>
										<li className="border-b border-black">
											<b>Provincia :</b> {pedido.comprador.provincia}
										</li>
										<li className="border-b border-black">
											<b>Ciudad :</b> {pedido.comprador.ciudad}
										</li>
										<li className="border-b border-black">
											<b>CP :</b> {pedido.comprador.codigoPostal}
										</li>
									</ul>
									<ul className="pt-3 border-t border-black">
										{pedido.productos.map((producto) => (
											<li
												key={producto.id}
												className="border-b border-black flex justify-between py-5">
												<div className="w-[80px]">
													<Image src={producto.imagen} alt={producto.nombre} />
												</div>
												<div>
													<p className="font-semibold">{producto.nombre}</p>
													<p>{producto.marca}</p>
												</div>
												<div className="flex gap-3 items-center">
													<p className="font-semibold">{producto.quantity} x</p>
													<p>
														{producto.precio.toLocaleString("es-AR", {
															style: "currency",
															currency: "ARS",
															maximumFractionDigits: 2,
														})}
													</p>
												</div>
											</li>
										))}

										<li
											className={`${
												pedido.envioAlInterior
													? "border-b border-black flex justify-around py-3"
													: "hidden"
											}`}>
											<div />
											<p className="font-semibold">Envío al Interior: </p>
											<p className="font-semibold">Sí</p>
										</li>
										<li className="border-b border-black flex justify-around py-8">
											<div />
											<p className="font-semibold">Total: </p>
											<p>
												{pedido.total.toLocaleString("es-AR", {
													style: "currency",
													currency: "ARS",
													maximumFractionDigits: 2,
												})}
											</p>
										</li>
									</ul>
								</div>
								<div className="flex gap-3 items-center justify-center py-8">
									<Button>Pedido en proceso</Button>
									<Button>Pedido Entregado o Enviado</Button>
								</div>
							</div>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	)
}

export default AdminPage
