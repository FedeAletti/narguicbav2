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
			<section className="w-screen py-10">
				<h2 className="text-3xl text-center mx-auto font-bold">
					Brindando buenos humos desde 2017
				</h2>
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
					<h2 className={`${courage.className} text-3xl text-center`}>
						Nuestro local 🤑
					</h2>
					<MapsIframe height={500} />
				</div>
			</section>
		</DefaultLayout>
	)
}
