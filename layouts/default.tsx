import { Link } from "@nextui-org/link"
import { Head } from "./head"
import { NavBar } from "@/components/ui/Navbar"
import { Image } from "@nextui-org/react"
import { Footer } from "@/components/ui/Footer"

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col min-h-screen w-screen">
			<Head />
			<NavBar />
			<main className="mx-auto flex-grow">{children}</main>
			<Footer />
		</div>
	)
}
