import { getUserInformations } from "@services/Api/User";
import useAuthStore from "@store/Auth";
import React, { useEffect, useState } from "react";

interface Props {
	children?: React.ReactNode;
}

const Authentification = ({ children }: Props) => {
	const { setUser, token, setToken } = useAuthStore();

	const validateToken = async () => {
		const storageToken = localStorage.getItem("token");
		if (storageToken !== null) {
			try {
				const user = await getUserInformations();
				setUser(user);
				setToken(storageToken);
			} catch (error) {
				// TODO Check if we are in protected pages
				localStorage.removeItem("token");
				setUser(null);
				setToken(null);
			}
		}
	};

	useEffect(() => {
		validateToken();
	}, [token]);

	return <>{children}</>;
};

export default Authentification;
