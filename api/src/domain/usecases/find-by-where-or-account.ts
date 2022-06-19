import { AccountModel } from "../models";

export interface FindByWhereOrAccount {
	findByWhereOr: (
		where: FindByWhereOrAccount.Params
	) => Promise<FindByWhereOrAccount.Result>;
}

export namespace FindByWhereOrAccount {
	export type Params = {
		id?: number;
		name?: string;
		email?: string;
	};

	export type Result = AccountModel[];
}
