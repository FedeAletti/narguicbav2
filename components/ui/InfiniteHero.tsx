import { courage } from "@/config/fonts"
import { LOGO_URL } from "@/constants"
import { Image } from "@nextui-org/react"

const borderedText =
	"[-webkit-text-fill-color:transparent] [-webkit-text-stroke-width:.5px] [-webkit-text-stroke-color:#fff]"

export function InfiniteHero() {
	const isOdd = (number: number): boolean => {
		return number % 2 !== 0
	}

	return (
		<div
			className={`max-w-screen flex animate-textCarousel flex-nowrap gap-6 my-10 z-10 ${courage.className}`}>
			{Array.from({ length: 30 }).map((_, i) => (
				<div key={i} className="mb-5 flex items-center gap-3">
					<div className="w-[100px]">
						<Image alt="Logo" height={200} src={LOGO_URL} width={100} />
					</div>

					<h1
						className={`font-title text-5xl font-bold ${
							isOdd(i) ? borderedText : "text-white"
						}`}>
						NARGUILAS
					</h1>
					<h1
						className={`font-title text-5xl font-bold ${
							isOdd(i) ? borderedText : "text-white"
						}`}>
						CORDOBA
					</h1>
				</div>
			))}
		</div>
	)
}
