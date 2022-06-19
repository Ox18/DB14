import { FindAllAccount } from "@/domain/usecases/find-all-account";

export interface FindAllAccountRepository {
	findAll(): Promise<FindAllAccountRepository.Result>;
}

export namespace FindAllAccountRepository {
	export type Result = FindAllAccount.Result;
}
