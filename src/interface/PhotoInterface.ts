import { ShoeInterface } from "./ShoeInterface";

export interface PhotoInterface {
	id: number;
	image_url: string;
	shoes_shoe_id: number;
	Shoe?: ShoeInterface;
}
