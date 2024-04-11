import { Image, Link } from "@nextui-org/react"
import React from "react"
import { MapsIframe } from "./MapsIframe"
import { PlusIcon } from "../icons"

const mediosPago = [
	"visa",
	"mastercard",
	"amex",
	"mercadopago",
	"tarjeta-naranja",
	"transferencia",
	"efectivo",
]

export const Footer = () => {
	return (
		<footer className="w-full mt-10 z-50 border-t-1 border-jaguar-700">
			<article className="grid grid-cols-12 place-content-center gap-8 px-5 py-6">
				<ul className="mx-0 md:mx-auto col-span-12 md:col-span-4">
					<li>
						<p className="text-lg font-bold mb-1">Contactanos</p>
					</li>
					<li className="mb-3">
						<a
							href="mailto:narguicba@gmail.com"
							className="text-white underline underline-offset-2 text-sm font-medium text-center w-full py-5">
							narguicba@gmail.com
						</a>
					</li>
					<li className="mb-3">
						<a
							href="https://wa.me/+5493513153203"
							className="text-white underline underline-offset-2 text-sm font-medium text-center w-full py-5">
							NarguiCBA - WhatsApp
						</a>
					</li>
					<li className="mb-3">
						<a
							href="https://wa.me/+5493513705773"
							className="text-white underline underline-offset-2 text-sm font-medium text-center w-full py-5">
							Guille - WhatsApp
						</a>
					</li>
					<li className="mb-1 mt-5">
						<p className="text-lg font-bold">Navegación</p>
					</li>
					<li>
						<Link href="/tienda" className="text-white text-sm mb-2">
							Tienda
						</Link>
					</li>
					<li>
						<Link href="/nosotros" className="text-white text-sm mb-2">
							Quienes somos?
						</Link>
					</li>
					<li>
						<Link href="/eventos" className="text-white text-sm">
							Eventos
						</Link>
					</li>
					{/* <li>
						<Link href="/blog" className="text-white">
							Nuestra comunidad
						</Link>
					</li> */}
				</ul>
				<div className="min-h-[20vh] col-span-12 md:col-span-4 mx-auto">
					<p className="text-lg font-bold mb-4">Métodos de Pago</p>
					<div className="flex flex-wrap gap-5">
						{mediosPago.map((medio) => (
							<Image
								key={medio}
								src={`/metodospago/${medio}.png`}
								className="w-20"
								alt={medio}
							/>
						))}
						<div className="aspect-square w-12 rounded-full grid place-content-center bg-white">
							<PlusIcon className="" />
						</div>
					</div>
					<p className="text-lg font-bold my-4">Forma de Envío</p>
					<Image
						src="/logo-andreani.svg"
						className="w-24 bg-white"
						alt="envio"
					/>
				</div>
				<div className="mx-0 md:mx-auto col-span-12 md:col-span-4 space-y-3">
					<MapsIframe />
					<p>
						<span className="font-bold">Rafael Nuñez 4684 | Local 3</span>{" "}
						<br /> Barrio Cerro de las Rosas, Zona Norte.
					</p>
				</div>
			</article>

			<h6 className="bg-black text-center w-full py-5">
				© 2024 - Narguilas Córdoba{" "}
			</h6>
			<div className="bg-black text-center w-full py-1 text-xs font-semibold">
				Developed by <br />
				<a href="https://github.com/FedeAletti" target="_blank">
					Federico Aletti
				</a>{" "}
				&{" "}
				<a href="https://github.com/Lucioalconchel" target="_blank">
					Lucio Alconchel
				</a>
			</div>
		</footer>
	)
}
