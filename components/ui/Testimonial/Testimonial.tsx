import { StarIcon } from "@/components/icons"
import styles from "./Testimonial.module.css"

type Testimonial = {
	name: string
	stars: number
	message: string
	image: string
}

export const Testimonial = ({ testimonial }: { testimonial: Testimonial }) => {
	return (
		<div className={`${styles.card} mx-auto flex flex-col gap-3 w-full`}>
			<p className={styles.message}>{testimonial.message}</p>
			<div className={styles.header}>
				<div className={styles.image}></div>
				<div>
					<div className={styles.stars}>
						{Array.from({ length: testimonial.stars }, (_, i) => (
							<StarIcon key={i} />
						))}
					</div>
					<p className={styles.name}>{testimonial.name}</p>
				</div>
			</div>
		</div>
	)
}
