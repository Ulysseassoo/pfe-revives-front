import axios, { AxiosResponse } from "axios"
import { host } from "."
import { RegisterFormData } from "@services/schemas/User"
import User from "@inteface/UserInteface"
import { CartInterface, CartProduct } from "@inteface/CartInterface"
import { ShoeInterface } from "@inteface/ShoeInterface"
import OrderInterface from "@inteface/OrderInterface"

export const checkoutPayment = async (data: { products: CartProduct[] }) => {
	const token = localStorage.getItem("token")
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	}
	const url = `${host}/orders`
	const res = await axios.post<{
		data: {
			order: OrderInterface
			sessionId: string
		}
	}>(url, { products: data.products, shipping_options_shipping_option_id: 1 }, config)
	return res.data.data
}
