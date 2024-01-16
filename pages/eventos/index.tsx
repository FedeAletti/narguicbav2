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
						<h2 className={`${courage.className} text-3xl my-8`}>
							Eventos
						</h2>
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
