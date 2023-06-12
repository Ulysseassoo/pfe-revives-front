import axios, { AxiosResponse } from "axios"
import { host } from "."
import { ShoeInterface } from "@inteface/ShoeInterface"

export const searchShoes = async (name: string) => {
	const token = localStorage.getItem("token")
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	}
	const url = `${host}/shoes?&model=${name}&take=${5}`
	const res = await axios.get<{
		data: ShoeInterface[]
	}>(url, config)
	return res.data.data
}
