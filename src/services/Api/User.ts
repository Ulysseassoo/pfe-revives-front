import axios, { AxiosResponse } from "axios";
import { host } from ".";
import { RegisterFormData } from "@services/schemas/User";
import User from "@inteface/UserInteface";

export const register = async (data: Omit<RegisterFormData, "confirmPassword">) => {
	const url = `${host}/users`;
	const res = await axios.post<User>(url, data);
	return res.data;
};

export const login = async (data: { email: string; password: string }) => {
	const url = `${host}/auth`;
	const res = await axios.post<{ token: string }>(url, data);
	return res.data;
};

export const getUserInformations = async () => {
	const token = localStorage.getItem("token");
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const url = `${host}/users/me`;
	const res = await axios.get<{ data: User }>(url, config);
	return res.data.data;
};
