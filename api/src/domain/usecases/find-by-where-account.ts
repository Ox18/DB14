import { AccountModel } from "../models";

export interface FindByWhereAccount {
    findByWhere: (where: FindByWhereAccount.Params) => Promise<FindByWhereAccount.Result>;
}

export namespace FindByWhereAccount {
	export type Params = {
		id?: number;
		name?: string;
		email?: string;
	};
    export type Result = AccountModel[];
}
