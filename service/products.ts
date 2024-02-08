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
		// const ordersSnapshot = await getDocs(collection(db, "pedidos"))
		// const orders = [] as any
		// ordersSnapshot.forEach((doc) => {
		// 	const data = doc.data()
		// 	orders.push({ ...data, id: doc.id })
		// })
		// console.log(orders);
		// return orders
		return [
			{
				envioAlInterior: false,
				total: 31370,
				productos: [
					{
						id: "2",
						stock: 10,
						descripcion: "Chicle de uva",
						descuento: 0,
						quantity: 4,
						categoria: "tabacos",
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fnay-bubblegrape.png?alt=media&token=a641b3e3-7fe9-4389-8f2e-106c9ca7e424",
						nombre: "Bubble Grape",
						marca: "Nay",
						precio: 3500,
					},
					{
						stock: 10,
						quantity: 1,
						descripcion: "Dos manzanas",
						categoria: "tabacos",
						marca: "Adalya",
						descuento: 10,
						nombre: "Two Apples",
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fadalya-twoapples200g.png?alt=media&token=1a6cd456-d4e1-4484-8b6f-cad2245c6eee",
						id: "16",
						precio: 19300,
					},
				],
				comprador: {
					calle: "Hipólito Irigoyen 3969",
					provincia: "",
					telefono: "03424388638",
					documento: "42332626",
					nombre: "Federico José",
					codigoPostal: "",
					ciudad: "",
					email: "",
					apellido: "Aletti",
					barrio: "Roma",
					envioAlInterior: false,
					entrecalles: "Roma",
				},
				estado: "Pendiente",
				id: "0Be51Trtea3ObxM30HnO",
			},
			{
				envioAlInterior: true,
				estado: "Pendiente",
				comprador: {
					codigoPostal: "3000",
					calle: "Hipólito Irigoyen 3969",
					email: "fedeale2000@gmail.com",
					entrecalles: "calle 1 calle 2",
					documento: "42332626",
					provincia: "Santa Fe",
					envioAlInterior: true,
					nombre: "Federico José",
					barrio: "Centro",
					ciudad: "Santa Fe",
					telefono: "03424388638",
					apellido: "Aletti",
				},
				total: 169480,
				productos: [
					{
						categoria: "tabacos",
						stock: 10,
						nombre: "Two Apples",
						precio: 19300,
						marca: "Adalya",
						descripcion: "Dos manzanas",
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fadalya-twoapples200g.png?alt=media&token=1a6cd456-d4e1-4484-8b6f-cad2245c6eee",
						id: "16",
						quantity: 4,
						descuento: 10,
					},
					{
						quantity: 1,
						id: "4",
						categoria: "narguilas",
						stock: 5,
						marca: "Otro",
						nombre: "Narguila Atomic",
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Fnarguilas%2Fnarguila-atomic.png?alt=media&token=e124fee5-5fb5-422e-96ce-29bf75fffc6a",
						descripcion: "Narguila Atomic pequeña",
						descuento: 0,
						precio: 100000,
					},
				],
				id: "62GY0wYpc8X0OHuGCjd5",
			},
			{
				comprador: {
					envioAlInterior: false,
					calle: "Hipólito Irigoyen 3969",
					telefono: "03424388638",
					provincia: "",
					email: "",
					ciudad: "",
					codigoPostal: "",
					barrio: "Roma",
					entrecalles: "Roma",
					nombre: "Federico José",
					apellido: "Aletti",
					documento: "42332626",
				},
				productos: [
					{
						descripcion: "Chicle de uva",
						categoria: "tabacos",
						descuento: 0,
						precio: 3500,
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fnay-bubblegrape.png?alt=media&token=a641b3e3-7fe9-4389-8f2e-106c9ca7e424",
						id: "2",
						nombre: "Bubble Grape",
						stock: 10,
						marca: "Nay",
						quantity: 4,
					},
					{
						id: "16",
						stock: 10,
						nombre: "Two Apples",
						descripcion: "Dos manzanas",
						quantity: 1,
						marca: "Adalya",
						categoria: "tabacos",
						precio: 19300,
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fadalya-twoapples200g.png?alt=media&token=1a6cd456-d4e1-4484-8b6f-cad2245c6eee",
						descuento: 10,
					},
				],
				total: 31370,
				estado: "Pendiente",
				envioAlInterior: false,
				id: "8Gz9pojSYwANkFiosRHC",
			},
			{
				comprador: {
					email: "",
					documento: "42272418",
					calle: "Pasaje calderon 9650",
					nombre: "Lucio",
					telefono: "3424671661",
					ciudad: "",
					envioAlInterior: false,
					barrio: "Yapeyu",
					entrecalles: "Chaco y ex combatientes malvina",
					apellido: "Alconchel",
					provincia: "",
					codigoPostal: "",
				},
				total: 25070,
				envioAlInterior: false,
				productos: [
					{
						stock: 10,
						precio: 3500,
						categoria: "tabacos",
						quantity: 1,
						id: "17",
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fonix-highlemon.png?alt=media&token=39c447dd-b386-473d-8cf5-000cedea8277",
						marca: "Onix",
						descuento: 0,
						descripcion: "Limón",
						nombre: "High Lemon",
					},
					{
						nombre: "My Strawberry Cream",
						id: "19",
						precio: 4200,
						categoria: "tabacos",
						marca: "Zomo",
						descripcion: "Frutilla a la crema",
						quantity: 1,
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fzomo-mystrawberry.png?alt=media&token=d295f066-d7db-460e-b0e5-1096377dc34c",
						descuento: 0,
						stock: 10,
					},
					{
						nombre: "Two Apples",
						quantity: 1,
						stock: 10,
						marca: "Adalya",
						precio: 19300,
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fadalya-twoapples200g.png?alt=media&token=1a6cd456-d4e1-4484-8b6f-cad2245c6eee",
						descuento: 10,
						categoria: "tabacos",
						id: "16",
						descripcion: "Dos manzanas",
					},
				],
				estado: "Pendiente",
				id: "FZHw5u8aMQLAUJ8TM8Gg",
			},
			{
				productos: [
					{
						descuento: 0,
						categoria: "tabacos",
						quantity: 4,
						marca: "Nay",
						id: "2",
						stock: 10,
						nombre: "Bubble Grape",
						precio: 3500,
						descripcion: "Chicle de uva",
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fnay-bubblegrape.png?alt=media&token=a641b3e3-7fe9-4389-8f2e-106c9ca7e424",
					},
					{
						marca: "Adalya",
						quantity: 1,
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fadalya-twoapples200g.png?alt=media&token=1a6cd456-d4e1-4484-8b6f-cad2245c6eee",
						stock: 10,
						nombre: "Two Apples",
						descuento: 10,
						categoria: "tabacos",
						descripcion: "Dos manzanas",
						id: "16",
						precio: 19300,
					},
				],
				total: 33970,
				estado: "Pendiente",
				comprador: {
					ciudad: "Santa Fe",
					barrio: "centro",
					calle: "Hipólito Irigoyen 3969",
					email: "fedeale2000@gmail.com",
					entrecalles: "calle1 y calle2",
					apellido: "Aletti",
					codigoPostal: "3000",
					nombre: "Federico José",
					envioAlInterior: true,
					documento: "42332626",
					provincia: "Santa Fe",
					telefono: "03424388638",
				},
				envioAlInterior: true,
				id: "iPKHFbODHqKHlv5atTrU",
			},
			{
				envioAlInterior: true,
				productos: [
					{
						categoria: "tabacos",
						precio: 3500,
						descripcion: "Chicle de uva",
						descuento: 0,
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fnay-bubblegrape.png?alt=media&token=a641b3e3-7fe9-4389-8f2e-106c9ca7e424",
						marca: "Nay",
						quantity: 4,
						nombre: "Bubble Grape",
						stock: 10,
						id: "2",
					},
					{
						precio: 19300,
						marca: "Adalya",
						stock: 10,
						descripcion: "Dos manzanas",
						nombre: "Two Apples",
						descuento: 10,
						id: "16",
						quantity: 1,
						imagen:
							"https://firebasestorage.googleapis.com/v0/b/narguicba-2d5f8.appspot.com/o/productos%2Ftabacos%2Fadalya-twoapples200g.png?alt=media&token=1a6cd456-d4e1-4484-8b6f-cad2245c6eee",
						categoria: "tabacos",
					},
				],
				estado: "Pendiente",
				comprador: {
					apellido: "Aletti",
					ciudad: "Santa Fe",
					provincia: "Santa Fe",
					envioAlInterior: true,
					barrio: "Roma",
					calle: "Hipólito Irigoyen 3969",
					email: "fedeale2000@gmail.com",
					telefono: "03424388638",
					codigoPostal: "3000",
					nombre: "Federico José",
					documento: "42332626",
					entrecalles: "Roma",
				},
				total: 31370,
				id: "vl6DyyqIS4BYr920RtjT",
			},
		] 
	} catch (e) {
		console.error("Error adding document: ", e)
	}
}
