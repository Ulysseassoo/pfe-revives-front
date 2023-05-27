import axios, { AxiosResponse } from "axios";
import { host } from ".";
import { RegisterFormData } from "@services/schemas/User";
import User from "@inteface/UserInteface";
import { CartInterface, CartProduct } from "@inteface/CartInterface";
import { ShoeInterface } from "@inteface/ShoeInterface";

export const createCart = async () => {
	const token = localStorage.getItem("token");
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const url = `${host}/carts`;
	const res = await axios.post<{ data: CartInterface }>(url, {}, config);
	return res.data.data;
};

export const updateCart = async (data: { products: CartProduct[]; id: number }) => {
	const token = localStorage.getItem("token");
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const url = `${host}/carts/${data.id}`;
	const res = await axios.put<{ data: CartInterface }>(url, { products: data.products }, config);
	return res.data.data;
};

export const getCart = async () => {
	const token = localStorage.getItem("token");
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const url = `${host}/carts`;
	const res = await axios.get<{ data: CartInterface | null }>(url, config);
	return res.data.data;
};
