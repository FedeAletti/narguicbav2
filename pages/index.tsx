import { BackgroundVideo } from "@/components/ui/BackgroundVideo"
import { CTAGallery } from "@/components/ui/CardsGallery/CTAGallery"
import { InfiniteHero } from "@/components/ui/InfiniteHero"
import { Testimonial } from "@/components/ui/Testimonial/Testimonial"
import { Title } from "@/components/ui/Title"
import { courage } from "@/config/fonts"
import { useProductsContext } from "@/context/ProductsContext"
import DefaultLayout from "@/layouts/default"
import { Button, Divider, Image, Link } from "@nextui-org/react"

const TESTIMONIALS = [
	{
		name: "Juan Pérez",
		stars: 5,
		message: "Excelente atención y gran variedad",
		image: "https://i.pravatar.cc/300",
	},
	{
		name: "Roberto Gomez",
		stars: 5,
		message: "Las mezclas recomendadas son excelentes",
		image: "https://i.pravatar.cc/300",
	},
	{
		name: "Sara Lopez",
		stars: 2,
		message: "Guille se cuelga así que le compré a mi vecino drogadicto",
		image: "https://i.pravatar.cc/300",
	},
	{
		name: "Martincho Ruíz",
		stars: 1,
		message: "Había olor a porro en el showroom",
		image: "https://i.pravatar.cc/300",
	},
	{
		name: "Mauro Lombardo",
		stars: 5,
		message: "Duki aprueba 👍",
		image: "https://i.pravatar.cc/300",
	},
]

export default function IndexPage() {
	return (
		<DefaultLayout>
			<div className="relative -top-24 z-10 border-b-2 border-b-primary-800">
				<BackgroundVideo
					src={`bg-video-${Math.floor(Math.random() * 2) + 1}.mp4`}
				/>
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
							className="neon-button w-full lg:max-w-[80%_!important] mt-14">
							<span>Conocer más de Narguilas</span>
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
				<h2 className={`${courage.className} pb-8 text-3xl text-center`}>
					Lo que dicen nuestros clientes
				</h2>
				<div className="mt-8 max-w-[98vw] md:max-w-[80vw] grid grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] mx-auto gap-3">
					{TESTIMONIALS.map((t, i) => (
						<Testimonial key={i} testimonial={t} />
					))}
				</div>
			</section>
		</DefaultLayout>
	)
}
