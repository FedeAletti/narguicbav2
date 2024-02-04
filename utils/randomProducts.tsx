import { Product } from "@/types"

export const seleccionarNumerosAzar = (
	listadoProductos: Product[],
	length: number = 5
): number[] => {
	const totalProductos: number = listadoProductos.length - 1

	// Asegúrate de que el número de elementos a seleccionar no sea mayor que el total de productos
	const elementosSeleccionar: number = Math.min(length, totalProductos)

	// Genera 5 números aleatorios únicos dentro del rango del total de productos
	const numerosSeleccionados: number[] = []

	while (numerosSeleccionados.length < elementosSeleccionar) {
		const numeroAleatorio: number =
			Math.floor(Math.random() * totalProductos) + 1

		if (!numerosSeleccionados.includes(numeroAleatorio)) {
			numerosSeleccionados.push(numeroAleatorio)
		}
	}

	return numerosSeleccionados
}
