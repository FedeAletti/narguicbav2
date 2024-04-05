import { Category, Pedido, Product, ProductInCart } from "@/types"
import { collection, addDoc, getDocs } from "firebase/firestore"

import { db } from "./firebase"

export const createOrder = async (
	compradorData: any,
	productos: ProductInCart,
	total: number
) => {
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

export const getOrders = async () => {
	try {
		const ordersSnapshot = await getDocs(collection(db, "pedidos"))
		const orders = [] as any
		ordersSnapshot.forEach((doc) => {
			const data = doc.data()
			orders.push({ ...data, id: doc.id })
		})

		return orders
	} catch (e) {
		console.error("Error adding document: ", e)
	}
}
