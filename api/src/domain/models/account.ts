import { SuperModel } from "./super";

export interface AccountModel extends SuperModel{
	name: string;
	email: string;
	password: string;
};
