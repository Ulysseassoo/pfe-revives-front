import { produce } from "immer";
import User from "@inteface/UserInteface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
	user: User | null;
	token: string | null;
	isAuthenticated: boolean;
}

const initialState: AuthState = {
	token: null,
	user: null,
	isAuthenticated: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string | null>) => {
			state.token = action.payload;
			state.isAuthenticated = Boolean(action.payload);
		},
		setUser: (state, action: PayloadAction<User | null>) => {
			state.user = action.payload;
		},
	},
});

export const { setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
