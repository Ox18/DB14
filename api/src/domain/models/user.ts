import { SuperModel } from "./super";

export interface UserModel extends SuperModel {
	name: string;
	account_id: number;
	gender: string;
	birthday: Date;
}
