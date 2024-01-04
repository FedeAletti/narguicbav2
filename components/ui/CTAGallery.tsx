import React from "react"
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Button,
} from "@nextui-org/react"

export function CTAGallery() {
	return (
		<div className="max-w-screen gap-2 grid grid-cols-12 grid-rows-2 px-8 my-10">
			<Card
				isFooterBlurred
				className="w-full h-[400px] col-span-12 sm:col-span-5 bg-[url('https://i.ibb.co/vLmpJrn/accesories.jpg')] bg-cover bg-[50%_40%]">
				{/* <Image
					removeWrapper
					alt="Card example background"
					className="z-0 w-full h-full scale-125 -translate-y-6 object-cover object-center"
					src="https://i.ibb.co/vLmpJrn/accesories.jpg"
				/> */}
				<CardFooter className="absolute flex-col md:flex-row bg-black/40 bottom-0 border-t-1 border-default-600 dark:border-default-100 z-10 justify-between">
					<div>
						<p className="text-tiny text-white/60 uppercase font-bold">
							Conocé nuestros productos
						</p>
						<h4 className="font-semibold text-xl uppercase">
							La mayor variedad del país
						</h4>
					</div>
					<Button className="text-tiny self-end" color="primary" radius="full" size="sm">
						Visitar la tienda
					</Button>
				</CardFooter>
			</Card>
			<Card
				isFooterBlurred
				className="w-full h-[400px] col-span-12 sm:col-span-7 bg-[url('https://i.ibb.co/rc2H2gK/event-card-banner.jpg')] bg-cover bg-[50%_35%]">
				{/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
					<p className="text-tiny text-white/60 uppercase font-bold">
						Your day your way
					</p>
					<h4 className="text-white/90 font-medium text-xl">
						Your checklist for better sleep
					</h4>
				</CardHeader> */}
				{/* <Image
					removeWrapper
					alt="Relaxing app background"
					className="z-0 w-full h-full object-cover"
					src="https://i.ibb.co/rc2H2gK/event-card-banner.jpg"
				/> */}
				<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
					<div className="flex flex-grow gap-2 items-center">
						<div className="flex flex-col">
							<p className="text-tiny text-white/60 uppercase font-bold">
								SERVICIO PREMIUM
							</p>
							<h4 className="font-semibold text-xl uppercase">
								ESTAMOS EN TUS CELEBRACIONES
							</h4>
						</div>
					</div>
					<Button radius="full" size="sm">
						Ir eventos
					</Button>
				</CardFooter>
			</Card>
			<Card isFooterBlurred className="w-full h-[400px] col-span-12 bg-[url('https://i.ibb.co/sp7fMW7/community.png')] bg-cover bg-[50%_20%]">
				{/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
					<p className="text-tiny text-white/60 uppercase font-bold">
						Your day your way
					</p>
					<h4 className="text-white/90 font-medium text-xl">
						Your checklist for better sleep
					</h4>
				</CardHeader> */}
				{/* <Image
					removeWrapper
					alt="Relaxing app background"
					className="z-0 w-full h-full object-cover object-top"
					src="https://i.ibb.co/sp7fMW7/community.png"
				/> */}
				<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
					<div className="flex flex-grow gap-2 items-center">
						<div className="flex flex-col">
							<p className="text-tiny text-white/60 uppercase font-bold">
								¡buenos humos!
							</p>
							<h4 className=" font-semibold text-xl uppercase ">
								Participá de la comunidad
							</h4>
						</div>
					</div>
					<Button radius="full" size="sm">
						Ir al Blog
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
