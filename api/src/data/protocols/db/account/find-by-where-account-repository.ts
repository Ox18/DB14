import { FindByWhereAccount } from "@/domain/usecases";

export interface FindByWhereAccountRepository {
	findByWhere(
		where: FindByWhereAccountRepository.Params
	): Promise<FindByWhereAccountRepository.Result>;
}

export namespace FindByWhereAccountRepository {
	export type Params = FindByWhereAccount.Params;
	export type Result = FindByWhereAccount.Result;
}
