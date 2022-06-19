import { UserModel } from "../models";

export interface CreateUser {
	create: (user: CreateUser.Params) => Promise<CreateUser.Result>;
}

export namespace CreateUser {
	export type Params = {
		birthday: string;
		name: string;
		gender: string;
		account_id: number;
	};
	export type Result = UserModel;
}
