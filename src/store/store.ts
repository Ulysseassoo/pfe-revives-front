import { Action, AnyAction, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "./reducers/Auth";
import cartReducer from "./reducers/Cart";
import favoritesReducer from "./reducers/Favorites";
import { shoesApi } from "./api/Shoes";

const rootReducer = combineReducers({
	auth: authReducer,
	cart: cartReducer,
	favorites: favoritesReducer,
	[shoesApi.reducerPath]: shoesApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shoesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
