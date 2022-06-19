import { AccountModel } from "../models";

export interface CreateAccount {
	create: (account: CreateAccount.Params) => Promise<CreateAccount.Result>;
}

export namespace CreateAccount {
	export type Params = AccountModel;

	export type Result = AccountModel;
}
