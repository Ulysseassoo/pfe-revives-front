import { ShoeInterface } from "./ShoeInterface"
import User from "./UserInteface"

export interface CartInterface {
	id: number
	user: User
	userId: number
	products: CartProduct
	createdAt: Date
	updatedAt: Date
}

export interface CartProduct extends Omit<ShoeInterface, "size"> {
	quantity: number
	size: number
}
