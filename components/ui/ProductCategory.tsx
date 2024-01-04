import {
	Card,
	CardHeader,
	CardBody,
	Image,
	CardFooter,
	Button,
} from "@nextui-org/react"
import React from "react"

export const ProductCategory = () => {
	return (
		<Card isFooterBlurred={true} radius="lg" className="border-none col-span-12 md:col-span-4">
			<Image
				alt="Woman listing to music"
				className="object-cover "
				height={500}
				src="https://i.ibb.co/C7DSPgP/tobacco.jpg"
				width={500}
			/>
			<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
				<p className="text-tiny text-white/80">Available soon.</p>
				<Button
					className="text-tiny text-white bg-black/20"
					variant="flat"
					color="default"
					radius="lg"
					size="sm">
					Notify me
				</Button>
			</CardFooter>
		</Card>
	)
}
