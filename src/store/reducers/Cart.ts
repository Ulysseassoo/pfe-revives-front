import { CartInterface, CartProduct } from "@inteface/CartInterface";
import { ShoeInterface } from "@inteface/ShoeInterface";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCart, getCart, updateCart } from "@services/Api/Cart";

interface CartState {
	id: number;
	products: CartProduct[];
}

const initialState: CartState = {
	id: 0,
	products: [],
};

export const getUserCart = createAsyncThunk<CartInterface>("cart/get", async () => {
	const cart = await getCart();
	if (cart === null) {
		const finalCart = await createCart();
		return {
			...finalCart,
			products: typeof finalCart.products === "string" ? JSON.parse(finalCart.products) : finalCart.products,
		};
	}

	return {
		...cart,
		products: typeof cart.products === "string" ? JSON.parse(cart.products) : cart.products,
	};
});

export const addProduct = createAsyncThunk<CartInterface, ShoeInterface>("cart/update", async (shoe, thunk) => {
	// @ts-ignore
	const id = thunk.getState().cart.id as number;
	// @ts-ignore
	const products = thunk.getState().cart.products as CartProduct[];
	const state = [];
	// @ts-ignore
	const existingItem = thunk.getState().cart.products.find((i) => i.shoe_id === shoe.shoe_id);

	if (existingItem) {
		existingItem.quantity += 1;
		state.push(existingItem);
	} else {
		state.push({ ...shoe, quantity: 1 });
	}

	const updatedCart = await updateCart({
		products: [...products, state[0]],
		id,
	});

	return {
		...updatedCart,
		products: typeof updatedCart.products === "string" ? JSON.parse(updatedCart.products) : updatedCart.products,
	};
});

export const removeProduct = createAsyncThunk<CartInterface, number>("cart/remove", async (shoe_id, thunk) => {
	// @ts-ignore
	const id = thunk.getState().cart.id as number;
	// @ts-ignore
	const products = thunk.getState().cart.products as CartProduct[];
	// @ts-ignore

	const updatedProducts = products.filter((product) => {
		if (product.shoe_id === shoe_id) {
			// Decrease quantity by 1
			const updatedQuantity = product.quantity - 1;

			if (updatedQuantity > 0) {
				// Update quantity if it's still greater than 0
				return { ...product, quantity: updatedQuantity };
			} else {
				// Remove product from the cart if quantity becomes 0
				return null;
			}
		}

		return product;
	});

	const updatedCart = await updateCart({
		products: updatedProducts,
		id,
	});

	return {
		...updatedCart,
		products: typeof updatedCart.products === "string" ? JSON.parse(updatedCart.products) : updatedCart.products,
	};
});

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<ShoeInterface>) => {
			const existingItem = state.products.find((i) => i.shoe_id === action.payload.shoe_id);
			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.products.push({ ...action.payload, quantity: 1 });
			}
		},
		removeItem: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter((item) => item.shoe_id !== action.payload);
		},
		clearCart: (state) => {
			state.products = [];
		},
		setProducts: (state, action: PayloadAction<CartProduct[]>) => {
			// @ts-ignore
			state.products = action.payload;
		},
		setCart: (state, action: PayloadAction<CartInterface>) => {
			state.id = action.payload.id;
			// @ts-ignore
			state.products = action.payload.products;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getUserCart.rejected, (state) => {
			state.products = [];
			state.id = 0;
		});
		builder.addCase(getUserCart.fulfilled, (state, action) => {
			state.id = action.payload.id;
			// @ts-ignore
			state.products = action.payload.products;
		});
		builder.addCase(addProduct.fulfilled, (state, action) => {
			// @ts-ignore
			state.products = action.payload.products;
		});
		builder.addCase(removeProduct.fulfilled, (state, action) => {
			// @ts-ignore
			state.products = action.payload.products;
		});
	},
});

export const { addItem, removeItem, clearCart, setProducts, setCart } = cartSlice.actions;
export default cartSlice.reducer;
