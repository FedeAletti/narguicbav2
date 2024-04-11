/* eslint-disable @next/next/no-img-element */
import DefaultLayout from "@/layouts/default"
import React, { useEffect, useState } from "react"
import styles from "./eventos.module.css"
import { courage } from "@/config/fonts"
import { Image } from "@nextui-org/react"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { useWindowSize } from "@/utils/window"
import { Card, Carousel } from "flowbite-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const EventosPage = () => {
	const [selectedId, setSelectedId] = useState(null)
	const [isMobile, setIsMobile] = useState(false)
	const deviceSize = useWindowSize()

	useEffect(() => {
		setIsMobile(deviceSize.width! < 768)
	}, [deviceSize])

	return (
		<DefaultLayout>
			<article className="mx-auto w-[90%]">
				<div className="grid grid-cols-12 gap-6 px-5 mt-10">
					<div className="col-span-12 xl:col-span-6 space-y-5 lg:w-[80%]">
						<h5 className={`${courage.className} text-lg`}>Nuestro servicio</h5>
						<p>
							<b className="bg-orange-600">
								Nargui CBA te ofrece el mejor servicio personalizado de catering
								de narguilas
							</b>{" "}
							para casamientos, reuniones, convenciones, fiestas privadas y
							demás eventos para que acompañes con unas narguilas y llenes de
							buen humo tu evento para hacerlo diferente. <br />
							Disponemos de distintos tipos de servicios con la posibilidad de
							elegir entre el número y tipo de narguilas, así como la cantidad y
							calidad de los sabores que disfrutarás en el evento.
						</p>
						<p>
							Nuestro personal está ampliamente calificado y especializado en el
							sector con una larga experiencia para que no tengas que
							preocuparte de que nada salga mal.{" "}
							<b className="bg-orange-600 px-1">
								Creemos que una buena narguila tiene que estar preparada con los
								mejores productos
							</b>{" "}
							por ello nunca escatimamos en tener lo mejor del mercado, la
							calidad y novedad es nuestro punto diferenciador para que tu
							evento sea diferencial y que se convierta en una experiencia
							única.
						</p>

						<a
							href="https://wa.link/uvtlgm"
							className="neon-button w-full lg:max-w-[90%_!important] mt-14 hover:opacity-100">
							<span className="text-wrap">
								Quiero contratar a Nargui CBA para mi evento
							</span>
						</a>
					</div>
					<motion.div className="mx-auto col-span-12 xl:col-span-6 relative py-10">
						<Image
							as={motion.img}
							animate={{
								y: [-5, 5, -5],
								transition: {
									duration: 3.9,
									ease: "linear",
									repeat: Infinity,
									repeatDelay: 0,
									delay: 2,
								},
							}}
							src="/eventos/1.jpeg"
							alt="Imagen en evento"
							width={900}
							height={500}
							className="absolute -top-10 -left-[70%]"
						/>
						<Image
							as={motion.img}
							animate={{
								y: [-5, 5, -5],
								transition: {
									duration: 3.3,
									ease: "linear",
									repeat: Infinity,
									repeatDelay: 0,
									delay: 1,
								},
							}}
							src="/eventos/2.jpeg"
							alt="Imagen en evento"
							width={600}
							height={600}
							className="absolute -top-10 -right-56 aspect-square rounded-full"
						/>
						<Image
							as={motion.img}
							animate={{
								y: [-5, 5, -5],
								transition: {
									duration: 2.5,
									ease: "linear",
									repeat: Infinity,
									repeatDelay: 0,
									delay: 0,
								},
							}}
							src="/eventos/10.jpeg"
							alt="Imagen en evento"
							width={300}
							height={300}
						/>
					</motion.div>
				</div>
			</article>

			<div className="w-screen">
				<h3 className={`text-center my-20 text-2xl ${courage.className}`}>
					Participamos de eventos en estos lugares 👇🏻
				</h3>
				<div className={styles.marquee}>
					<ul className={styles.marquee__content}>
						{Array.from({ length: 14 }).map((_, i) => (
							<li key={i} className={styles.marquee__item}>
								<Image
									className="w-full min-w-500px object-contain object-center rounded-full"
									src={`/eventos/logos/${i + 1}.jpeg`}
									alt="Imagen en evento"
									width={100}
									height={100}
								/>
							</li>
						))}
						{Array.from({ length: 14 }).map((_, i) => (
							<li key={i} className={styles.marquee__item}>
								<Image
									className="w-full h-[150px] object-contain object-center rounded-full"
									src={`/eventos/logos/${i + 1}.jpeg`}
									alt="Imagen en evento"
									width={100}
									height={100}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="h-[70vh] lg:h-[80vh] my-10 w-[90vw] mx-auto md:px-0">
				{/* sm:h-64 xl:h-80 2xl:h-96  */}
				<Carousel
					pauseOnHover
					indicators={false}
					leftControl={
						<button className="absolute top-1/2 left-0 -translate-y-1/2">
							<ArrowLeft size={40} />
						</button>
					}
					rightControl={
						<button className="absolute top-1/2 right-0 -translate-y-1/2">
							<ArrowRight size={40} />
						</button>
					}>
					{Array.from({ length: 15 }).map((_, i) => (
						<img
							key={i}
							className="w-full h-full object-contain object-center rounded-lg"
							src={`/eventos/${i + 1}.jpeg`}
							alt="Imagen en evento"
						/>
					))}
				</Carousel>
			</div>

			<section className="max-w-[98vw] md:max-w-[80vw] min-h-screen py-5 mx-auto">
				<div>
					<article className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] place-content-center gap-5">
						{Array.from({ length: 15 }).map((_, i) => (
							<motion.div key={i}>
								<img
									className="w-full h-full object-cover object-center rounded-lg"
									src={`/eventos/${i + 1}.jpeg`}
									alt="Imagen en evento"
								/>
							</motion.div>
						))}
					</article>
				</div>
			</section>
		</DefaultLayout>
	)
}

export default EventosPage
