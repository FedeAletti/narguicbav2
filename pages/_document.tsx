import { courage, manrope } from "@/config/fonts"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body
				className={`${[manrope.className].join(" ")} min-h-screen antialiased dark text-foreground bg-primary max-w-screen overflow-x-hidden`}>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
