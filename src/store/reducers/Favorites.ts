import FavoriteInterface from "@inteface/FavoriteInterface"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { createFavorite, deleteFavorite, getFavorites } from "@services/Api/Favorite"
import { RootState } from "@store/store"

export const getAllFavorites = createAsyncThunk("favorites/all", async () => {
	const favorites = await getFavorites()
	return favorites
})

// Slice
const favoritesSlice = createSlice({
	name: "favorites",
	initialState: [] as FavoriteInterface[],
	reducers: {
		addFavorite: (state, action: PayloadAction<FavoriteInterface>) => {
			state.push(action.payload)
		},
		removeFavorite: (state, action: PayloadAction<number>) => {
			return state.filter((item) => item.shoes_shoe_id !== action.payload)
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getAllFavorites.fulfilled, (state, action) => {
			state = action.payload
			return state
		})
	}
})

export const selectFavorites = (state: RootState) => state.favorites

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
