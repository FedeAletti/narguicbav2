import { Product } from '@/types';
import { collection, addDoc } from "firebase/firestore"
import { db } from "./firebase"

export const addProduct = async () => {
	try {
		const docRef = await addDoc(collection(db, "products"), {
			name: "Blue Melon",
			description: "Arandanos, melon y menta",
			thumbnail: "gs://narguicba-2d5f8.appspot.com/productos/tabacos/adalya-bluemelon.png",
			brand: "Adalya",
			price: 4750,
			category: {
				reference: "categories",
				id: "VZhAMjGlEuEA9tPWT9Mu"
			},
			stock: 10,
			isAvailable: true,
			discount: 0
		})
		console.log("Document written with ID: ", docRef.id)
	} catch (e) {
		console.error("Error adding document: ", e)
	}
}

type Product = {
	id: string
	name: string
	description: string
	thumbnail: string
	brand: Brand
	price: number
	category: Category
	stock: number
	isAvailable: boolean
	discount?: number
}