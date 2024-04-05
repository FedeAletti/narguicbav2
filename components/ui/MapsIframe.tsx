"use client"

import React from "react"

export const MapsIframe = ({ height = 200 }: { height?: number }) => {
	return (
		<div className="w-full">
			<iframe
				width="100%"
				height={height}
				frameBorder="0"
				scrolling="no"
				marginHeight={0}
				marginWidth={0}
				src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rafael%20Nu%C3%B1ez%204684,%20cordoba,%20cordoba%20+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
		</div>
	)
}
