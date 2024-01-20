import { InformativeCard } from "@/components/ui/Card/InformativeCard"
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

			<section className="min-h-screen py-5 space-y-5 px-3 mx-auto w-[90%]">
				<h5 className={`${courage.className} text-lg`}>
					Que es una narguila ❓
				</h5>
				<p>
					Narguile es el nombre tradicional de las pipas de agua originalmente
					usadas hace muchos siglos en el sur de Asia y Medio Oriente. Una forma
					social y a menudo compartida de consumir tabaco. Fumar en narguila es
					una costumbre cada vez más popular en el mundo.
				</p>
				<h5 className={`${courage.className} text-lg`}>Como funciona ❓</h5>
				<p>
					Típicamente, los grupos de personas se sientan alrededor de una
					narguila para fumar una mezcla de tabaco triturado, por lo general
					endulzado con sabores frutales o dulces. La narguila, se calienta
					cerca de la parte superior encendiendo uno o varios carbones. El humo
					y el vapor del tabaco quemado burbujean a través de la cámara de agua
					de la narguila y pasan a una o más mangueras por las que los
					consumidores inhalan antes de pasarla a la siguiente persona del
					grupo.
				</p>
			</section>
		</DefaultLayout>
	)
}

export default NosotrosPage
