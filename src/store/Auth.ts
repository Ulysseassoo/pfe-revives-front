import { create } from "zustand";
import { produce } from "immer";
import User from "@inteface/UserInteface";

interface AuthState {
	user: User | null;
	token: string | null;
	isAuthenticated: boolean;
	setUser: (user: User | null) => void;
	setToken: (token: string | null) => void;
}

const initialAuthState = {
	token: null,
	user: null,
	isAuthenticated: false,
};

const useAuthStore = create<AuthState>((set) => ({
	...initialAuthState,
	setToken: (token) =>
		set(
			produce((state: AuthState) => {
				state.token = token;
				state.isAuthenticated = Boolean(token);
			}),
		),
	setUser: (user) =>
		set(
			produce((state: AuthState) => {
				state.user = user;
			}),
		),
}));

export default useAuthStore;
