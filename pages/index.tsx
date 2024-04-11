import { BackgroundVideo } from "@/components/ui/BackgroundVideo"
import { CTAGallery } from "@/components/ui/CardsGallery/CTAGallery"
import { InfiniteHero } from "@/components/ui/InfiniteHero"
import { MapsIframe } from "@/components/ui/MapsIframe"
import { Testimonial } from "@/components/ui/Testimonial/Testimonial"
import { Title } from "@/components/ui/Title"
import { courage, manrope } from "@/config/fonts"
import { useProductsContext } from "@/context/ProductsContext"
import DefaultLayout from "@/layouts/default"
import { Button, Divider, Image, Link } from "@nextui-org/react"
import { useState } from "react"

export default function IndexPage() {
	const [videoNum, setVideoNum] = useState(Math.floor(Math.random() * 2) + 1)

	return (
		<DefaultLayout>
			<div className="relative -top-24 z-10 border-b-2 border-b-primary-800">
				<BackgroundVideo src={`bg-video-${videoNum}.mp4`} />
				<div className="grid min-h-screen items-end justify-center overflow-x-hidden pb-20">
					<InfiniteHero />
				</div>
			</div>
			<section className="w-screen">
				<div>
					<h2
						className={`${courage.className} max-w-sm relative text-3xl text-center border-t border-b border-white uppercase mx-auto font-bold py-4`}>
						Buenos humos{" "}
						<span
							className={`${manrope.className} absolute font-semibold -bottom-2 bg-primary px-5 left-1/2 -translate-x-1/2 text-sm`}>
							since 2017
						</span>
					</h2>
				</div>
				<div className="max-w-[98vw] md:max-w-[80vw]  mx-auto">
					<CTAGallery />
				</div>
			</section>
			<section className="w-screen py-10">
				<h2 className={`${courage.className} pb-8 text-3xl text-center`}>
					Que es una narguila
				</h2>
				<div className="mt-8 max-w-[98vw] md:max-w-[80vw] px-5 mx-auto grid grid-cols-12 gap-5">
					<div className="col-span-12 lg:col-span-6 text-lg">
						<p>
							<b>Narguile</b> es el nombre tradicional de las pipas de agua
							originalmente usadas hace muchos siglos en el sur de Asia y Medio
							Oriente.
						</p>
						<Divider className="my-4" />
						<p>
							Una forma social y a menudo compartida de consumir tabaco cada vez
							más popular alrededor del mundo.
						</p>
						<Link
							href="/nosotros"
							className="neon-button w-full lg:max-w-[80%_!important] mt-14 hover:opacity-100">
							<span className={manrope.className}>
								Conocer más de Narguilas
							</span>
						</Link>
					</div>
					<div className="group col-span-12 lg:col-span-6 overflow-hidden rounded-l-3xl h-[50vh]">
						<Image
							src="/assets/mujer-fumando1.jpg"
							className="object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-125"
							alt="mujer fumando"
						/>
					</div>
				</div>
			</section>
			<section className="w-screen py-10">
				<div className="container mx-auto space-y-5">
					<h2 className={`${courage.className} text-3xl text-center pb-8`}>
						Nuestro Espacio en Córdoba Capital
					</h2>
					<div className="grid grid-cols-12 gap-5 px-5">
						<div className="col-span-12 lg:col-span-6 space-y-5 text-justify">
							<p>
								¡Bienvenidos a nuestro local en Córdoba Capital! Si te apasionan
								las narguilas, te invitamos a descubrir un rincón único donde
								podrás disfrutar de una amplia selección de sabores, relajarte
								con amigos y sumergirte en la cultura del narguile. <br />
							</p>
							<p>
								Vení a conocer nuestro local, donde la buena compañía y las
								aromáticas esencias se fusionan para crear momentos
								inolvidables. ¡Te esperamos con los brazos abiertos!
							</p>
							<a
								href="https://maps.app.goo.gl/Q6QzjZaPPdaTut1XA"
								target="_blank"
								className="font-bold block border border-white p-3 rounded-lg text-white hover:underline underline-offset-2">
								Rafael Nuñez 4684 | Local 3 <br /> | Barrio Cerro de las Rosas,
								Zona Norte.
							</a>
						</div>
						<div className="col-span-12 lg:col-span-6">
							<MapsIframe height={500} />
						</div>{" "}
					</div>
				</div>
			</section>
		</DefaultLayout>
	)
}
