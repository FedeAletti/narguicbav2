import { BackgroundVideo } from "@/components/ui/BackgroundVideo"
import { CTAGallery } from "@/components/ui/CTAGallery"
import { InfiniteHero } from "@/components/ui/InfiniteHero"
import { Title } from "@/components/ui/Title"
import DefaultLayout from "@/layouts/default"
// import SimpleSlider from "@/components/Carousel"

export default function IndexPage() {
	return (
		<DefaultLayout>
			<div className="relative -top-24 z-10 border-b-2 border-b-primary-800 ">
				<BackgroundVideo src="/bg-video-male.mp4" />
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
		</DefaultLayout>
	)
}
