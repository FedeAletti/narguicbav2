import { Category, Product, ProductInCart } from "@/types"
import { collection, addDoc, getDocs } from "firebase/firestore"

import { db } from "./firebase"

export const createOrder = async (compradorData: any, productos: ProductInCart, total: number) => {
	try {
		const docRef = await addDoc(collection(db, "pedidos"), {
			comprador: compradorData,
            envioAlInterior: compradorData.envioAlInterior,
            productos,
            total,
            estado: "Pendiente",
		})
	} catch (e) {
		console.error("Error adding document: ", e)
	}
}
