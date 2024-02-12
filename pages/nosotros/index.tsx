import { InformativeCard } from "@/components/ui/Card/InformativeCard"
import { TimelineApp } from "@/components/ui/Timeline"
import { courage } from "@/config/fonts"
import DefaultLayout from "@/layouts/default"
import React from "react"

const NosotrosPage = () => {
	return (
		<DefaultLayout>
			<article className="mx-auto w-[90%]">
				<div className="px-5 mt-10">
					<h2 className={`${courage.className} text-3xl my-8`}>
						Sobre nosotros
					</h2>
					<p className="w-[90%] text-xl">
						¡Bienvenidos al maravilloso mundo de las narguilas!{" "}
						{/* VER SI SE PUEDE ANIMAR */}
					</p>
					<div className="my-8 flex flex-col lg:flex-row gap-3">
						<InformativeCard
							title="Objetivos"
							text="Sumergir la mayor cantidad de personas al mundo narguilero.
							Generar un excelente vínculo con el cliente, logrando hacer que
							momentos placenteros sean inolvidables, para ellos y sus
							invitados/amigos."
						/>
						<InformativeCard
							title="Vision"
							text="Ser la empresa de catering de narguilas número 1 en Argentina.
							Para ello, buscamos innovar en el sector con las mejores líneas de
							tabaco, el mejor carbón y variedades de narguilas premium."
						/>
						<InformativeCard
							title="Mision"
							text="Dar un valor agregado único a cada evento, llevando a que cada
							fumador pueda disfrutar con su entorno una sesión de narguila con
							componentes premium, perfectamente armada y con sabores y
							combinaciones únicas."
						/>
					</div>
				</div>
			</article>
			<hr className="max-w-[50%] mx-auto my-10" />
			<section className="min-h-screen py-5 space-y-5 px-3 mx-auto w-[90%]">
				<TimelineApp />
			</section>
		</DefaultLayout>
	)
}

export default NosotrosPage
