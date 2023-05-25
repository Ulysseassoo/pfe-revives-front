import { ShoeInterface } from "@inteface/ShoeInterface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { host } from "@services/Api";

interface ProductsQueryParams {
	model?: string;
	gte?: string;
	gt?: string;
	lte?: string;
	lt?: string;
	size?: number;
	brand?: string;
	color?: string;
}

export const shoesApi = createApi({
	reducerPath: "shoesApi",
	tagTypes: ["Shoes"],
	baseQuery: fetchBaseQuery({
		baseUrl: `${host}/shoes`,
		prepareHeaders: (headers) => {
			const token = localStorage.getItem("token");
			headers.set("Authorization", `Bearer ${token}`);
			return headers;
		},
		credentials: "same-origin", // This allows server to set cookies,
	}),
	endpoints: (builder) => ({
		listShoes: builder.query<ShoeInterface[], ProductsQueryParams>({
			query: ({ model, gte, gt, lte, lt, size, brand, color }) => (model !== undefined ? `/${model}` : ""),
			providesTags: (result) =>
				// is result available?
				result
					? // successful query
					  [...result.map(({ shoe_id }) => ({ type: "Shoes", shoe_id }) as const), { type: "Shoes", id: "LIST" }]
					: // an error occurred, but we still want to refetch this query when `{ type: 'Shoes', id: 'LIST' }` is invalidated
					  [{ type: "Shoes", id: "LIST" }],
		}),
	}),
});

export const { useListShoesQuery } = shoesApi;
