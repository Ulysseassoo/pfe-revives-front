import { ShoeInterface } from "@inteface/ShoeInterface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { host } from "@services/Api";

interface ProductsQueryParams {
	model?: string;
	gte?: number;
	gt?: number;
	lte?: number;
	lt?: number;
	size?: number;
	brand: string;
	color?: string;
	take?: string;
	rate?: string;
}

const buildUrl = (params: ProductsQueryParams) => {
	let url = `?&brand=${params.brand}`;
	if (params.gt) {
		url += `&gt=${params.gt}`;
	}
	if (params.take) {
		url += `&take=${params.take}`;
	}
	if (params.rate) {
		url += `&rate=${params.rate}`;
	}
	if (params.model) {
		url += `&model=${params.model}`;
	}

	return url;
};

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
		listShoes: builder.query<{ data: ShoeInterface[] }, ProductsQueryParams>({
			query: (params) => buildUrl(params),
			providesTags: (result) =>
				// is result available?
				result?.data
					? // successful query
					  [...result.data.map(({ shoe_id }) => ({ type: "Shoes", shoe_id }) as const), { type: "Shoes", id: "LIST" }]
					: // an error occurred, but we still want to refetch this query when `{ type: 'Shoes', id: 'LIST' }` is invalidated
					  [{ type: "Shoes", id: "LIST" }],
		}),
	}),
});

export const { useListShoesQuery } = shoesApi;
