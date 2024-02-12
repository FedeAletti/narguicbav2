"use client"

import { Button, Timeline } from "flowbite-react"
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi"

export function TimelineApp() {
	return (
		<Timeline>
			<Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>Febrero 2017</Timeline.Time>
					<Timeline.Title>Nombre del hito 1</Timeline.Title>
					<Timeline.Body>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
						blanditiis ullam dolores veniam, tempore praesentium repellat soluta
						debitis tenetur aliquam omnis facilis amet a, libero aspernatur, non
						fuga dolorem reiciendis.
					</Timeline.Body>
				</Timeline.Content>
			</Timeline.Item>
			<Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>Marzo 2018</Timeline.Time>
					<Timeline.Title>Nombre del hito 2</Timeline.Title>
					<Timeline.Body>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
						blanditiis ullam dolores veniam, tempore praesentium repellat soluta
						debitis tenetur aliquam omnis facilis amet a, libero aspernatur, non
						fuga dolorem reiciendis.
					</Timeline.Body>
				</Timeline.Content>
			</Timeline.Item>
			<Timeline.Item>
				<Timeline.Point icon={HiCalendar} />
				<Timeline.Content>
					<Timeline.Time>Septiembre 2022</Timeline.Time>
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
			</Timeline.Item>
		</Timeline>
	)
}
