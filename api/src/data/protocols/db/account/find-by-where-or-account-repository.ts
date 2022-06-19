import { FindByWhereOrAccount } from "@/domain/usecases";

export interface FindByWhereOrAccountRepository {
	findByWhereOr(
		where: FindByWhereOrAccountRepository.Params
	): Promise<FindByWhereOrAccountRepository.Result>;
}

export namespace FindByWhereOrAccountRepository {
	export type Params = FindByWhereOrAccount.Params;
	export type Result = FindByWhereOrAccount.Result;
}
