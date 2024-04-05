import { Image, Link } from "@nextui-org/react"
import React from "react"
import { MapsIframe } from "./MapsIframe"

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
			<article className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] place-content-center gap-8 px-5 py-6">
				<ul className="mx-0 md:mx-auto">
					<li>
						<p className="text-lg font-bold mb-1">Contactanos</p>
					</li>
					<li className="mb-3">
						<a
							href="mailto:narguicba@gmail.com"
							className="text-white underline underline-offset-2  font-medium text-center w-full py-5">
							narguicba@gmail.com
						</a>
					</li>
					<li className="mb-1">
						<p className="text-lg font-bold">Navegación</p>
					</li>
					<li>
						<Link href="/tienda" className="text-white">
							Tienda
						</Link>
					</li>
					<li>
						<Link href="/nosotros" className="text-white">
							Quienes somos?
						</Link>
					</li>
					<li>
						<Link href="/eventos" className="text-white">
							Eventos
						</Link>
					</li>
					{/* <li>
						<Link href="/blog" className="text-white">
							Nuestra comunidad
						</Link>
					</li> */}
				</ul>
				<div className="min-h-[20vh]  mx-auto">
					<p className="text-lg font-bold mb-4">Medios de Pago</p>
					<div className="flex flex-wrap gap-5">
						{mediosPago.map((medio) => (
							<Image
								key={medio}
								src={`/metodospago/${medio}.png`}
								className="w-24 "
								alt={medio}
							/>
						))}
					</div>
				</div>
				<div className="mx-0 md:mx-auto space-y-3">
					<MapsIframe />
					<p>Rafael Nuñez 4684 | Local 3</p>
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
