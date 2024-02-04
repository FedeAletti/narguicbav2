export const aplicarDescuento = (price: number, discount: number): number => {
	if (discount >= 0) {
		const descuentoAplicado = (price * discount) / 100

		const precioFinal = price - descuentoAplicado

		return precioFinal
	} else {
		return price
	}
}
