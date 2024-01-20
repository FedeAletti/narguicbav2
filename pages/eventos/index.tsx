/* eslint-disable @next/next/no-img-element */
import DefaultLayout from "@/layouts/default"
import React, { useEffect, useState } from "react"
import styles from "./eventos.module.css"
import { courage } from "@/config/fonts"
import { Image } from "@nextui-org/react"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { useWindowSize } from "@/utils/window"

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
					<div className="col-span-12 xl:col-span-6 ">
						<h2 className={`${courage.className} text-3xl my-8`}>Eventos</h2>
						<p className="w-[90%] text-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							impedit facilis voluptates recusandae, sit illo vel sed, vitae,
							magni itaque assumenda alias ut pariatur sequi corporis
							exercitationem libero optio. Reprehenderit! <br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							impedit facilis voluptates recusandae, sit illo vel sed, vitae,
							magni itaque assumenda alias ut pariatur sequi corporis
							exercitationem libero optio. Reprehenderit!
						</p>
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
				<div className="space-y-3 my-5">
					<h5 className={`${courage.className} text-lg`}>Nuestro servicio</h5>
					<p>
						<b className="bg-orange-600 px-1">
							Nargui CBA te ofrece el mejor servicio personalizado de catering
							de narguilas
						</b>{" "}
						para casamientos, reuniones, convenciones, fiestas privadas y demás
						eventos para que acompañes con unas narguilas y llenes de buen humo
						tu evento para hacerlo diferente. <br />
						Disponemos de distintos tipos de servicios con la posibilidad de
						elegir entre el número y tipo de narguilas, así como la cantidad y
						calidad de los sabores que disfrutarás en el evento.
					</p>
					<p>
						Nuestro personal está ampliamente calificado y especializado en el
						sector con una larga experiencia para que no tengas que preocuparte
						de que nada salga mal.{" "}
						<b className="bg-orange-600 px-1">
							Creemos que una buena narguila tiene que estar preparada con los
							mejores productos
						</b>{" "}
						por ello nunca escatimamos en tener lo mejor del mercado, la calidad
						y novedad es nuestro punto diferenciador para que tu evento sea
						diferencial y que se convierta en una experiencia única.
					</p>
					<a
						href="https://wa.link/uvtlgm"
						className="inline-flex	w-full h-12 animate-background-shine items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
						Quiero contratar a Nargui CBA para mi evento
					</a>
				</div>
			</article>

			{selectedId && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="absolute inset-0 bg-black/75 z-40 h-[200vh] w-sceen blur"
				/>
			)}
			<AnimatePresence mode="popLayout" presenceAffectsLayout initial={false}>
				{selectedId && (
					<>
						<motion.div
							layoutId={selectedId}
							key={selectedId}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedId(null)}
							className="absolute z-50 top-48 right-[10vw] w-[60vw] h-[20vh]">
							<Image
								className="object-cover object-center rounded-xl  scale-80"
								src={`/eventos/${selectedId}.jpeg`}
								alt="Imagen en evento"
							/>
						</motion.div>
					</>
				)}
			</AnimatePresence>

			<section className="min-h-screen py-5 px-3 mx-auto">
				<article className={styles.grid_gallery}>
					{Array.from({ length: 14 }).map((_, i) => (
						<motion.div
							key={i}
							className={styles.grid_gallery__item}
							layoutId={`${i + 1}`}
							onClick={() => {
								if (!isMobile) {
									setSelectedId(`${i + 1}` as any)
								} else null
							}}>
							<img
								className={styles.grid_gallery__image}
								src={`/eventos/${i + 1}.jpeg`}
								alt="Imagen en evento"
							/>
						</motion.div>
					))}
				</article>
			</section>
		</DefaultLayout>
	)
}

export default EventosPage
