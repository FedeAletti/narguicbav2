"use client"

import { Accordion, AccordionItem } from "@nextui-org/react"
import { Button, Timeline } from "flowbite-react"
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi"

export function TimelineApp() {
	return (
		<Timeline>
			<Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>2024</Timeline.Time>
					<Timeline.Title>¡Se acercan tiempos emocionantes!</Timeline.Title>
					<Timeline.Body>
						<p className="text-pretty transition-all duration-200 text-black/50 hover:text-black/70 bg-white px-4 py-5 rounded-lg mt-4">
							¡Se acercan tiempos emocionantes y todo esto sería imposible sin
							ustedes! <br />
							Desde el principio, hemos contado con su apoyo incondicional, es
							lo que nos impulsa a seguir innovando y ofreciendo lo mejor.{" "}
							<br /> En Nargui CBA, todos estamos entregando nuestro corazón
							para elevar nuestra pasión a nuevas alturas, convirtiendo los
							sueños de nuestra comunidad narguilera en realidad.{" "}
							<b>Este año promete ser inolvidable.</b> Prepárense para un 2024
							con muchas sorpresas! ¡Vamos a hacer que este año sea para un
							antes y despues de argentina a nivel narguilero, creciendo y
							disfrutando juntos cada paso del camino!
						</p>
					</Timeline.Body>
				</Timeline.Content>
			</Timeline.Item>
			<Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>2023</Timeline.Time>
					<Timeline.Title>
						Un año de crecimiento, diversificación y gratitud
					</Timeline.Title>
					<Timeline.Body>
						<article className="space-y-4 text-pretty transition-all duration-200 text-black/50 hover:text-black/70 bg-white px-4 py-5 rounded-lg mt-4">
							<p>
								El año 2023 comenzó con una clara demostración de aprecio y
								gratitud hacia la comunidad que ha apoyado al proyecto desde sus
								inicios. Organizar un sorteo masivo con 10 ganadores fue una
								forma de devolver algo a los clientes fieles, reconociendo su
								papel crucial en el éxito del proyecto.
							</p>
							<p>
								Narguilas Córdoba dio un paso significativo hacia la
								diversificación de sus servicios con el lanzamiento de
								Narguicbaevents, una nueva división enfocada en la provisión de
								servicios de narguila para eventos especiales. Este desarrollo
								vino como respuesta a la creciente demanda de experiencias
								únicas en celebraciones, marcando la entrada oficial del
								proyecto en el mercado de eventos.
							</p>
							<p>
								La iniciativa probó ser un éxito rotundo, con más de 10
								contrataciones para casamientos a lo largo del año. La
								introducción de Narguicbaevents representó una evolución natural
								para el proyecto, alineándose con su misión de proporcionar
								experiencias excepcionales alrededor de la narguila. Ademas.
								Estableció a Narguilas Córdoba como una marca versátil y capaz
								de adaptarse a diferentes segmentos del mercado.
							</p>
							<Accordion variant="splitted">
								<AccordionItem title="Ver más">
									<article className="space-y-4 text-white pb-4">
										<p>
											Un hito significativo este año fue la decisión de los
											fundadores de dejar sus trabajos convencionales para
											dedicarse de lleno al proyecto. Esta decisión marcó un
											punto de inflexión, transformando lo que una vez fue un
											sueño en una realidad vibrante. Dedicarse a tiempo
											completo al proyecto no solo subraya la pasión y el
											compromiso de los fundadores sino que también refleja la
											solidez y el potencial de crecimiento del negocio. <br />
											La adopción de nuevas formas de pago evidencia una
											continua adaptación a las necesidades y preferencias del
											mercado. Facilitar a los clientes múltiples opciones para
											realizar sus compras no solo mejora la experiencia de
											usuario sino que también posiciona al proyecto como una
											empresa moderna.
										</p>
										<p>
											Se agrando la familia incorporando a Ariel como encargado
											representa otro paso importante en la evolución del
											proyecto. Su participacion al equipo trae nuevas ideas y
											energía al proyecto como estrategias de crecimiento y
											desarrollo del proyecto.
										</p>
									</article>
								</AccordionItem>
							</Accordion>
						</article>
					</Timeline.Body>
				</Timeline.Content>
			</Timeline.Item>
			<Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>2022</Timeline.Time>
					<Timeline.Title>Patrocinio, exclusividad y conexión </Timeline.Title>
					<Timeline.Body>
						<article className="space-y-4 text-pretty transition-all duration-200 text-black/50 hover:text-black/70 bg-white px-4 py-5 rounded-lg mt-4">
							<p>
								En un movimiento estratégico para aumentar la visibilidad de la
								marca, el año 2022 vio cómo el proyecto se convirtió en
								patrocinador oficial de equipos de fútbol en el torneo Campa.
								Esta iniciativa no solo demostró el compromiso del proyecto con
								la comunidad local sino que también le permitió alcanzar nuevos
								públicos, aumentando su presencia en el mercado y fortaleciendo
								su imagen de marca. Uno de los hitos más destacados de 2022 fue
								el inicio de la venta de tabaco negro Darkside, convirtiendo al
								proyecto en la única tienda en Argentina con este producto.
							</p>
							<p>
								Respondiendo al crecimiento continuo y a la necesidad de ofrecer
								un mejor servicio al cliente, el proyecto dio otro paso
								importante mudándose a un showroom más grande. Este nuevo
								espacio no solo permitía albergar una mayor variedad de
								productos sino que también ofrecía un ambiente más cómodo. La
								ampliación del showroom es un reflejo del éxito y la expansión
								del proyecto, permitiendo una mejor experiencia de compra y
								demostrando el compromiso con la satisfacción del cliente.
							</p>
							<p>
								Narguilas Córdoba innovó en sus redes sociales, lanzando reels
								que nos acercaban más a su esencia, mostrándose de manera
								abierta y amigable. Esta descision no solo les permitió conectar
								genuinamente con su audiencia, sino que también marcó una
								tendencia en el sector. Gracias a este aporte de valor y a la
								humanización de su marca, el resto de los colegas narguileros
								comenzaron a imitar la idea, adoptando enfoques similares para
								presentar sus propias marcas. Este movimiento generó una ola de
								creatividad y cercanía en la comunidad narguilera, transformando
								la forma en que las marcas interactúan con su público.
							</p>
						</article>
					</Timeline.Body>
				</Timeline.Content>
			</Timeline.Item>
			<Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>2021</Timeline.Time>
					<Timeline.Title>Innovación, expansión y comunidad</Timeline.Title>
					<Timeline.Body>
						<article className="space-y-4 text-pretty transition-all duration-200 text-black/50 hover:text-black/70 bg-white px-4 py-5 rounded-lg mt-4">
							<p>
								El año 2021 marcó un nuevo capítulo en la trayectoria del
								proyecto, comenzando con la introducción de productos premium
								que reafirmaron su compromiso con la calidad y la innovación.
								Los tabacos Fumari, importados directamente desde Estados
								Unidos, los tabacos Ziggy importados desde Brasil y los carbones
								de coco de la marca Adalya traidos de indonesia, se sumaron al
								ya diverso catálogo de productos. Estas adiciones no solo
								enriquecieron la oferta disponible sino que también reforzaron
								la posición del proyecto como líder en el mercado de narguilas,
								satisfaciendo las demandas de un público cada vez más conocedor
								y exigente.
							</p>
							<p>
								El logro más significativo fue la apertura del primer showroom
								del proyecto. Después de años de operar desde nuestro garage, el
								equipo finalmente logró dar el salto a un espacio dedicado
								exclusivamente a la exhibición y venta de sus productos. Este
								espacio no solo simbolizaba el crecimiento y éxito alcanzado
								sino que también ofrecía una experiencia de compra totalmente
								nueva en argentina.
							</p>
							<p>
								Más allá de ser un punto de venta, el showroom se concibió como
								un punto de encuentro para la creciente comunidad de aficionados
								a la narguila. Con áreas diseñadas para la degustación y
								demostraciones de productos, el showroom invitaba a los
								visitantes a sumergirse en el mundo de la narguila, aprendiendo
								sobre diferentes técnicas, sabores y accesorios, en un ambiente
								amigable y con ganas de trasmitir nuestros conocimientos
							</p>
						</article>
					</Timeline.Body>
				</Timeline.Content>
			</Timeline.Item>
			<Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>2020</Timeline.Time>
					<Timeline.Title>
						Inicio Prometedor y Desafío Inesperado
					</Timeline.Title>
					<Timeline.Body>
						<article className="space-y-4 text-pretty transition-all duration-200 text-black/50 hover:text-black/70 bg-white px-4 py-5 rounded-lg mt-4">
							<p>
								El año comenzó con un logro significativo: la contratación para
								ofrecer servicios de catering en Zebra Club, el boliche más
								popular de Carlos Paz. Esta oportunidad no solo indicaba un año
								de crecimiento y expansión sino que también consolidaba la
								presencia del proyecto en eventos. Sin embargo, la situación
								cambió drásticamente con la llegada de la pandemia global. Las
								restricciones impuestas para contener la propagación del virus
								pusieron un alto a las actividades sociales y nocturnas,
								afectando directamente este nuevo y prometedor proyecto.
							</p>
							<p>
								La solución fue la implementación de envíos a domicilio,
								permitiendo a los clientes disfrutar de la experiencia de la
								narguila desde la seguridad y comodidad de sus hogares. Esta
								aproximación fortaleció la relación con nuestra base de clientes
								y amplió nuestra comunidad, recibiendo apoyo y reconocimiento a
								lo largo del país.
							</p>
							<p>
								La transición a un servicio de envíos no solo fue una respuesta
								a la crisis sino que también abrió un nuevo capítulo para el
								proyecto. Al adaptarse rápidamente a las necesidades cambiantes
								de sus clientes, el servicio comenzó a posicionarse a lo del
								largo del pais. Pronto, la demanda creció, y el proyecto estaba
								enviando productos a muchos lugares de Argentina a través de
								servicios de paquetería. Esta expansión geográfica fue un
								testimonio del compromiso del equipo con nuestros clientes en
								momentos difíciles.
							</p>
						</article>
					</Timeline.Body>
				</Timeline.Content>
			</Timeline.Item>
			<Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>2019</Timeline.Time>
					<Timeline.Title>Lanzamiento de Nuevos Productos</Timeline.Title>
					<Timeline.Body>
						<article className="space-y-4 text-pretty transition-all duration-200 text-black/50 hover:text-black/70 bg-white px-4 py-5 rounded-lg mt-4">
							<p>
								Siguiendo el impulso de los años anteriores, Este ano fue
								testigo de una expansión significativa en la gama de productos
								ofrecidos. La introducción de accesorios innovadores como el
								Kaloud, carbones de coco, y diversos cabezales, junto con la
								incorporación de los renombrados tabacos Adalya, marcó un nuevo
								hito en la evolución del proyecto.
							</p>
							<p>
								La incursión en eventos se expandió rápidamente a la vida
								nocturna, donde el equipo comenzó a ofrecer sus servicios a
								varios boliches de renombre. Esta colaboración resultó ser
								mutuamente beneficiosa; los boliches atrajeron a un público más
								amplio interesado en la experiencia única de fumar narguila,
								mientras que el proyecto ganó visibilidad y acceso a un segmento
								de mercado vibrante y en expansión lo cual nos permitio brincar
								nuestro primer catering en un casamiento.
							</p>
						</article>
					</Timeline.Body>
				</Timeline.Content>
			</Timeline.Item>
			<Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>2018</Timeline.Time>
					<Timeline.Title>Difusión, degustación y feedback</Timeline.Title>
					<Timeline.Body>
						<article className="space-y-4 text-pretty transition-all duration-200 text-black/50 hover:text-black/70 bg-white px-4 py-5 rounded-lg mt-4">
							<p>
								El entusiasmo inicial y la respuesta positiva del público en
								2017 no fueron más que el comienzo. A medida que la noticia del
								proyecto se difundió, más personas comenzaron a mostrar interés,
								no solo en la variedad de tabaco sino también en la experiencia
								completa de la narguila. Este creciente interés comunitario
								sirvió como una clara señal para nosotros de que ibamos en el
								camino correcto.
							</p>
							<p>
								Para dar a conocer estos nuevos productos y sabores, y para
								mantener el impulso generado, organizamos eventos de degustación
								y participaron en bares, boliches y cumpleaños. Estas
								actividades no solo nos permitio presentar directamente nuestros
								productos al público sino también recibir feedback valioso en
								tiempo real, fortaleciendo así la relación con la comunidad de
								aficionados a la narguila.
							</p>
						</article>
					</Timeline.Body>
				</Timeline.Content>
			</Timeline.Item>
			<Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>2017</Timeline.Time>
					<Timeline.Title>Pasión, emprendimiento y sueños</Timeline.Title>
					<Timeline.Body>
						<article className="space-y-4 text-pretty transition-all duration-200 text-black/50 hover:text-black/70 bg-white px-4 py-5 rounded-lg mt-4">
							<p>
								Todo comenzó con Guille y Matias, dos universitarios en Córdoba,
								unidos por su pasión compartida por la experiencia única de
								fumar narguila. Encontrándose con una limitada variedad de
								tabaco disponible y buscando mejorar su experiencia personal,
								nació una idea.
							</p>
							<p>
								Decidieron emprender un proyecto que no solo satisfaría su
								búsqueda de una experiencia más rica y variada, sino que también
								atendería a un nicho de mercado desatendido en Córdoba,
								enfocándose en ofrecer una gama más amplia y diversa de
								productos para fumar que lo que se encontraba disponible en el
								mercado.
							</p>
							<p>
								Mirando hacia atrás, 2017 fue el año en que dos amigos tomaron
								una simple idea nacida de una pasión compartida y la
								convirtieron en el inicio de algo mucho más grande. Fue un año
								de aprendizaje, desafíos, y pequeñas victorias, pero sobre todo,
								fue el año en que se sentaron las bases de lo que prometía ser
								un emocionante viajeen el mundo de las narguilas.
							</p>
						</article>
					</Timeline.Body>
				</Timeline.Content>
			</Timeline.Item>

			{/* <Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>2022</Timeline.Time>
					<Timeline.Title>Comenzamos a participar de eventos</Timeline.Title>
					<Timeline.Body>
						Empezamos a participar de todo tipo de eventos, llevando narguis a
						casamientos, cumpleaños, despedidas, y mucho más!
					</Timeline.Body>

					<Button color="gray">
						Conocé más sobre nuestros eventos
						<HiArrowNarrowRight className="ml-2 h-3 w-3" />
					</Button>
				</Timeline.Content>
			</Timeline.Item> */}
		</Timeline>
	)
}
