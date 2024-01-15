/* eslint-disable @next/next/no-img-element */
import React from "react"
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Button,
} from "@nextui-org/react"
import Link from "next/link"
import styles from "./CTAGallery.module.css"
import { ExternalLinkIcon } from "@/components/icons"

export function CTAGallery() {
	return (
		<ul className={`${styles.cards} group`}>
			<Link href={"/tienda"} className={`${styles.card}`}>
				<Image
					src="https://i.ibb.co/vLmpJrn/accesories.jpg"
					className={`${styles.card__image} z-0`}
					alt=""
				/>
				<div className={styles.card__overlay}>
					<div className={styles.card__header}>
						<svg
							className={styles.card__arc}
							xmlns="http://www.w3.org/2000/svg">
							<path />
						</svg>
						<div className="flex justify-between w-full">
							<div>
								<p className="text-tiny text-white uppercase font-bold w-full">
									Conocé nuestros productos
								</p>

								<h4 className="font-bold text-white text-lg uppercase">
									La mayor variedad del país
								</h4>
							</div>
							<div className="self-end bg-white p-3 rounded-full">
								<ExternalLinkIcon className={``} />
							</div>
						</div>
					</div>
					<p className={styles.card__description}>
						Encontrá todos los productos que necesitas para tu narguila, <br />{" "}
						o por qué no, tu nueva narguila 😉
					</p>
				</div>
			</Link>
			<Link href={"/eventos"} className={`${styles.card}`}>
				<Image
					src="https://i.ibb.co/rc2H2gK/event-card-banner.jpg"
					className={`${styles.card__image} z-0`}
					alt=""
				/>
				<div className={styles.card__overlay}>
					<div className={styles.card__header}>
						<svg
							className={styles.card__arc}
							xmlns="http://www.w3.org/2000/svg">
							<path />
						</svg>
						<div className="flex justify-between w-full">
							<div>
								<p className="text-tiny text-white uppercase font-bold w-full">
									Conocé nuestros productos
								</p>

								<h4 className="font-bold text-white text-lg uppercase">
									La mayor variedad del país
								</h4>
							</div>
							<div className="self-end bg-white p-3 rounded-full">
								<ExternalLinkIcon className={``} />
							</div>
						</div>
					</div>
					<p className={styles.card__description}>
						Encontrá todos los productos que necesitas para tu narguila, <br />{" "}
						o por qué no, tu nueva narguila 😉
					</p>
				</div>
			</Link>
			<Link href={"/blog"} className={`${styles.card}`}>
				<Image
					src="https://i.ibb.co/sp7fMW7/community.png"
					className={`${styles.card__image} z-0`}
					alt=""
				/>
				<div className={styles.card__overlay}>
					<div className={styles.card__header}>
						<svg
							className={styles.card__arc}
							xmlns="http://www.w3.org/2000/svg">
							<path />
						</svg>
						<div className="flex justify-between w-full">
							<div>
								<p className="text-tiny text-white uppercase font-bold w-full">
									¡buenos humos!
								</p>

								<h4 className="font-bold text-white text-lg uppercase">
									Participá de la comunidad
								</h4>
							</div>
							<div className="self-end bg-white p-3 rounded-full">
								<ExternalLinkIcon className={``} />
							</div>
						</div>
					</div>
					<p className={styles.card__description}>
						Encontrá todos los productos que necesitas para tu narguila, <br />{" "}
						o por qué no, tu nueva narguila 😉
					</p>
				</div>
			</Link>
		</ul>
	)
}
