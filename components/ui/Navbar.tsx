import React, { useEffect, useState } from "react"
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Image,
	Chip,
} from "@nextui-org/react"
import { CartIcon, ProfileIcon } from "../icons"
import { LOGO_URL } from "@/constants"
import { useCartContext } from "@/context/CartContext"
import { ProductInCard } from "@/types"

export function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [cartCount, setCartCount] = useState(0)
	const menuItems = [
		{
			label: "Inicio",
			href: "/",
		},
		{
			label: "Tienda",
			href: "/tienda",
		},
		{
			label: "Eventos",
			href: "/eventos",
		},
		{
			label: "Nosotros",
			href: "/nosotros",
		},
		{
			label: "Blog",
			href: "/blog",
		},
	]

	const { cart } = useCartContext()

	// Inicializamos una variable para almacenar la suma

	useEffect(() => {
		let sumaQuantity = 0
		cart.forEach((producto: ProductInCard) => {
			// Sumamos la propiedad 'quantity' de cada objeto al total
			sumaQuantity += producto.quantity!
		})
		setCartCount(sumaQuantity)
	}, [cart])

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
				<Link href="/">
					<NavbarBrand>
						<Image alt="Logo" src={LOGO_URL} width={50} height={50} />
					</NavbarBrand>
				</Link>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-8" justify="center">
				<NavbarItem>
					<Link color="foreground" href="/tienda">
						Tienda
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/eventos">
						Eventos
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/nosotros">
						Nosotros
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="/blog">
						Blog
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end" className="flex gap-8">
				<NavbarItem>
					<Link href="/cuenta">
						<ProfileIcon />
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href="/cart" className="relative">
						<CartIcon />
						{cartCount > 0 && (
							<small className="absolute top-[-10px] left-[-10px] text-white font-semibold bg-purple-600 rounded-full px-2">
								{cartCount}
							</small>
						)}
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu className="z-50">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color="foreground"
							className="w-full"
							href={item.href}
							size="lg">
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	)
}
