import React from "react"
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react"
import { Product } from "@/types"

type CardProductProps = {
    item: Product
}

export function ProductCard({ item }: CardProductProps) {

    const { title, brand, price, category, description, isAvailable, thumbnail } = item

	return (
		<Card
			shadow="sm"
			isPressable
			onPress={() => console.log("item pressed")}
			className="col-span-12 md:col-span-3">
			<CardBody className="overflow-visible p-0 transition-all ease-in-out duration-300 bg-white relative h-[280px]">
				<Image
					shadow="sm"
					radius="lg"
					width="100%"
					alt={title}
					className="w-full object-cover hover:object-contain h-[280px]"
					src={thumbnail}
				/>
			</CardBody>
			<CardFooter className="text-small bg-[#f6f6f6] text-jaguar-50 h-24 -mt-5 justify-between">
				<div className="flex items-center gap-3">
					<b>{title}</b>
					<Chip color="warning" variant="shadow">{brand}</Chip>
				</div>
				<p className="text-default-500">{price}</p>
			</CardFooter>
		</Card>
	)
}
