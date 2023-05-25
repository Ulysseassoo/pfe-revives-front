import { Action, AnyAction, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "./reducers/Auth";
import cartReducer from "./reducers/Cart";

const rootReducer = combineReducers({
	auth: authReducer,
	cart: cartReducer,
	// [contactApi.reducerPath]: contactApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
