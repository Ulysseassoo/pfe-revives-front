import { getUserInformations } from "@services/Api/User";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import useAuthStore, { setToken, setUser } from "@store/reducers/Auth";
import { getUserCart } from "@store/reducers/Cart";
import React, { useEffect, useState } from "react";

interface Props {
	children?: React.ReactNode;
}

const Authentification = ({ children }: Props) => {
	const { token } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const validateToken = async () => {
		const storageToken = localStorage.getItem("token");
		if (storageToken !== null) {
			try {
				const user = await getUserInformations();
				dispatch(setUser(user));
				dispatch(setToken(storageToken));
				dispatch(getUserCart());
			} catch (error) {
				// TODO Check if we are in protected pages
				localStorage.removeItem("token");
				dispatch(setUser(null));
				dispatch(setToken(null));
			}
		}
	};

	useEffect(() => {
		validateToken();
	}, [token]);

	return <>{children}</>;
};

export default Authentification;
