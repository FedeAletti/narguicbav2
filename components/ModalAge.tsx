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
	const router = useRouter()
	const isAdminPage = router.pathname.includes("panel")
	const [open, setOpen] = useState(!isAdminPage)



	return (
		<Modal
			backdrop="blur"
			isOpen={open}
			onClose={() => setOpen(false)}
			className="bg-gradient-to-r from-red-600 to-red-800 px-2 py-10">
			<ModalContent className="w-[80vw]">
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-row justify-center items-center gap-1 relative">
							<Image
								src={LOGO_URL}
								alt="Modal Title"
								height={150}
								width={150}
							/>
						</ModalHeader>
						<ModalBody className="my-4">
							<p className="text-center text-xl font-semibold">
								Hola! Necesitamos estar seguros que sos mayor de edad.
							</p>
							<span className="text-center z-10 text-5xl">🔞</span>

							<p className="text-center text-2xl font-bold">
								¿Ya tenés 18 años?
							</p>
						</ModalBody>
						<ModalFooter className="flex flex-col items-center justify-between gap-3">
							<div className="space-x-5">
								<Button
									className="bg-transparent border border-white hover:bg-primary"
									size="lg"
									onPress={() =>
										window.location.replace("https://www.google.com")
									}>
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
								nicotina, fumar es perjudicial para la salud. <br /> 
								<b>Prohibida su venta para
								menores de 18 años.</b>
							</small>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
