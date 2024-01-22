import { Category, Product } from "@/types"
import { collection, addDoc, getDocs } from "firebase/firestore"

import { db } from "./firebase"

export const addProduct = async () => {
	try {
		const docRef = await addDoc(collection(db, "products"), {
			name: "Provost",
			description: "Gestor de calor Provost.",
			thumbnail:
				"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Fgestores%2Fprovost.png?alt=media&token=8d20d869-f61f-4dbc-a78a-83cf16afd940",
			brand: "Lotus",
			price: 15000,
			category: {
				reference: "categories",
				id: "tWsfn6Lo7VKYoYx5Pm5N",
			},
			stock: 5,
			isAvailable: true,
			discount: 0,
		})
		console.log("Document written with ID: ", docRef.id)
	} catch (e) {
		console.error("Error adding document: ", e)
	}
}

export const getProducts = async () => {
	const queryProducts = await getDocs(collection(db, "products"))
	const queryCategories = await getDocs(collection(db, "categories"))

	const products = [] as Product[]
	const categories = [] as Category[]

	queryProducts.forEach((doc) => {
		products.push({
			...(doc.data() as Product),
			id: doc.id,
		})
	})
	queryCategories.forEach((doc) => {
		categories.push({
			id: doc.id,
			...(doc.data() as Category),
		})
	})

	const productWithCategories = []

	for (const product of products) {
		const productCategory = product.category.id

		const category = categories.find(
			(category) => category.id === productCategory
		)
		if (category) {
			product.category = category,
			productWithCategories.push({
				...product,
			})
		}
	}

	return {productWithCategories, categories}
}

// type Product = {
// 	id: string
// 	name: string
// 	description: string
// 	thumbnail: string
// 	brand: Brand
// 	price: number
// 	category: Category
// 	stock: number
// 	isAvailable: boolean
// 	discount?: number
// }
