import { LOGO_URL } from "@/constants"
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Image,
} from "@nextui-org/react"
import { useRouter } from "next/router"
import { useState } from "react"

export const ModalAge = () => {
	// const { isOpen, onOpen, onClose } = useDisclosure()

	const [open, setOpen] = useState(true)

	const router = useRouter()

	return (
		<Modal
			backdrop="blur"
			isOpen={open}
			onClose={() => setOpen(false)}
			className="bg-gradient-to-r from-red-600 to-red-800 px-2 py-10">
			<ModalContent className="w-[80vw]">
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-row justify-center items-center gap-1">
							<Image
								src={LOGO_URL}
								alt="Modal Title"
								height={150}
								width={150}
							/>
							{/* <Image
								src="/logo-banner.png"
								alt="Modal Title"
								height={500}
								width={500}
							/> */}
						</ModalHeader>
						<ModalBody className="my-4">
							<p className="text-center text-xl font-semibold">
								Hola! Necesitamos estar seguros que sos mayor de edad.
							</p>
							<p className="text-center text-2xl font-bold">
								¿Ya tenés 18 años?
							</p>
						</ModalBody>
						<ModalFooter className="flex flex-col items-center justify-between gap-3">
							<div className="space-x-5">
								<Button
									className="bg-transparent border border-white hover:bg-primary"
									size="lg"
									onPress={() => window.location.replace("https://www.google.com")}>
									No
								</Button>
								<Button
									color="primary"
									className="bg-white border text-primary border-white font-bold hover:text-white hover:bg-transparent"
									size="lg"
									variant="shadow"
									onPress={onClose}>
									Sí
								</Button>
							</div>
							<small className="mt-4 text-center">
								<b>Advertencia</b> <br /> Algunos productos pueden contener
								nicotina, fumar es perjudicial para la salud. Prohibido para
								menores de 18 años.
							</small>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
