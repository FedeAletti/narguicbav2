// export function GET() {
// 	fetch(
// 		"https://docs.google.com/spreadsheets/d/e/2PACX-1vTE-a7KvFPkA2SiZN0DwgHzPTkPn2CBnhBWBazk5YEF06zHSX6_7FHBTlpuei7GuoNs2qG_90TN_sQh/pub?output=csv"
// 	)
// 		.then((res) => res.text())
// 		.then((text) => {
// 			return text
// 				.split("\n")
// 				.slice(1)
// 				.map((row) => {
// 					const [
// 						id,
// 						imagen,
// 						nombre,
// 						categoria,
// 						descripcion,
// 						marca,
// 						precio,
// 						stock,
// 						descuento,
// 					] = row.split("\t")

// 					return {
// 						id,
// 						imagen,
// 						nombre,
// 						categoria,
// 						descripcion,
// 						marca,
// 						precio: parseFloat(precio),
// 						stock: parseInt(stock),
// 						descuento: parseFloat(descuento),
// 					}
// 				})
// 		})

// 	return new Response(data)
// }


export const api = {
    list : async () => {
        return fetch(
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTE-a7KvFPkA2SiZN0DwgHzPTkPn2CBnhBWBazk5YEF06zHSX6_7FHBTlpuei7GuoNs2qG_90TN_sQh/pub?output=tsv"
        )
            .then((res) => res.text())
            .then((text) => {
                return text
                    .split("\n")
                    .slice(1)
                    .map((row) => {
                        const [
                            id,
                            imagen,
                            nombre,
                            categoria,
                            descripcion,
                            marca,
                            precio,
                            stock,
                            descuento,
                        ] = row.split("\t")
    
                        return {
                            id,
                            imagen,
                            nombre,
                            categoria,
                            descripcion,
                            marca,
                            precio: parseFloat(precio),
                            stock: parseInt(stock),
                            descuento: parseFloat(descuento),
                        }
                    })
            })
    }
}