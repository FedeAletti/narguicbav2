import React from "react"

export function BackgroundVideo({ src }: { src: string }) {
	return (
		<video
			autoPlay
			loop
			muted
			className="absolute z-0 top-0 h-screen w-screen object-cover blur-[4px] filter"
			style={{}}>
			<source src={src} type="video/mp4" />
		</video>
	)
}
