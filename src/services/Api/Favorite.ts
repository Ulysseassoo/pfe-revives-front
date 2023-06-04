import axios from "axios"
import { host } from "."
import FavoriteInterface from "@inteface/FavoriteInterface"

export const createFavorite = async (shoe_id: number) => {
	const token = localStorage.getItem("token")
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	}
	const url = `${host}/favorites`
	const res = await axios.post<{ data: FavoriteInterface; status: number }>(
		url,
		{
			shoe_id
		},
		config
	)
	return res.data
}

export const getFavorites = async () => {
	const token = localStorage.getItem("token")
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	}
	const url = `${host}/favorites`
	const res = await axios.get<{ data: FavoriteInterface[] }>(url, config)
	return res.data.data
}

export const deleteFavorite = async (shoe_id: number) => {
	const token = localStorage.getItem("token")
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	}
	const url = `${host}/favorites/${shoe_id}`
	const res = await axios.delete<{ status: number }>(url, config)
	return res.data.status
}
