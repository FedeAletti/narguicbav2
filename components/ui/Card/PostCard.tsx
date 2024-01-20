"use client"
import { courage } from "@/config/fonts"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import React, { useRef, useState } from "react"

type Props = {
	title: string
	text: string
	buttonText?: string
	buttonCallback?: () => void
}

export const PostCard = ({
	title,
	text,
	buttonText,
	buttonCallback,
}: Props) => {
	const divRef = useRef<HTMLDivElement>(null)
	const [isFocused, setIsFocused] = useState(false)
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [opacity, setOpacity] = useState(0)

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!divRef.current || isFocused) return

		const div = divRef.current
		const rect = div.getBoundingClientRect()

		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
	}

	const handleFocus = () => {
		setIsFocused(true)
		setOpacity(1)
	}

	const handleBlur = () => {
		setIsFocused(false)
		setOpacity(0)
	}

	const handleMouseEnter = () => {
		setOpacity(1)
	}

	const handleMouseLeave = () => {
		setOpacity(0)
	}

	return (
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="relative flex flex-col h-full w-full justify-center overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-r from-black to-slate-950 px-8 py-10 shadow-2xl">
			<div
				className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
				style={{
					opacity,
					background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,182,255,.1), transparent 40%)`,
				}}
			/>
			<div className="flex-1">
				<h5 className={`${courage.className} text-lg`}>{title}</h5>
				<p className="text-base text-slate-200">{text}</p>
			</div>
			<Link
				href="/blog/1" className="relative inline-block overflow-hidden rounded-full p-[1px]">
				<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
				<div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
					ver más <ArrowUpRight />
				</div>
			</Link>
		</div>
	)
}
