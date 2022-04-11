export type Cart = {
	_id: string
	restId: string
	imageUrl: string
	name: string
	prices: {
		price: number
	}[]
}

export type LocalCart = {
	id: number
	quantity: number
	data: Cart
}

export interface Pricing {
	discount: number
	tip: number
	subtotal: number
	coupon: number
}
