export default interface User {
	user_id: number
	first_name: string
	last_name: string
	email: string
	created_at: string
	role: number
	stripe_id?: string
	phone: string
	shipping_address: ShippingAddress
}

interface ShippingAddress {
	shipping_address_id: number
	user_id: number
	full_name: string
	address_line_1: string
	address_line_2: string | null
	city: string
	state: string
	zip_code: string
	country: string
}
