import type { AppProps } from "next/app"

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { fontSans, fontMono, manrope, courage } from "@/config/fonts"
import { useRouter } from "next/router"
import "@/styles/globals.css"
import ProductsContextProvider from "@/context/ProductsContext"
import CartContextProvider from "@/context/CartContext"
import { Toaster } from "react-hot-toast"

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider>
				<ProductsContextProvider>
					<CartContextProvider>
						<Component {...pageProps} />
						<Toaster position="bottom-center" />
					</CartContextProvider>
				</ProductsContextProvider>
			</NextThemesProvider>
		</NextUIProvider>
	)
}

export const fonts = {
	// sans: fontSans.style.fontFamily,
	// mono: fontMono.style.fontFamily,
	manrope: manrope.style.fontFamily,
	courage: courage.style.fontFamily,
}
