import { Link } from "@nextui-org/link"
import { Head } from "./head"
import { NavBar } from "@/components/ui/Navbar"
import { Image } from "@nextui-org/react"
import { Footer } from "@/components/ui/Footer"

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex flex-col min-h-screen w-screen">
			<main className="mx-auto flex-grow relative w-[80vw] py-10">{children}</main>
		</div>
	)
}
