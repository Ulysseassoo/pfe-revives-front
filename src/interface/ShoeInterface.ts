import { PhotoInterface } from "./PhotoInterface";

export interface ShoeInterface {
	shoe_id: number;
	brand: string;
	model: string;
	color: string;
	size: number;
	status: string;
	price: number;
	real_price: number;
	rate: number;
	description: string;
	user_id?: number;
	created_at: Date;
	is_validate: boolean;
	Photo: PhotoInterface[];
}
