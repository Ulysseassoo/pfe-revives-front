import { ShoeInterface } from "./ShoeInterface"
import User from "./UserInteface"

export default interface FavoriteInterface {
	users_user_id: number
	shoes_shoe_id: number
	created_at: Date
	user: User
	shoe: ShoeInterface
}
