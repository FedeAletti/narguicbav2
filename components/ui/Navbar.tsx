import React from "react"
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
} from "@nextui-org/react"
import { CartIcon, ProfileIcon } from "../icons"
import { LOGO_URL } from "@/constants"

export function NavBar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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
					<Link href="/cart">
						<CartIcon />
					</Link>
				</NavbarItem>

				{/* <NavbarItem className="hidden lg:flex">
					<Link href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem> */}
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? "primary"
									: index === menuItems.length - 1
									? "danger"
									: "foreground"
							}
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
