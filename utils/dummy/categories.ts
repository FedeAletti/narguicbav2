import { Brand, Category, Subcategory } from "@/types"

const brands: Brand[] = [
	{
		id: 1,
		name: "Zomo",
		price: 2300,
		// prices: [
		// 	{
		// 		id: 1,
		// 		quantity: 50,
		// 		price: 2300,
		// 	},
		// ],
		logo: "",
	},
	{
		id: 2,
		name: "Adalya",
		price: 2300,
		// prices: [
		// 	{
		// 		id: 1,
		// 		quantity: 50,
		// 		price: 2300,
		// 	},
		// ],
		logo: "",
		products: [],
	},
	{
		id: 3,
		name: "Blue Horse",
		price: 2300,
		// prices: [
		// 	{
		// 		id: 1,
		// 		quantity: 50,
		// 		price: 2300,
		// 	},
		// ],
		logo: "",
	},
	{
		id: 4,
		name: "Ziggy",
		price: 2300,
		// prices: [
		// 	{
		// 		id: 1,
		// 		quantity: 50,
		// 		price: 2300,
		// 	},
		// ],
		logo: "",
		products: [],
	},
]

export const subcategories: Subcategory[] = [
	{
		id: 1,
		name: "gestores",
		products: [],
	},
	{
		id: 2,
		name: "narguischicas",
		products: [],
	},
	{
		id: 3,
		name: "narguismedianas",
		products: [],
	},
	{
		id: 4,
		name: "narguisgrandes",
		products: [],
	},
]

export const categories: Category[] = [
	{
		id: 1,
		name: "tabacos",
		subcategory: null,
		logo: "",
	},
	{
		id: 2,
		name: "accesorios",
		subcategory: subcategories[1],
		logo: "",
	},
	{
		id: 3,
		name: "narguilas",
		subcategory: null,
		logo: "",
	},
]
