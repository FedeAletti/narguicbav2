import { courage } from "@/config/fonts"
import React from "react"

export const Title = ({
	text,
	className,
}: {
	text: string
	className?: string
}) => {
	return (
		<h2 className={`text-3xl font-bold ${className} ${courage.className}`}>
			{text}
		</h2>
	)
}
