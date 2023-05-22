import { getUserInformations } from "@services/Api/User";
import useAuthStore from "@store/Auth";
import React, { useEffect } from "react";

interface Props {
	children?: React.ReactNode;
}

const Authentification = ({ children }: Props) => {
	const { setUser, token, setToken } = useAuthStore();

	const validateToken = async () => {
		try {
			const user = await getUserInformations();
			setUser(user);
		} catch (error) {
			// TODO Check if we are in protected pages
			localStorage.removeItem("token");
			setUser(null);
			setToken(null);
		}
	};

	useEffect(() => {
		const storageToken = localStorage.getItem("token");
		if (storageToken !== null) {
			validateToken();
			setToken(storageToken);
		}
	}, [token]);

	return <>{children}</>;
};

export default Authentification;
