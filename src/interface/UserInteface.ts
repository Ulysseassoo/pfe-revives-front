export default interface User {
	user_id: number;
	first_name: string;
	last_name: string;
	email: string;
	created_at: string;
	role: number;
	stripe_id?: string;
}
