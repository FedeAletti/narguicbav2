import { collection, addDoc } from "firebase/firestore"
import { db } from "./firebase"

export const addProduct = async () => {
	try {
		const docRef = await addDoc(collection(db, "brands"), {
			name: "Adalya",
			price: {
				50: 2300,
                200: 8000
			},
			logo: "",
		})
		console.log("Document written with ID: ", docRef.id)
	} catch (e) {
		console.error("Error adding document: ", e)
	}
}
