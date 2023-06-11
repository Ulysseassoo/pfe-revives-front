import User from "./UserInteface"

export default interface Order {
	order_id: number
	user_id: number
	status: string
	created_at: Date
	price: number
	shipping_options_shipping_option_id: number
	user: User
}
