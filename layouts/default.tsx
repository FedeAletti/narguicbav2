import { Link } from "@nextui-org/link"
import { Head } from "./head"
import { NavBar } from "@/components/ui/Navbar"

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
			<footer className="w-full flex items-center justify-center py-3 h-12 bg-[black] z-50 border-t-1 border-jaguar-700">
				<p className="text-white text-center font-semibold">© 2024 Nargui CBA</p>
			</footer>
		</div>
	)
}
